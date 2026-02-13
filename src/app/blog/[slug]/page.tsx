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
      <a key={`link-${i++}`} href={href} className="text-[#D4A574] underline">
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
      <p key={idx} className="text-white/80 leading-7 mt-4">
        {renderInline(trimmed)}
      </p>
    );
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <Link href="/blog" className="text-[#D4A574] inline-block mt-4">
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#D4A574]">← Back to blog</Link>
        <p className="text-xs text-white/50 mt-6">{post.date}</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2">{post.title}</h1>
        <div className="mt-6">{renderBlocks(post.content)}</div>
      </div>
    </main>
  );
}
