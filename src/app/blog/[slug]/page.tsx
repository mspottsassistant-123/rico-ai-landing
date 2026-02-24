import Link from "next/link";
import type { ReactNode } from "react";
import { posts } from "../posts";

function renderInline(text: string) {
  const parts: Array<string | ReactNode> = [];
  let remaining = text;
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
  let match;
  let i = 0;
  while ((match = linkRe.exec(remaining))) {
    const [full, label, href] = match;
    const idx = match.index;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      <a key={`link-${i++}`} href={href} className="text-[#7A4AB9] underline">
        {label}
      </a>
    );
    remaining = remaining.slice(idx + full.length);
  }
  if (remaining) parts.push(remaining);
  return parts;
}

function renderBlocks(content: string) {
  return content.split("\n").map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="text-2xl font-semibold mt-8 mb-2">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={idx} className="text-xl font-semibold mt-6 mb-2">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    return (
      <p key={idx} className="text-[#4A3B63] leading-7 mt-4">
        {renderInline(trimmed)}
      </p>
    );
  });
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const normalized = decodeURIComponent(slug || "");
  const post = posts.find((p) => p.slug === normalized);
  if (!post) {
    return (
      <main className="min-h-screen px-6 py-16 text-[#2F2544] bg-[radial-gradient(900px_520px_at_90%_-10%,rgba(177,138,255,0.28),transparent_55%),radial-gradient(760px_420px_at_10%_8%,rgba(168,226,216,0.22),transparent_52%),linear-gradient(135deg,#F7F3E9_0%,#EEF8F4_48%,#F1EAFB_100%)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <Link href="/blog" className="text-[#7A4AB9] inline-block mt-4 font-medium">
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16 text-[#2F2544] bg-[radial-gradient(900px_520px_at_90%_-10%,rgba(177,138,255,0.28),transparent_55%),radial-gradient(760px_420px_at_10%_8%,rgba(168,226,216,0.22),transparent_52%),linear-gradient(135deg,#F7F3E9_0%,#EEF8F4_48%,#F1EAFB_100%)]">
      <div className="max-w-3xl mx-auto rounded-2xl bg-white/72 border border-[#B18AFF]/35 shadow-[0_16px_38px_rgba(122,74,185,0.16)] p-6 md:p-10 backdrop-blur-sm">
        <Link href="/blog" className="text-[#7A4AB9] font-medium">← Back to blog</Link>
        <p className="text-xs text-[#6D5A8E] mt-6">{post.date}</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-[#31224F]">{post.title}</h1>
        <div className="mt-6">{renderBlocks(post.content)}</div>
      </div>
    </main>
  );
}
