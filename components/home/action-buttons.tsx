export function ActionButtons() {
  return (
    <div className="flex flex-col gap-4">
      <button className="interactive-scale w-full rounded-xl bg-primary px-6 py-4 font-headline text-base font-semibold text-white shadow-lg shadow-primary/20">
        Aplicar a DIGIT
      </button>
      <button className="interactive-scale w-full rounded-xl border border-white/10 bg-surface-container px-6 py-4 font-headline text-base font-semibold text-on-surface">
        Ver el método DIGIT
      </button>
    </div>
  );
}
