import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Rico AI Blog",
  description: "Education, inspiration, and glow tips from Rico AI.",
};

const BLOG_META: Record<
  string,
  { image: string; tag: string; outcome: string; cta: string }
> = {
  "why-your-moisturizer-has-more-ingredients-than-dinner": {
    image: "/images/founder-zee.jpg",
    tag: "Ingredient labels",
    outcome: "Learn how to spot fillers fast",
    cta: "Decode labels now",
  },
  "the-hidden-truth-about-your-skincare-ingredients": {
    image: "/images/glow-before-after-1.jpg",
    tag: "Clean routine",
    outcome: "Cut product overload",
    cta: "Build a simpler routine",
  },
  "ingredient-breakdown-niacinamide": {
    image: "/images/glow-client-sofia.jpg",
    tag: "Ingredient breakdown",
    outcome: "Use niacinamide correctly",
    cta: "Use niacinamide smarter",
  },
  "why-mineral-sunscreen-matters": {
    image: "/images/glow-client-la-v2.jpg",
    tag: "SPF education",
    outcome: "Choose barrier-safe sunscreen",
    cta: "Pick better SPF",
  },
  "the-complete-guide-to-clean-skincare": {
    image: "/images/glow-client-a.jpg",
    tag: "Clean skincare",
    outcome: "Create your simple glow system",
    cta: "Start your clean routine",
  },
  "nighttime-skincare-routine": {
    image: "/images/glow-client-e.jpg",
    tag: "Night routine",
    outcome: "Repair skin while you sleep",
    cta: "Fix your PM routine",
  },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-6 py-16 text-[#2F2544] bg-[radial-gradient(900px_520px_at_90%_-10%,rgba(177,138,255,0.35),transparent_55%),radial-gradient(700px_420px_at_8%_8%,rgba(122,74,185,0.18),transparent_50%),linear-gradient(135deg,#F7F3E9_0%,#F3ECFA_55%,#EEE6F8_100%)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-[#7A4AB9]/80">Rico AI Blog</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-[#31224F]">
          Education, inspiration, and glow tips.
        </h1>
        <p className="text-[#4A3B63] mt-4 max-w-3xl">
          Clear, minimal skincare guidance from Zee — ingredient breakdowns, routines,
          and clean swaps.
        </p>

        <div className="mt-6 rounded-2xl border border-[#B18AFF]/35 bg-white/70 p-4 md:p-5 shadow-[0_12px_26px_rgba(122,74,185,0.12)]">
          <p className="text-xs uppercase tracking-wider text-[#7A4AB9]">Read, then act</p>
          <p className="text-sm text-[#4A3B63] mt-2">
            Don’t just read — apply one insight today and scan one product before checkout.
          </p>
          <a
            href="https://bit.ly/4qO4Kc7"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 rounded-full border border-[#B18AFF] bg-[#F7F3E9] px-4 py-2 text-sm font-semibold text-[#7A4AB9]"
          >
            Download Rico AI
          </a>
        </div>

        <div className="mt-10 grid gap-6">
          {posts.map((post) => {
            const m =
              BLOG_META[post.slug] ||
              ({
                image: "/images/glow-client-b.jpg",
                tag: "Glow education",
                outcome: "Make one smarter skincare choice",
                cta: "Read + apply now",
              } as const);

            return (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl bg-white/72 border border-[#B18AFF]/35 shadow-[0_14px_34px_rgba(122,74,185,0.14)] backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-[240px_1fr] gap-0">
                  <div className="relative h-52 md:h-full">
                    <img
                      src={m.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#1c1231]/80 to-transparent">
                      <span className="inline-block rounded-full bg-[#F7F3E9]/90 px-2.5 py-1 text-[11px] font-semibold text-[#5F3A92]">
                        {m.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="text-xs text-[#6D5A8E]">{post.date}</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-2 text-[#2F2544] leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#4A3B63] mt-2">{post.excerpt}</p>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F5ECFF] border border-[#D5B9FF]/50 px-3 py-1">
                      <span className="text-[11px] uppercase tracking-wide text-[#7A4AB9]">Outcome</span>
                      <span className="text-sm text-[#4A3B63]">{m.outcome}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block mt-4 text-[#7A4AB9] font-semibold"
                    >
                      {m.cta} →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
