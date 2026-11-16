export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a3123f]">Seedling International Academy · SMIA</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-[#013975]">Page not found</h1>
      <p className="mt-4 max-w-xl text-[#013975]/70">The address may have changed. Visit a Cambridge campus page or return to the group website.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><a className="rounded-full bg-[#013975] px-6 py-3 font-semibold text-white" href="/">Cambridge homepage</a><a className="rounded-full border border-[#013975]/20 px-6 py-3 font-semibold text-[#013975]" href="/campuses/sia">SIA</a><a className="rounded-full border border-[#013975]/20 px-6 py-3 font-semibold text-[#013975]" href="/campuses/smia">SMIA</a></div>
      <a className="mt-6 text-[#013975] underline underline-offset-4" href="https://seedlingschools.com">Seedling Group</a>
    </main>
  );
}
