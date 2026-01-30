import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

const nav = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screens" },
  { label: "FAQ", href: "#faq" },
  { label: "Download", href: "#download" },
];

const features = [
  {
    title: "AI skincare ingredient scanner",
    description:
      "Snap a label and Rico AI translates ingredients into a clear clean‑to‑toxic score in seconds.",
  },
  {
    title: "Aesthetician‑approved swaps",
    description:
      "Discover gentle alternatives under $30 that actually work for your skin and budget.",
  },
  {
    title: "Global ingredient translation",
    description:
      "Shopping abroad? Rico AI decodes labels in 108 countries so nothing slips by.",
  },
  {
    title: "Skin‑first, not hype‑first",
    description:
      "Built from real treatment room experience, not influencer trends.",
  },
];

const steps = [
  {
    title: "Scan any product",
    description: "Use your camera — no typing required.",
  },
  {
    title: "Understand your glow score",
    description: "See what matters, explained in plain language.",
  },
  {
    title: "Choose cleaner swaps",
    description: "Find options that fit your skin goals and budget.",
  },
];

const faqs = [
  {
    q: "Is Rico AI just for skincare pros?",
    a: "Nope. It’s built for beginners and skincare nerds alike — simple scores plus deeper ingredient breakdowns.",
  },
  {
    q: "How accurate are the scores?",
    a: "They’re grounded in esthetician expertise and ingredient safety research. We’re always improving with user feedback.",
  },
  {
    q: "Is it really free to try?",
    a: "Yes. Start with a free 3‑day trial — no credit card required.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCF7FF] text-[#1A1A1A]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FFD6F5] blur-[160px]" />
        <div className="absolute right-[-120px] top-[160px] h-[360px] w-[360px] rounded-full bg-[#C6F1FF] blur-[160px]" />
        <div className="absolute bottom-[-180px] left-[10%] h-[420px] w-[420px] rounded-full bg-[#E6FFF3] blur-[180px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ricoai-logo.png"
              alt="Rico AI"
              width={32}
              height={32}
            />
            <span className="text-sm font-semibold tracking-wide">Rico AI</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#4B4B4B] md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={appStoreUrl}
            className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-4 py-2 text-xs font-semibold text-white shadow-sm"
          >
            Download on iOS
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 lg:px-10">
        {/* Hero */}
        <section id="home" className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-sm">
              <Image src="/images/ricoai-logo.png" alt="Rico AI" width={24} height={24} />
              Your pocket esthetician — in 108 countries
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Know what you&apos;re really putting on your skin.
            </h1>
            <p className="text-lg text-[#4B4B4B]">
              Rico AI turns confusing labels into a glow‑friendly score you can trust.
              Built by a holistic esthetician and a tiny team who care deeply about
              real results — not hype.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={appStoreUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:translate-y-[-1px]"
              >
                Download on iOS
              </a>
              <a
                href={appStoreUrl}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-black/5"
              >
                Start free 3‑day trial
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[#6B6B6B]">
              <span>Small team, growing community</span>
              <span>•</span>
              <span>Under‑$30 swaps</span>
              <span>•</span>
              <span>Global ingredient translation</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-white/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-4 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/frame-1.png"
                alt="Rico AI app screenshots"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-20 rounded-[36px] bg-gradient-to-br from-[#14121C] via-[#1B1A24] to-[#2A1F2B] px-8 py-12 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Simple as 1‑2‑3
              </p>
              <h2 className="mt-2 text-3xl font-semibold">From confused to confident in 3 seconds.</h2>
            </div>
            <a
              href={appStoreUrl}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A]"
            >
              Download on iOS
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] bg-white/5 p-6">
                <p className="text-sm text-white/60">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
              Why Rico AI
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Fun, girly, AI‑powered skincare — with real results.
            </h2>
            <p className="mt-3 max-w-2xl text-[#4B4B4B]">
              A skincare ingredient scanner that blends AI smarts with esthetician
              experience. Scan, learn, and glow — without the overwhelm.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_20px_80px_-60px_rgba(123,97,255,0.5)]"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-[#4B4B4B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section id="screens" className="mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
              Screenshots
            </p>
            <h2 className="text-3xl font-semibold">See the Rico AI experience.</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_90px_-70px_rgba(99,140,255,0.45)]">
              <Image
                src="/images/frame-2.webp"
                alt="Rico AI app screen"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_90px_-70px_rgba(255,120,200,0.45)]">
              <Image
                src="/images/frame-3.webp"
                alt="Rico AI app screen"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20 rounded-[32px] border border-white/80 bg-white/90 px-8 py-12 shadow-[0_20px_80px_-60px_rgba(99,140,255,0.45)]">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold">Answers before you scan.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="space-y-3">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-[#4B4B4B]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="mt-20 rounded-[36px] bg-gradient-to-br from-[#FFE4F5] via-[#F3ECFF] to-[#DFF8FF] px-8 py-12 text-center shadow-[0_30px_120px_-80px_rgba(255,140,210,0.7)]">
          <h2 className="text-3xl font-semibold">Ready for your glow‑up?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#4B4B4B]">
            Your bathroom cabinet has products working against your skin right now.
            Scan everything in 3 seconds. Get safety scores from a licensed
            esthetician. Find cleaner alternatives under $30.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href={appStoreUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold text-white"
            >
              Download on iOS
            </a>
            <a
              href={appStoreUrl}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A]"
            >
              Start free 3‑day trial
            </a>
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 text-sm text-[#8C8C8C] md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/ricoai-logo.png" alt="Rico AI" width={24} height={24} />
            <span>Rico AI</span>
          </div>
          <p>© {new Date().getFullYear()} Rico AI. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
