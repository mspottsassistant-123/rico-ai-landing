export default function StatusPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[#2D4A3A]">
      <h1 className="text-3xl font-semibold">Rico AI — Progress Log</h1>
      <p className="mt-3 text-[#2D4A3A]/75">
        Live updates as we polish the landing page, copy, and funnel.
      </p>

      <section className="mt-8 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Today</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#2D4A3A]/75">
          <li>Neon CTAs updated to a higher‑contrast hot pink outline.</li>
          <li>Glow stories carousel (moving reviews) enabled.</li>
          <li>Ongoing: new Figma screenshots for steps + header logo recolor.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Savings Tracker</h2>
        <p className="mt-2 text-sm text-[#2D4A3A]/75">
          Rate: $100/hr • Current estimated savings: <strong>$50</strong>
        </p>
      </section>

      <section className="mt-8 text-sm text-[#2D4A3A]/75">
        <p>
          Full log: <a className="underline" href="https://github.com/mspottsassistant-123/rico-ai-landing/blob/main/CHANGELOG.md">GitHub CHANGELOG</a>
        </p>
      </section>
    </main>
  );
}
