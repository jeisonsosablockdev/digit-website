import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

import { SiteShell } from "@/components/site-shell";

describe("SiteShell", () => {
  it("renders the session CTA and primary navigation", () => {
    render(
      <SiteShell currentPath="/">
        <div>Child content</div>
      </SiteShell>
    );

    expect(screen.getAllByRole("link", { name: "Empieza" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Recursos" }).length).toBeGreaterThan(0);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
