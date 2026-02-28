import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  email: string;
  firstName?: string;
  skinConcern?: string;
  source?: string;
  capturePoint?: string;
};

const CUSTOMERIO_SITE_ID = process.env.CUSTOMERIO_SITE_ID;
const CUSTOMERIO_API_KEY = process.env.CUSTOMERIO_API_KEY;
const CUSTOMERIO_REGION = (process.env.CUSTOMERIO_REGION || "us").toLowerCase();
const CUSTOMERIO_EVENT_NAME = process.env.CUSTOMERIO_EVENT_NAME || "email_capture_submitted";

function customerIoBaseUrl() {
  return CUSTOMERIO_REGION === "eu"
    ? "https://track-eu.customer.io"
    : "https://track.customer.io";
}

function authHeader() {
  const token = Buffer.from(`${CUSTOMERIO_SITE_ID}:${CUSTOMERIO_API_KEY}`).toString("base64");
  return `Basic ${token}`;
}

function toCustomerId(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

async function parsePayload(req: NextRequest): Promise<LeadPayload> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await req.json();
    return {
      email: String(body?.email || "").trim(),
      firstName: body?.firstName ? String(body.firstName).trim() : undefined,
      skinConcern: body?.skinConcern ? String(body.skinConcern).trim() : undefined,
      source: body?.source ? String(body.source).trim() : undefined,
      capturePoint: body?.capturePoint ? String(body.capturePoint).trim() : undefined,
    };
  }

  const form = await req.formData();
  return {
    email: String(form.get("email") || "").trim(),
    firstName: form.get("firstName") ? String(form.get("firstName")).trim() : undefined,
    skinConcern: form.get("skinConcern") ? String(form.get("skinConcern")).trim() : undefined,
    source: form.get("source") ? String(form.get("source")).trim() : undefined,
    capturePoint: form.get("capturePoint") ? String(form.get("capturePoint")).trim() : undefined,
  };
}

async function sendToCustomerIo(payload: LeadPayload) {
  const base = customerIoBaseUrl();
  const customerId = encodeURIComponent(toCustomerId(payload.email));
  const headers = {
    Authorization: authHeader(),
    "Content-Type": "application/json",
  };

  const identify = await fetch(`${base}/api/v1/customers/${customerId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      email: payload.email,
      first_name: payload.firstName || "",
      skin_concern: payload.skinConcern || "",
      source: payload.source || "ricoai-landing",
      capture_point: payload.capturePoint || payload.source || "ricoai-landing",
      subscribed_at: Math.floor(Date.now() / 1000),
    }),
  });

  if (!identify.ok) {
    const text = await identify.text();
    throw new Error(`Customer.io identify failed (${identify.status}): ${text}`);
  }

  const event = await fetch(`${base}/api/v1/customers/${customerId}/events`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: CUSTOMERIO_EVENT_NAME,
      data: {
        source: payload.source || "ricoai-landing",
        capture_point: payload.capturePoint || payload.source || "ricoai-landing",
        skin_concern: payload.skinConcern || "",
      },
    }),
  });

  if (!event.ok) {
    const text = await event.text();
    throw new Error(`Customer.io event failed (${event.status}): ${text}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!CUSTOMERIO_SITE_ID || !CUSTOMERIO_API_KEY) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing CUSTOMERIO_SITE_ID / CUSTOMERIO_API_KEY env vars",
        },
        { status: 503 }
      );
    }

    const payload = await parsePayload(req);

    if (!payload.email || !isValidEmail(payload.email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required" }, { status: 400 });
    }

    await sendToCustomerIo(payload);

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.redirect(new URL("/?joined=1", req.url), 303);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[customer-io-lead]", error);
    return NextResponse.json({ ok: false, error: "Lead capture failed" }, { status: 500 });
  }
}
