import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

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

const testimonials = [
  {
    quote:
      "I finally understand what’s in my products — and my skin is calmer already.",
    name: "Jasmine, San Diego",
  },
  {
    quote:
      "This feels like a tiny esthetician in my pocket. I trust it more than random TikTok tips.",
    name: "Elena, NYC",
  },
  {
    quote:
      "The under‑$30 swaps are chef’s kiss. I’ve saved money and my skin loves me.",
    name: "Priya, London",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCF7FF] text-[#1A1A1A]">
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 lg:px-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#FFF4FB] via-[#F3FAFF] to-[#E9FFF6] p-8 shadow-[0_30px_120px_-80px_rgba(210,120,255,0.65)] sm:p-12">
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-[#FFD6F5] blur-[140px]" />
          <div className="absolute -bottom-24 left-6 h-64 w-64 rounded-full bg-[#C6F1FF] blur-[140px]" />
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-sm">
                <Image
                  src="https://www.ricoai.app/cdn/shop/files/RicoAILogo.png"
                  alt="Rico AI"
                  width={28}
                  height={28}
                />
                Your pocket esthetician — in 108 countries
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Know what you&apos;re really putting on your skin.
              </h1>
              <p className="text-lg text-[#4B4B4B]">
                Rico AI turns confusing labels into a glow‑friendly score you can
                trust. Built by a holistic esthetician and a tiny team who care
                deeply about real results — not hype.
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
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-[#FFFFFF] via-[#F8F7FF] to-[#F4FFF9] blur-2xl" />
              <div className="relative rounded-[32px] bg-white/90 p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.6)]">
                <div className="rounded-[28px] border border-black/10 bg-gradient-to-b from-white to-[#F3F7F5] p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#8C8C8C]">
                      Rico AI Preview
                    </span>
                    <span className="rounded-full bg-[#E3F3EE] px-3 py-1 text-xs font-semibold text-[#2B6C59]">
                      Glow Score
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <Image
                          src="https://www.ricoai.app/cdn/shop/files/RicoAILogo.png"
                          alt="Rico AI"
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className="text-sm font-semibold">Hydrating Serum</p>
                          <p className="text-xs text-[#6B6B6B]">Clean‑to‑toxic score</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-2 flex-1 rounded-full bg-[#E6F2EE]">
                          <div className="h-2 w-4/5 rounded-full bg-[#2B6C59]" />
                        </div>
                        <span className="text-sm font-semibold text-[#2B6C59]">82</span>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl bg-gradient-to-br from-[#FFF4FB] to-[#F3FAFF] p-4 text-sm text-[#4B4B4B] shadow-sm">
                        ✅ No hidden irritants
                      </div>
                      <div className="rounded-3xl bg-gradient-to-br from-[#E9FFF6] to-[#F8F7FF] p-4 text-sm text-[#4B4B4B] shadow-sm">
                        🌿 3 gentler swaps under $30
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-[#8C8C8C]">
                  Screens shown are illustrative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="mt-16 rounded-[32px] border border-black/5 bg-white/80 px-8 py-10 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
                Realistic, not overhyped
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                A small team with a big mission.
              </h2>
            </div>
            <p className="text-[#4B4B4B]">
              We&apos;re a tiny team building Rico AI with care. We don&apos;t have millions of
              downloads yet — and that&apos;s okay. We&apos;re focused on real skin wins, one
              scan at a time, and your feedback helps us grow.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-20">
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

        {/* Steps */}
        <section className="mt-20 rounded-[36px] bg-gradient-to-br from-[#14121C] via-[#1B1A24] to-[#2A1F2B] px-8 py-12 text-white">
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

        {/* Global */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
              Worldwide coverage
            </p>
            <h2 className="mt-2 text-3xl font-semibold">One app. 108 countries. Zero guesswork.</h2>
            <p className="mt-4 text-[#4B4B4B]">
              Shopping K‑beauty in Seoul? French pharmacy in Paris? Rico AI translates
              labels so you can shop confidently anywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Label translation",
                "Ingredient alerts",
                "Budget‑friendly swaps",
                "Glow‑habit tracking",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/80 bg-gradient-to-br from-white to-[#F7F2FF] p-6 shadow-[0_24px_90px_-70px_rgba(98,89,255,0.6)]">
            <div className="flex items-center gap-3">
              <Image
                src="https://www.ricoai.app/cdn/shop/files/RicoAILogo.png"
                alt="Rico AI"
                width={48}
                height={48}
              />
              <div>
                <p className="text-sm font-semibold">Instant translation</p>
                <p className="text-xs text-[#6B6B6B]">No more hidden irritants</p>
              </div>
            </div>
            <div className="mt-4 rounded-[24px] bg-white/80 p-4 text-sm text-[#4B4B4B]">
              “Ingredients don’t care what language they’re written in. Rico AI keeps
              your glow safe everywhere.”
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A8FBF]">
              Glow stories
            </p>
            <h2 className="text-3xl font-semibold">Real results, real confidence.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_16px_70px_-60px_rgba(255,120,200,0.6)]"
              >
                <p className="text-[#4B4B4B]">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[#1A1A1A]">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 rounded-[32px] border border-white/80 bg-white/90 px-8 py-12 shadow-[0_20px_80px_-60px_rgba(99,140,255,0.45)]">
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
        <section className="mt-20 rounded-[36px] bg-gradient-to-br from-[#FFE4F5] via-[#F3ECFF] to-[#DFF8FF] px-8 py-12 text-center shadow-[0_30px_120px_-80px_rgba(255,140,210,0.7)]">
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
            <Image
              src="https://www.ricoai.app/cdn/shop/files/RicoAILogo.png"
              alt="Rico AI"
              width={24}
              height={24}
            />
            <span>Rico AI</span>
          </div>
          <p>© {new Date().getFullYear()} Rico AI. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
