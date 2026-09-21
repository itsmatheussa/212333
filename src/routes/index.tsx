import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const IMAGES = {
  logo: "/obyblox/logo.png",
  shop: "/obyblox/loja.gif",
  discord: "/obyblox/discord.png",
  galaxy: "/obyblox/galaxy.png",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ObyBlox — Loja e Comunidade" },
      {
        name: "description",
        content: "Acesse a loja oficial ObyBlox e entre para nossa comunidade no Discord.",
      },
      { property: "og:title", content: "ObyBlox — Loja e Comunidade" },
      {
        property: "og:description",
        content: "Itens exclusivos, novidades e a comunidade oficial ObyBlox em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  {
    caption: "Acesse nossa loja oficial",
    href: "https://obyblox.shop",
    image: IMAGES.shop,
    alt: "Personagens da ObyBlox reunidos em uma taverna",
    label: "Comprar agora",
  },
  {
    caption: "Entre para nossa comunidade",
    href: "https://discord.gg/tZZ9v4uQUS",
    image: IMAGES.discord,
    alt: "Comunidade ObyBlox no Discord",
    label: "Entrar no servidor",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 py-9 text-foreground sm:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img src={IMAGES.galaxy} alt="" className="galaxy-backdrop h-full w-full object-cover" />
        <div className="nebula nebula-a absolute -left-1/4 top-1/4 h-[55vmax] w-[55vmax] rounded-full" />
        <div className="nebula nebula-b absolute -right-1/4 bottom-0 h-[45vmax] w-[45vmax] rounded-full" />
        <div className="absolute inset-0 bg-background/68" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,transparent_0%,var(--background)_88%)]" />
        <div className="stars stars-near absolute inset-0" />
        <div className="stars stars-far absolute inset-0" />
        <div className="twinkle twinkle-a absolute left-[12%] top-[18%] size-1.5 rounded-full bg-primary" />
        <div className="twinkle twinkle-b absolute right-[16%] top-[32%] size-1 rounded-full bg-primary" />
        <div className="twinkle twinkle-c absolute bottom-[22%] left-[22%] size-1 rounded-full bg-primary" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-xl flex-col">
        <header className="animate-rise flex flex-col items-center text-center">
          <div className="logo-shell relative size-24 overflow-hidden rounded-2xl sm:size-28">
            <img src={IMAGES.logo} alt="ObyBlox" className="h-full w-full object-cover" />
          </div>
          <div className="relative mt-4 inline-block">
            <span
              aria-hidden="true"
              className="brand-halo absolute left-1/2 top-1/2 -z-10 h-[150%] w-[120%] rounded-full"
            />
            <h1 className="brand-glow font-display text-3xl font-black uppercase sm:text-4xl">
              ObyBlox
            </h1>
          </div>
          <p className="mt-2 max-w-sm text-sm font-medium text-muted-foreground sm:text-base">
            Sua loja e comunidade Roblox em um só lugar.
          </p>
        </header>

        <div className="animate-rise mt-8 flex flex-col items-center gap-1.5" aria-hidden="true">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Escolha por onde começar
          </span>
          <ArrowDown className="animate-bounce-arrow size-5 text-primary" />
        </div>

        <nav className="mt-3 flex flex-col gap-4" aria-label="Links ObyBlox">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-panel animate-rise group relative isolate block overflow-hidden rounded-xl border border-border bg-card shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${link.caption}: ${link.label}`}
            >
              <img
                src={link.image}
                alt={link.alt}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="relative flex items-center gap-2 border-t border-border px-4 py-3 sm:px-5">
                <span className="min-w-0 text-xs font-medium text-muted-foreground sm:text-sm">
                  {link.caption}
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
              </div>
            </a>
          ))}
        </nav>

        <footer className="mt-auto pt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ObyBlox · Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
