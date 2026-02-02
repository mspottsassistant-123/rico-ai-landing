import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

const nav = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Glow stories", href: "#glow" },
  { label: "Blog", href: "#blog" },
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
    rating: 5,
  },
  {
    quote:
      "This feels like a tiny esthetician in my pocket. I trust it more than random TikTok tips.",
    name: "Elena, NYC",
    rating: 5,
  },
  {
    quote:
      "The under‑$30 swaps are chef’s kiss. I’ve saved money and my skin loves me.",
    name: "Priya, London",
    rating: 4,
  },
];

const blogPosts = [
  {
    title: "Why Your Moisturizer Has More Ingredients Than Dinner",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/why-your-moisturizer-has-more-ingredients-than-dinner-rico-ai",
    image: "https://www.ricoai.app/cdn/shop/articles/Frame_1948755304.jpg?v=1767736048",
    readTime: "2–3 min read",
  },
  {
    title: "The Hidden Truth About Skincare Ingredients (Less Is More)",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/the-hidden-truth-about-your-skincare-ingredients-why-less-really-is-more",
    image: "https://www.ricoai.app/cdn/shop/articles/Frame_1948755295.webp?v=1762276998",
    readTime: "2–3 min read",
  },
  {
    title: "Niacinamide: Why This Vitamin B3 Works for Every Skin Type",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/ingredient-breakdown-the-truth-about-niacinamide-why-this-vitamin-b3-powerhouse-works-for-every-skin-type",
    image:
      "https://www.ricoai.app/cdn/shop/articles/ingredient-breakdown-of-niacinamide-serum-closeup-ingredient-pretty-asthetic-ugc-style-vibes-beautiful-landscape-of-niacinamide-orgin_9cf4a5fe-1cd0-4ba4-b831-1c3403da4b59.png?v=1767740735",
    readTime: "2–3 min read",
  },
  {
    title: "Why Mineral Sunscreen Matters (Badger Difference)",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/why-mineral-sunscreen-matters-holistic-esthetician-explains-the-badger-difference",
    image: "https://www.ricoai.app/cdn/shop/articles/badgers-sunscreen-in-summery-background.png?v=1767741051",
    readTime: "2–3 min read",
  },
  {
    title: "The Complete Guide to Clean Skincare",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/the-complete-guide-to-clean-skincare-scan-decode-and-glow-with-rico-ai",
    image: "/images/frame-1.png",
    readTime: "2–3 min read",
  },
  {
    title: "Nighttime Skincare Routine: Step‑by‑Step",
    link: "https://www.ricoai.app/blogs/holisticzee-blog/nighttime-skincare-routine-step-by-step-guide-with-rico-ai",
    image: "/images/frame-2-padded.png",
    readTime: "2–3 min read",
  },
];

const marqueeItems = [
  "✨ Scan. Decode. Glow.",
  "🧴 Ingredient Decoder",
  "🌿 Clean Swaps",
  "🌍 Worldwide",
  "💖 Esthetician‑Built",
  "📸 Scan in Seconds",
  "🧠 AI‑Powered",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] text-[#2D4A3A]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#E9D7FF] blur-[160px]" />
        <div className="absolute right-[-120px] top-[160px] h-[360px] w-[360px] rounded-full bg-[#F8C9D7] blur-[160px]" />
        <div className="absolute bottom-[-180px] left-[10%] h-[420px] w-[420px] rounded-full bg-[#CFE7D5] blur-[180px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#F7F3E9]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/swan-logo-sage.png"
              alt="Rico AI swan logo"
              width={44}
              height={44}
            />
            <span className="text-sm font-semibold text-[#2D4A3A]">Rico AI</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#2D4A3A]/80 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#2D4A3A]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={appStoreUrl}
            className="glass-button inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-[#2D4A3A]"
          >
            Get your glow score
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-6 lg:px-10">
        {/* Hero */}
        <section id="home" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Rico AI skincare scanner
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-[#2D4A3A]">
              Scan any skincare label. Get a clean‑to‑toxic score in seconds.
            </h1>
            <p className="text-lg text-[#2D4A3A]/80">
              Rico AI translates ingredients, flags red‑flag irritants, and suggests
              esthetician‑approved swaps under $30 — so you can shop with confidence.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "1. Scan the label",
                "2. See your safety score",
                "3. Swap for cleaner options",
                "4. Track your skin habits",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-[#2D4A3A]/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreUrl}
                className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                Download on iOS — Free 3‑Day Trial
              </a>
              <a
                href="#how"
                className="glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                See how it works
              </a>
            </div>
            <div className="text-sm text-[#2D4A3A]/70">
              <p>Esthetician‑built guidance</p>
              <p>Under‑$30 essentials routine</p>
              <p>Worldwide label translation</p>
              <p>Smart habit tracking</p>
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
              Start your free trial
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

        {/* Founder */}
        <section id="founder" className="mt-16">
          <div className="grid gap-8 rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-center">
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
        </section>

        {/* Testimonials */}
        <section id="glow" className="mt-16">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2D4A3A]/60">
              Glow stories
            </p>
            <h2 className="text-3xl font-semibold">Real results, real confidence, real transformations.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-[0_16px_70px_-60px_rgba(233,215,255,0.7)]">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden rounded-[18px]">
                  <Image
                    src="/images/glow-before.jpg"
                    alt="Before skin transformation"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-[18px]">
                  <Image
                    src="/images/glow-after.jpg"
                    alt="After skin transformation"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    After
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#2D4A3A]/70">Real transformation</p>
            </div>
            <div className="overflow-hidden">
              <div className="review-marquee gap-6">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="w-[260px] flex-none rounded-[28px] border border-white/70 bg-gradient-to-br from-[#F3E9FF] via-[#F7F3E9] to-[#EAF4EE] p-6 shadow-[0_16px_70px_-60px_rgba(233,215,255,0.7)]"
                  >
                    <div className="flex items-center gap-1 text-[#D4A574]">
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
              href="https://www.ricoai.app/blogs/holisticzee-blog"
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
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm text-[#2D4A3A] outline-none"
              />
              <button
                type="submit"
                className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[#2D4A3A]"
              >
                Join the list
              </button>
            </form>
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
            Your bathroom cabinet has products working against your skin right now.
            Scan everything in 3 seconds. Get safety scores from a licensed
            esthetician. Find cleaner alternatives under $30.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={appStoreUrl}
              className="neon-ring glass-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-[#2D4A3A]"
            >
I Want Glowy Skin
            </a>
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 text-sm text-[#2D4A3A]/70 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/swan-logo-sage.png" alt="Rico AI" width={24} height={24} />
            <span>Rico AI</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://bit.ly/rico-ig" className="hover:text-[#2D4A3A]" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://bit.ly/rico-yt" className="hover:text-[#2D4A3A]" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://bit.ly/rico-tt" className="hover:text-[#2D4A3A]" target="_blank" rel="noreferrer">TikTok</a>
          </div>
          <p>Rico AI made with love 💜</p>
        </footer>
      </main>
    </div>
  );
}
