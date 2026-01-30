import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

const features = [
  {
    title: "Scan any product in seconds",
    description:
      "Point your camera at any label. Rico AI reads it instantly and highlights the ingredients that matter.",
  },
  {
    title: "Clear clean-to-toxic scores",
    description:
      "No jargon. Get a simple score and plain‑language explanations you can trust.",
  },
  {
    title: "Find gentle swaps under $30",
    description:
      "Discover aesthetician‑approved alternatives that work for your skin and budget.",
  },
  {
    title: "Global ingredient translation",
    description:
      "Shopping abroad? Rico AI decodes labels in 108 countries so you never miss hidden toxins.",
  },
];

const steps = [
  {
    title: "Snap a product",
    description: "Your camera does the work.",
  },
  {
    title: "Get your glow score",
    description: "Understand every ingredient in plain English.",
  },
  {
    title: "Swap smarter",
    description: "Find cleaner picks made for your skin and budget.",
  },
];

const faqs = [
  {
    q: "Is it really free to try?",
    a: "Yes. Start with a free 3‑day trial—no credit card required.",
  },
  {
    q: "Does it work outside the U.S.?",
    a: "Yes. Rico AI works in 108 countries with ingredient translation built in.",
  },
  {
    q: "Is this for beginners or skincare nerds?",
    a: "Both. You’ll get simple scores plus deeper ingredient explanations when you want them.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A]">
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 lg:px-10">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
              <Image
                src="https://www.ricoai.app/cdn/shop/files/RicoAILogo.png"
                alt="Rico AI"
                width={28}
                height={28}
              />
              Your pocket esthetician — worldwide
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Know what you&apos;re really putting on your skin.
            </h1>
            <p className="text-lg text-[#4B4B4B]">
              Scan any product in 3 seconds, get a clean‑to‑toxic score you actually
              understand, and discover aesthetician‑approved swaps under $30.
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
              <span>108 countries supported</span>
              <span>•</span>
              <span>Trusted by glow‑hunters worldwide</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#FFF2E8] via-[#F7F5F2] to-[#E3F3EE] blur-2xl" />
            <div className="relative rounded-[32px] bg-white p-6 shadow-2xl">
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
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
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
                    <div className="rounded-2xl bg-white p-4 text-sm text-[#4B4B4B] shadow-sm">
                      ✅ No hidden irritants
                    </div>
                    <div className="rounded-2xl bg-white p-4 text-sm text-[#4B4B4B] shadow-sm">
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
        </section>

        {/* Logos / trust */}
        <section className="mt-20 rounded-3xl border border-black/5 bg-white px-8 py-10 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C]">
                Built by a holistic esthetician
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                From treatment room expertise to your pocket.
              </h2>
            </div>
            <p className="text-[#4B4B4B]">
              Rico AI gives you the same ingredient analysis used in professional
              skincare consultations — now available instantly in any store, in any
              country.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C]">
                Why Rico AI
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Confident skincare, without the guesswork.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-[#4B4B4B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-20 rounded-3xl bg-[#1A1A1A] px-8 py-12 text-white">
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
              <div key={step.title} className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-white/60">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C]">
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
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
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
            <div className="mt-4 rounded-2xl bg-[#F7F5F2] p-4 text-sm text-[#4B4B4B]">
              “Ingredients don’t care what language they’re written in. Rico AI keeps
              your glow safe everywhere.”
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C]">
              Glow stories
            </p>
            <h2 className="text-3xl font-semibold">Real results, real confidence.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "I finally understand what’s in my products — and my skin has never looked better.",
                name: "Jasmine, San Diego",
              },
              {
                quote:
                  "Rico AI saved me from buying a serum full of irritants. Instant peace of mind.",
                name: "Elena, NYC",
              },
              {
                quote:
                  "The swaps under $30 are clutch. It’s like a friend shopping with me.",
                name: "Priya, London",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <p className="text-[#4B4B4B]">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[#1A1A1A]">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 rounded-3xl border border-black/5 bg-white px-8 py-12 shadow-sm">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C]">
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
        <section className="mt-20 rounded-3xl bg-[#E3F3EE] px-8 py-12 text-center">
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
