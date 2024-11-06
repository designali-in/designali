"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Icons } from "@/comp/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/accordion";
import { Button } from "@designali/ui/button";
import { ScrollArea } from "@designali/ui/scroll-area";
import { Disclosure, DisclosureButton, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";

const navigation = [
  { name: "About AI", href: "/about", current: true },
  { name: "Agency", href: "/agency", current: true },
  { name: "Products", href: "/products", current: true },
  { name: "Works", href: "/works", current: true },
  { name: "Components", href: "/components", current: true },
];

const helps = [
  { name: "Tools", href: "/tools", current: true },
  { name: "Blogs", href: "/blogs", current: true },
  { name: "Terms", href: "/terms", current: true },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <header className="">
            <div className="fixed right-2 top-2 flex flex-1 items-center justify-end">
              <div className="mr-2 flex transition ease-in-out md:px-8 lg:hidden">
                <DisclosureButton className="items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.close
                      strokeWidth={1}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.menu
                      strokeWidth={1}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
            </div>
            <>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="mx-auto px-6 md:max-w-3xl lg:hidden">
                  <ScrollArea>
                    <div className="flex flex-col py-3">
                      <div className="mt-6 pb-3"></div>
                      {navigation.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="text-md py-2 font-semibold"
                          aria-current={item.current ? "page" : undefined}
                        >
                          <p className="flex items-center gap-2">
                            <span>{item.name}</span>
                          </p>
                        </DisclosureButton>
                      ))}

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Account</AccordionTrigger>
                          <AccordionContent>
                            <Link href={`/app/dashboard/settings`}>
                              <p className="text-md flex px-4 py-2 font-semibold">
                                Settings
                              </p>
                            </Link>
                          </AccordionContent>
                          <AccordionContent>
                            <Button size="sm" onClick={() => signOut()}>
                              <Link href={`/app/dashboard/settings`}>
                                <p>Log out</p>
                              </Link>
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Others</AccordionTrigger>
                          <AccordionContent>
                            {helps.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="text-md flex px-4 py-2 font-semibold"
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </ScrollArea>
                </Disclosure.Panel>
              </Transition>
            </>
          </header>
        </>
      )}
    </Disclosure>
  );
}
