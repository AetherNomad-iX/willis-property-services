export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="rise font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
          {kicker}
        </p>
        <h1 className="rise rise-2 mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-[0.04em] text-navy-deep sm:text-6xl">
          {title}
        </h1>
        <div className="rise rise-3 mt-5 h-px w-16 bg-red" />
        <p className="rise rise-4 mt-5 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </section>
  );
}
