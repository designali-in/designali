"use client";

import Link from "next/link";
import { Icons } from "@/comp/icons";
import { Logo } from "@/comp/logo";
import { DIcons } from "dicons";

import { Separator } from "@/components/ui/separator";

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
            { name: "Works", href: "/agency/works" },
            { name: "Pricing", href: "/pricing" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Products", href: "/products" },
            { name: "Agency", href: "/agency" },
            { name: "Branding", href: "/agency/branding" },
            { name: "Web Develop", href: "/agency/web-develop" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "UI", href: "/ui" },
            { name: "DIcons", href: "/products/dicons" },
            { name: "DShapes", href: "/products/dshapes" },
            { name: "Graaadients", href: "/products/graaadients" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Documentation", href: "/documentation" },
            { name: "Design", href: "/designs" },
            { name: "Components", href: "/components" },
            { name: "Blogs", href: "/blogs" },
          ],
        },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Graphic", href: "/graphic" },
            { name: "3D Icons", href: "/products/3dicons" },
            { name: "Colors", href: "/products/colors" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
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
    <footer className="border-ali/20 mx-auto w-full border-b border-t bg-white px-2 dark:bg-black sm:px-4">
      <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full bg-white dark:bg-black">
            <Logo className="w-8" />
          </p>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-slate-400 dark:text-slate-600 md:text-left">
          Welcome to Designali, where creativity meets strategy to bring your
          vision to life. I am passionate about transforming ideas into
          compelling visual experiences. I specialize in crafting unique brand
          identities, immersive digital experiences, and engaging content that
          resonates with your audience. My mission is to empower businesses and
          brands to stand out in a crowded market. I believe in the power of
          design to tell stories, evoke emotions, and drive meaningful
          connections. I believe in quality, not quantity. Designali is actually
          an agency of one. This means you'll work directly with me, founder of
          Designali.
        </p>
      </div>

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
            aria-label="Logo"
            href="mailto:contact@designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Icons.mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://x.com/designali_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.instagram.com/designali.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.threads.net/designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Threads strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.behance.net/designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Behance strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.facebook.com/designali.agency"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.linkedin.com/company/designali"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn strokeWidth={0} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube strokeWidth={0} className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToogle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Icons.heart className="text-ali mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              Ali Imam {""}
            </Link>
          </span>
          -
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-slate-600 dark:text-slate-400">
            <Link aria-label="Logo" className="" href="/">
              Designali
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
