import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Rico AI Blog",
  description: "Education, inspiration, and glow tips from Rico AI.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-white/60">Rico AI Blog</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2">
          Education, inspiration, and glow tips.
        </h1>
        <p className="text-white/70 mt-4">
          Clear, minimal skincare guidance from Zee — ingredient breakdowns, routines,
          and clean swaps.
        </p>

        <div className="mt-10 grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/50">{post.date}</p>
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-white/70 mt-2">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-[#D4A574]">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
