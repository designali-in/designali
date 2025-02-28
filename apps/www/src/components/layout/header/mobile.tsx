"use client";

import { Button } from "@/components/ui/button";
import { Equal, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Graphic", href: "/graphic", current: true },
  { name: "Products", href: "/products", current: true },
  { name: "Agency", href: "/agency", current: true },
  { name: "Works", href: "/agency/works", current: true },
  { name: "Components", href: "/components", current: true },
  { name: "Graaadients", href: "/products/graaadients", current: true },
];

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email"> ;
}

function Header1({ user }: UserAccountNavProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex shrink md:hidden items-end justify-end">
      <Button size="icon" variant="none" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <X className="w-5 h-5" /> : <Equal className="w-5 h-5" />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute shadow-lg rounded-3xl border top-16 flex flex-col w-full right-0 bg-background py-6 container gap-6"
          >
            <div className="pl-2 space-y-5">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-md py-2 font-semibold"
                    aria-current={item.current ? "page" : undefined}
                  >
                    <p className="flex items-center gap-2">
                      <span>{item.name}</span>
                    </p>
                  </Link>
                ))}
                <div className="mt-3 grid gap-3 ">
                  <div>
                    {user ? (
                      <div className="grid gap-1">
                        <Link href="/dashboard">
                          <Button>Dashboard</Button>
                        </Link>
                        <Link href="/dashboard">
                          <Button
                            onSelect={(event) => {
                              event.preventDefault();
                              signOut({
                                callbackUrl: `${window.location.origin}/`,
                              });
                            }}
                            variant={"outline"}
                          >
                           Logout
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <Link href="/login">
                        <Button variant={"outline"}>Sign In</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Header1 };
