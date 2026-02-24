import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

const nav = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Glow stories", href: "#glow" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Download", href: "#download" },
];

const features = [
  {
    title: "AI skincare ingredient scanner",
    description:
      "Scan any label and get a clear clean‑to‑toxic score in seconds — no confusion, no rabbit holes.",
  },
  {
    title: "Esthetician‑approved swaps",
    description:
      "Find under‑$30 essentials (cleanser, moisturizer, SPF) plus smarter upgrades when you want more.",
  },
  {
    title: "Worldwide label translation",
    description:
      "Decode products in multiple languages so you can shop confidently anywhere.",
  },
  {
    title: "Sustainable habit tracking",
    description:
      "Build streaks and stay consistent so your skin finally reflects your effort.",
  },
];

const steps = [
  {
    title: "Point, scan, done",
    description: "Your camera reads the label — fast and effortless.",
    image: "/images/step-1.png",
  },
  {
    title: "Get clarity, not confusion",
    description: "We translate the ingredients into a score you can trust.",
    image: "/images/step-2.png",
  },
  {
    title: "Watch your skin transform",
    description: "Swap smarter, stay consistent, and glow for real.",
    image: "/images/step-3.jpg",
  },
];

const faqs = [
  {
    q: "What do I get after a scan?",
    a: "A clean‑to‑toxic score, ingredient breakdown, safer budget‑friendly swaps, and habit tracking for progress.",
  },
  {
    q: "Who is Rico AI for?",
    a: "Anyone who wants healthier skin — sensitive, acne‑prone, dry, irritated, or just seeking a cleaner routine.",
  },
  {
    q: "Is it really free to try?",
    a: "Yes — start with a free trial and cancel anytime. Pricing is transparent in‑app.",
  },
];

const testimonials = [
  {
    quote:
      "I finally understand what’s in my products — and my skin is calmer already.",
    name: "Jasmine, San Diego",
    rating: 5,
    image: "/images/glow-client-a.jpg",
  },
  {
    quote:
      "This feels like a tiny esthetician in my pocket. I trust it more than random TikTok tips.",
    name: "Elena, NYC",
    rating: 5,
    image: "/images/glow-client-b.jpg",
  },
  {
    quote:
      "The under‑$30 swaps are chef’s kiss. I’ve saved money and my skin loves me.",
    name: "Priya, London",
    rating: 4,
    image: "/images/glow-client-c.jpg",
  },
  {
    quote:
      "My redness went down once I finally understood ingredients and made smarter swaps.",
    name: "Camila, LA",
    rating: 5,
    image: "/images/glow-client-la-v2.jpg",
  },
  {
    quote:
      "Finally a routine that feels simple and actually works. My skin looks even now.",
    name: "Sofia, Miami",
    rating: 5,
    image: "/images/glow-client-5.jpg",
  },
];

const blogPosts = [
  {
    title: "Why Your Moisturizer Has More Ingredients Than Dinner",
    link: "/blog/why-your-moisturizer-has-more-ingredients-than-dinner",
    image: "https://www.ricoai.app/cdn/shop/articles/Frame_1948755304.jpg?v=1767736048",
    readTime: "2–3 min read",
  },
  {
    title: "The Hidden Truth About Skincare Ingredients (Less Is More)",
    link: "/blog/the-hidden-truth-about-your-skincare-ingredients",
    image: "https://www.ricoai.app/cdn/shop/articles/Frame_1948755295.webp?v=1762276998",
    readTime: "2–3 min read",
  },
  {
    title: "Niacinamide: Why This Vitamin B3 Works for Every Skin Type",
    link: "/blog/ingredient-breakdown-niacinamide",
    image:
      "https://www.ricoai.app/cdn/shop/articles/ingredient-breakdown-of-niacinamide-serum-closeup-ingredient-pretty-asthetic-ugc-style-vibes-beautiful-landscape-of-niacinamide-orgin_9cf4a5fe-1cd0-4ba4-b831-1c3403da4b59.png?v=1767740735",
    readTime: "2–3 min read",
  },
  {
    title: "Why Mineral Sunscreen Matters (Badger Difference)",
    link: "/blog/why-mineral-sunscreen-matters",
    image: "https://www.ricoai.app/cdn/shop/articles/badgers-sunscreen-in-summery-background.png?v=1767741051",
    readTime: "2–3 min read",
  },
  {
    title: "The Complete Guide to Clean Skincare",
    link: "/blog/the-complete-guide-to-clean-skincare",
    image: "/images/frame-1.png",
    readTime: "2–3 min read",
  },
  {
    title: "Nighttime Skincare Routine: Step‑by‑Step",
    link: "/blog/nighttime-skincare-routine",
    image: "/images/frame-2-padded.png",
    readTime: "2–3 min read",
  },
];

const marqueeItems = [
  "✨ Scan. Decode. Glow.",
  "🧴 Ingredient Decoder",
  "🌿 Clean Swaps",
  "🌍 108 countries (iOS)",
  "💖 Esthetician‑Built",
  "📸 Scan in Seconds",
  "🧠 AI‑Powered",
];

const proofBadges = [
  "💬 Loved by ingredient-conscious users",
  "🧾 Real ingredient label scans",
  "👩🏽‍⚕️ Built by a licensed esthetician",
];

const skinTypePaths = [
  { title: "Sensitive + Redness", hint: "Calm flare-ups with safer swaps" },
  { title: "Acne-Prone", hint: "Spot pore-cloggers before breakouts" },
  { title: "Dry Barrier", hint: "Protect your barrier, keep skin hydrated" },
  { title: "Dark Spots", hint: "Find gentler brightening options" },
];

const missionFlow = [
  {
    title: "Discover",
    description: "Learn one practical ingredient truth from Rico content across TikTok, Instagram, YouTube, or the blog.",
  },
  {
    title: "Decide",
    description: "Download Rico AI on iOS and scan your product label to get your Skin Safe Score.",
  },
  {
    title: "Glow",
    description: "Follow your cleaner routine consistently and improve skin confidence over time.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F3E9] text-[#2D4A3A]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#E9D7FF] blur-[160px]" />
        <div className="absolute right-[-120px] top-[160px] h-[360px] w-[360px] rounded-full bg-[#F8C9D7] blur-[160px]" />
        <div className="absolute bottom-[-180px] left-[10%] h-[420px] w-[420px] rounded-full bg-[#CFE7D5] blur-[180px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#F7F3E9]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/swan-logo-sage.png"
              alt="Rico AI swan logo"
              width={44}
              height={44}
            />
            <div className="flex flex-col leading-none">
              <span className="text-3xl sm:text-2xl font-semibold text-[#2D4A3A] whitespace-nowrap">Rico AI</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#2D4A3A]/60 whitespace-nowrap">
                Scan. Decode. Glow. ✨
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#2D4A3A]/80 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#2D4A3A]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={appStoreUrl} className="inline-flex">
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={150}
              height={48}
              className="h-10 w-auto"
            />
          </a>
        </div>
      </header>

      <div className="sticky top-[73px] z-40 border-b border-white/60 bg-[#F7F3E9]/85 px-5 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex w-full max-w-6xl gap-2">
          <a
            href={appStoreUrl}
            className="neon-ring glass-button inline-flex flex-1 items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-[#2D4A3A]"
          >
            Download iOS App
          </a>
          <a
            href="#how"
            className="glass-button inline-flex flex-1 items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-[#2D4A3A]"
          >
            How it works
          </a>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl overflow-x-hidden px-5 pb-24 pt-10 sm:px-6 lg:px-10">
        {/* Hero */}
        <section id="home" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Rico AI skincare scanner
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-[#2D4A3A]">
              Scan your skincare label. Get your Skin Safe Score in 3 seconds.
            </h1>
            <p className="text-lg text-[#2D4A3A]/80">
              Download on iOS, scan any product, and instantly see what helps your skin vs what may trigger it.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "1. Scan the label",
                "2. See your safety score",
                "3. Swap for cleaner options",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-[#2D4A3A]/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#2D4A3A]/70">
              Track your skin habits and see long‑term progress.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreUrl}
                className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                Download on the App Store (iOS)
              </a>
              <a
                href="#how"
                className="glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                See how Rico AI works
              </a>
            </div>
            <p className="text-xs font-medium text-[#2D4A3A]/65">iPhone only • Free trial • Cancel anytime</p>

            <div className="grid gap-2 sm:grid-cols-3">
              {proofBadges.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/75 px-3 py-2 text-xs font-semibold text-[#2D4A3A]/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-[22px] border border-white/80 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
                Start with your skin goal
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {skinTypePaths.map((item) => (
                  <a
                    key={item.title}
                    href={appStoreUrl}
                    className="rounded-xl border border-[#2D4A3A]/10 bg-white/80 px-3 py-2 text-left transition hover:border-[#9CAF88] hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-[#2D4A3A]">{item.title}</p>
                    <p className="text-xs text-[#2D4A3A]/70">{item.hint}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#F3E9FF]/70 via-[#EAF4EE]/60 to-[#F6E8E0]/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-transparent p-4 shadow-[0_40px_120px_-80px_rgba(45,74,58,0.5)]">
              <Image
                src="/images/hero-mockups.png"
                alt="Rico AI app mockups"
                width={1600}
                height={1200}
                quality={100}
                className="h-auto w-full rounded-[24px] object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* 15-second proof strip */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3A]/60">In 15 seconds</p>
            <p className="mt-2 text-sm font-semibold text-[#2D4A3A]">Scan one product you already own.</p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3A]/60">You instantly get</p>
            <p className="mt-2 text-sm font-semibold text-[#2D4A3A]">Skin Safe Score + ingredient clarity.</p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3A]/60">Then do this</p>
            <p className="mt-2 text-sm font-semibold text-[#2D4A3A]">Swap to cleaner options and start your routine.</p>
          </div>
        </section>

        {/* Animated banner */}
        <section className="mt-10 overflow-hidden rounded-[24px] border border-white/60 bg-white/70 py-5 shadow-sm">
          <div className="flex gap-10 whitespace-nowrap px-6 text-lg font-semibold text-[#2D4A3A]/85 sm:text-xl">
            <div className="marquee gap-10">
              {marqueeItems.map((item) => (
                <span key={`a-${item}`} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9CAF88]" />
                  {item}
                </span>
              ))}
              {marqueeItems.map((item) => (
                <span key={`b-${item}`} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D4A574]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="mt-16 rounded-[36px] bg-gradient-to-br from-[#EAF4EE] via-[#F3E9FF] to-[#F6E8E0] px-6 py-10 text-[#2D4A3A] shadow-[0_30px_120px_-90px_rgba(45,74,58,0.45)] sm:px-8 sm:py-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
                Scan. Decode. Glow.
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Calm, clear skincare in three effortless steps.
              </h2>
            </div>
            <a
              href={appStoreUrl}
              className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2D4A3A]"
            >
              Try your first scan on iOS
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] bg-white/80 p-6 shadow-sm">
                <p className="text-sm text-[#2D4A3A]/60">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[#2D4A3A]/70">{step.description}</p>
                <div className="mt-4 rounded-[20px] bg-white/70 p-3">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1200}
                    height={1600}
                    className={`w-full rounded-[16px] ${
                      index === 1
                        ? "h-72 object-cover object-center"
                        : "h-auto object-contain"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Why Rico AI
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Your pocket esthetician — 24/7, worldwide.
            </h2>
            <p className="mt-3 max-w-2xl text-[#2D4A3A]/75">
              Made by a human, for real people who still feel lost in skincare.
              Rico AI makes clean, affordable choices accessible — no appointment
              needed. Every recommendation is pre‑vetted by me using Rico AI itself.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_20px_80px_-60px_rgba(156,175,136,0.6)]"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-[#2D4A3A]/75">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission flow */}
        <section className="mt-16 rounded-[32px] border border-white/70 bg-white/80 px-6 py-10 shadow-sm sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Rico AI mission flow
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Our ecosystem is multi-channel, but the landing page has one job: app downloads.</h2>
            <p className="mt-3 text-[#2D4A3A]/75">
              We grow organically across many channels, then bring people here to do one clear action: download Rico AI on iOS and scan their first product.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {missionFlow.map((item, idx) => (
              <div key={item.title} className="rounded-2xl border border-[#2D4A3A]/10 bg-white/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3A]/60">Step {idx + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-[#2D4A3A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#2D4A3A]/75">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="mt-16">
          <div className="grid gap-8 rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src="/images/founder-zee.jpg"
                alt="Aranza (Zee), founder of Rico AI"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
                Meet the founder
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Hi, I’m Zee.</h2>
              <p className="mt-3 text-[#2D4A3A]/75">
                I went through a tremendous amount of toxicity within myself and my
                environment and healed the root cause of my cystic acne. That journey
                changed everything.
              </p>
              <p className="mt-3 text-[#2D4A3A]/75">
                I built Rico AI so you can decode ingredients, avoid irritants, and
                find cleaner swaps without ever needing to sit in my treatment room.
              </p>
              <p className="mt-3 text-[#2D4A3A]/75">
                Rico AI is for you — so you can feel confident, save money, and build a
                routine your skin actually loves.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-[18px] bg-white/60">
              <Image
                src="/images/glow-before.jpg"
                alt="Zee before"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Before
              </span>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[18px] bg-white/60">
              <Image
                src="/images/glow-after.jpg"
                alt="Zee after"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                After
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="glow" className="mt-16">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Glow stories
            </p>
            <h2 className="text-3xl font-semibold">Real results, real confidence, real transformations.</h2>
          </div>
          <div className="mt-8">
            <div className="review-marquee gap-6">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-[340px] flex-none rounded-[28px] border border-white/70 bg-gradient-to-br from-[#F3E9FF] via-[#F7F3E9] to-[#EAF4EE] p-6 shadow-[0_16px_70px_-60px_rgba(233,215,255,0.7)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-white/60">
                    <Image
                      src={item.image}
                      alt="Client before and after"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[#D4A574]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={`${item.name}-${index}-star-${i}`}>★</span>
                    ))}
                  </div>
                  <p className="mt-3 text-[#2D4A3A]/80">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-[#2D4A3A]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mt-16">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              From the Rico AI blog
            </p>
            <h2 className="text-3xl font-semibold">Education, inspiration, and glow tips.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/95 shadow-[0_16px_70px_-60px_rgba(233,215,255,0.7)]"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full bg-[#F3E9FF] px-3 py-1 text-xs font-semibold text-[#2D4A3A]">
                    {post.readTime}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#2D4A3A]">{post.title}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A3A]">
                    Read article →
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/blog"
              className="glass-button inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-[#2D4A3A]"
              target="_blank"
              rel="noreferrer"
            >
              View all articles
            </a>
          </div>
        </section>

        {/* Email capture */}
        <section className="mt-16 rounded-[32px] border border-white/70 bg-gradient-to-br from-[#F3E9FF] via-[#F7F3E9] to-[#EAF4EE] px-6 py-10 shadow-[0_20px_80px_-60px_rgba(233,215,255,0.6)] sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
                Join the glow list
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Get early tips + feature drops.</h2>
              <p className="mt-3 text-[#2D4A3A]/75">
                Skin knowledge is skin confidence. Stay connected for esthetician‑approved
                tips, ingredient education, and updates from Zee.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={appStoreUrl}
                className="neon-ring glass-button inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                Download on App Store (iOS)
              </a>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm text-[#2D4A3A] outline-none"
                />
                <button
                  type="submit"
                  className="glass-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[#2D4A3A]"
                >
                  Not ready yet? Get tips
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16 rounded-[32px] border border-white/70 bg-gradient-to-br from-[#F3E9FF] via-[#F7F3E9] to-[#EAF4EE] px-6 py-10 shadow-[0_20px_80px_-60px_rgba(233,215,255,0.6)] sm:px-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold">Answers before you scan.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="space-y-3">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-[#2D4A3A]/75">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="mt-16 rounded-[36px] bg-gradient-to-br from-[#EAF4EE] via-[#F3E9FF] to-[#F6E8E0] px-6 py-10 text-center shadow-[0_30px_120px_-80px_rgba(156,175,136,0.5)] sm:px-8">
          <h2 className="text-3xl font-semibold">Ready for your glow‑up?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#2D4A3A]/75">
            Start in under 60 seconds: download Rico AI on iOS, scan one product in your bathroom,
            and get a Skin Safe Score + cleaner swaps you can buy right away.
          </p>
          <div className="mx-auto mt-5 grid max-w-3xl gap-2 text-sm text-[#2D4A3A]/80 sm:grid-cols-3">
            <p>1) Download on iOS</p>
            <p>2) Scan your label</p>
            <p>3) Follow your safer routine</p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={appStoreUrl}
              className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-[#2D4A3A]"
            >
              Download Rico AI on App Store (iOS)
            </a>
          </div>
          <div className="mt-3 flex justify-center">
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={165}
              height={50}
              className="h-10 w-auto"
            />
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 text-[#2D4A3A]/70 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/images/swan-logo-sage.png" alt="Rico AI" width={48} height={48} />
            <span className="text-base font-semibold md:text-lg">Rico AI</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/ricoai.app/"
              className="inline-flex items-center gap-2 rounded-full border border-[#2D4A3A]/20 bg-white/70 px-3 py-1.5 text-[#2D4A3A] transition hover:scale-105 hover:bg-white"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @ricoai.app"
              title="Instagram @ricoai.app"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-xs font-semibold">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@RICO-AI-APP"
              className="inline-flex items-center gap-2 rounded-full border border-[#2D4A3A]/20 bg-white/70 px-3 py-1.5 text-[#2D4A3A] transition hover:scale-105 hover:bg-white"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Shorts @rico-ai-app"
              title="YouTube Shorts @rico-ai-app"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z" />
                <path d="M10 15.5V8.5l6 3.5-6 3.5Z" fill="#F7F3E9" />
              </svg>
              <span className="text-xs font-semibold">YouTube</span>
            </a>
            <a
              href="https://www.tiktok.com/@ricoai_"
              className="inline-flex items-center gap-2 rounded-full border border-[#2D4A3A]/20 bg-white/70 px-3 py-1.5 text-[#2D4A3A] transition hover:scale-105 hover:bg-white"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok @ricoai_"
              title="TikTok @ricoai_"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M14.5 3v10.1a3.6 3.6 0 1 1-2.6-3.5V7.3a6 6 0 1 0 5.1 5.9V8.9c1.1.9 2.4 1.4 3.8 1.5V7.7c-1.8-.2-3.4-1.2-4-2.7H14.5Z" />
              </svg>
              <span className="text-xs font-semibold">TikTok</span>
            </a>
          </div>
          <p className="text-base font-medium md:text-lg">Rico AI made with love 💜</p>
        </footer>
      </main>
    </div>
  );
}
