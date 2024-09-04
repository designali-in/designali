"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { Separator } from "@designali/ui/separator";
import { DIcons } from "dicons";

import { Logo } from "../../logo";
import ThemeToogle from "./theme";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Pricing", href: "/pricing" },
            { name: "Works", href: "/works" },
            { name: "Dashboard", href: "/app/dashboard/overview" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Solutions", href: "/solutions" },
            { name: "Products", href: "/products" },
            { name: "Tools", href: "/tools" },
            { name: "DIcons", href: "/dicons" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Graaadients", href: "/products/graaadients" },
            { name: "3D Icons", href: "/products/3dicons" },
            { name: "Branding", href: "/solutions/branding" },
            { name: "Logo", href: "/solutions/logo" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Documentation", href: "/documentation" },
            { name: "Design", href: "/designs" },
            { name: "Guides", href: "/guides" },
            { name: "Blogs", href: "/blogs" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Colors", href: "/colors" },
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-ali hover:dark:text-ali dark:text-slate-400 `;

export function Footer() {
  return (
    <footer className="mx-auto w-full border-b border-t border-ali/20 bg-white px-2 dark:bg-slate-950 sm:px-4">
      <div className="relative -mt-10 flex flex-wrap justify-center gap-8">
        <Link href="/">
          <p className="flex h-20 w-20 items-center justify-center rounded-full bg-background">
            <Logo className="w-8" />
          </p>
        </Link>
      </div>

      <p className="mx-auto max-w-7xl px-6 text-xs leading-4 text-slate-400 dark:text-slate-600">
        Welcome to Designali, where creativity meets strategy to bring your
        vision to life. We are a dynamic design agency passionate about
        transforming ideas into compelling visual experiences. With a team of
        innovative designers, strategic thinkers, and skilled developers, we
        specialize in crafting unique brand identities, immersive digital
        experiences, and engaging content that resonates with your audience. Our
        mission is to empower businesses and brands to stand out in a crowded
        market. We believe in the power of design to tell stories, evoke
        emotions, and drive meaningful connections. We believe in quality, not
        quantity.
      </p>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Separator />
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white md:text-xs"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Separator />
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            href="tel:+917678432186"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.phone strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:contact@designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/designali_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/designali.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            href="https://wa.me/917678432186"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.behance.net/designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Behance className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/designali.agency"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/designali"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToogle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Icons.heart className="mx-1 h-4 w-4 animate-pulse text-ali" />
          <span> by </span>
          <span className="cursor-pointer text-black hover:text-ali dark:text-white dark:hover:text-ali">
            <Link
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              Ali Imam {""}
            </Link>
          </span>
          -
          <span className="cursor-pointer text-slate-600 hover:text-ali dark:text-slate-400 dark:hover:text-ali">
            <Link className="" href="/">
              Designali
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
