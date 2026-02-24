import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Rico AI Blog",
  description: "Education, inspiration, and glow tips from Rico AI.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-6 py-16 text-[#2F2544] bg-[radial-gradient(900px_520px_at_90%_-10%,rgba(177,138,255,0.35),transparent_55%),radial-gradient(700px_420px_at_8%_8%,rgba(122,74,185,0.18),transparent_50%),linear-gradient(135deg,#F7F3E9_0%,#F3ECFA_55%,#EEE6F8_100%)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-[#7A4AB9]/80">Rico AI Blog</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2 text-[#31224F]">
          Education, inspiration, and glow tips.
        </h1>
        <p className="text-[#4A3B63] mt-4">
          Clear, minimal skincare guidance from Zee — ingredient breakdowns, routines,
          and clean swaps.
        </p>

        <div className="mt-10 grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl bg-white/70 border border-[#B18AFF]/35 shadow-[0_14px_34px_rgba(122,74,185,0.14)] backdrop-blur-sm">
              <p className="text-xs text-[#6D5A8E]">{post.date}</p>
              <h2 className="text-xl font-semibold mt-2 text-[#2F2544]">{post.title}</h2>
              <p className="text-[#4A3B63] mt-2">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-[#7A4AB9] font-medium">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
