export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/metodo-digit", label: "Metodo DIGIT" },
  { href: "/plataforma", label: "Plataforma" },
  { href: "/academia", label: "Academia" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/membresia", label: "Membresia" },
  { href: "/elite", label: "Elite" },
  { href: "/recursos", label: "Recursos" },
  { href: "/iniciar-sesion", label: "Iniciar sesion" }
];

export const siteNavigation = primaryNavigation.filter((item) => item.href !== "/iniciar-sesion");
