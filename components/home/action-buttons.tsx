import Link from "next/link";

export function ActionButtons({
  primaryHref = "/iniciar-sesion",
  primaryLabel = "Entrar a DIGIT",
  secondaryHref = "/recursos",
  secondaryLabel = "Explorar aprendizaje gratuito",
  className = "",
  primaryClassName = "",
  secondaryClassName = ""
}: Readonly<{
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
}>) {
  return (
    <div className={`flex flex-col gap-4 ${className}`.trim()}>
      <Link
        className={`interactive-scale inline-flex w-full items-center justify-center rounded-[1.25rem] bg-gradient-to-r from-primary to-secondary px-6 py-4 text-center font-headline text-base font-bold text-black shadow-neon ${primaryClassName}`.trim()}
        href={primaryHref}
      >
        {primaryLabel}
      </Link>
      <Link
        className={`interactive-scale inline-flex w-full items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5 px-6 py-4 text-center font-headline text-base font-semibold text-white ${secondaryClassName}`.trim()}
        href={secondaryHref}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
