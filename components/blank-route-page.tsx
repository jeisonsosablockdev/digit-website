import { SiteShell } from "@/components/site-shell";

export function BlankRoutePage({
  children,
  currentPath,
  title
}: Readonly<{
  children?: React.ReactNode;
  currentPath: string;
  title: string;
}>) {
  return (
    <SiteShell currentPath={currentPath}>
      <section className="mx-auto flex min-h-[calc(100vh-109px)] w-full max-w-[1280px] items-center justify-center px-6 py-16">
        {children ?? <h1 className="sr-only">{title}</h1>}
      </section>
    </SiteShell>
  );
}
