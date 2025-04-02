"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { DIcons } from "dicons";
import { ShoppingBag } from "lucide-react";

const navigation = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "AirPods", href: "#" },
  { name: "TV & Home", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Support", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className=" px-4 py-3 bg-gray-50 lg:px-8">
          <div className="mx-auto max-w-5xl flex  items-center justify-between">
            <div className="flex lg:flex-1 ">
              <a href="#" className="-m-1.5 p-1.5">
                <DIcons.Apple
                  aria-hidden="true"
                  className="size-5 text-gray-500"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <DIcons.Equal
                  aria-hidden="true"
                  strokeWidth={1}
                  className="size-5"
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden gap-6 lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                <DIcons.Search
                  aria-hidden="true"
                  strokeWidth={1}
                  className="size-4"
                />
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                <ShoppingBag
                  aria-hidden="true"
                  strokeWidth={1}
                  className="size-4"
                />
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <DIcons.Apple
                  aria-hidden="true"
                  className="size-5 text-gray-500"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <DIcons.Close aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-4 flow-root">
              <div className="-my-4 divide-y divide-gray-500/10">
                <div className="py-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
