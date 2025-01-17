"use client";

import type { User } from "next-auth";
import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, DisclosureButton, Transition } from "@headlessui/react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigation = [
  { name: "About AI", href: "/about", current: true },
  { name: "Graphic", href: "/graphic", current: true },
  { name: "Products", href: "/products", current: true },
  { name: "Agency", href: "/agency", current: true },
  { name: "Works", href: "/agency/works", current: true },
  { name: "Components", href: "/components", current: true },
  { name: "Graaadients", href: "/products/graaadients", current: true },
];

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export default function Navbar({ user }: UserAccountNavProps) {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <header className="">
            <div className="fixed right-2 top-2 flex flex-1 items-center justify-end">
              <div className="mr-2 flex transition ease-in-out md:hidden md:px-8">
                <DisclosureButton className="items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <DIcons.Close
                      strokeWidth={1}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <DIcons.Equal
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
                      <div className="mt-3 grid gap-3 ">
                        <div>
                          {user ? (
                            <Link href="/dashboard">
                              <Button variant={"outline"} size={"md"}>
                                Dashboard
                              </Button>
                            </Link>
                          ) : (
                            <Link href="/login">
                              <Button variant={"outline"} size={"md"}>
                                Sign In
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
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
