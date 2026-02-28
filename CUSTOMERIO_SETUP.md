# Customer.io Nurture Setup (Rico AI)

## 1) Required env vars
Add these to your deployment environment:
- `CUSTOMERIO_SITE_ID`
- `CUSTOMERIO_API_KEY`
- `CUSTOMERIO_REGION` (`us` or `eu`)
- `CUSTOMERIO_EVENT_NAME` (optional, default: `email_capture_submitted`)

## 2) Trigger event
Use event trigger:
- **Event name:** `email_capture_submitted`

Event payload fields available:
- `source`
- `capture_point`
- `skin_concern`

Customer traits written:
- `email`
- `first_name`
- `skin_concern`
- `source`
- `capture_point`
- `subscribed_at`

## 3) 3-email nurture flow (recommended)
### Email 1 (send immediately)
- **Subject:** Start your first skin-safe scan in 60 seconds
- **Goal:** first scan + trial start
- **CTA:** Download Rico AI on iOS

### Email 2 (wait 24 hours)
- **Subject:** The ingredient mistakes by skin type (quick cheat sheet)
- **Goal:** education + trust
- **Personalization:** branch by `skin_concern`

### Email 3 (wait 72 hours)
- **Subject:** Scan. Decode. Glow. (your smarter routine starts here)
- **Goal:** conversion reminder + retention framing
- **CTA:** Start free trial

## 4) Segments
Create segments by trait:
- `skin_concern = acne-prone`
- `skin_concern = sensitive-redness`
- `skin_concern = dry-barrier`
- `skin_concern = hyperpigmentation`
- `skin_concern = combo-oily`

## 5) KPI tracking
Track weekly:
- capture rate (landing form submit / sessions)
- open rate + click rate by email
- trial starts from email (attribution)

## 6) Where code is implemented
- API endpoint: `src/app/api/lead/route.ts`
- Capture forms: `src/app/page.tsx`
