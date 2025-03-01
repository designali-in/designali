"use client";

import { Button } from "@/components/ui/button";
import { Equal, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Graphic", href: "/graphic", current: true },
  { name: "Agency", href: "/agency", current: true },
  { name: "Pricing", href: "/pricing", current: true },
  { name: "Components", href: "/docs", current: true },
];

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
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
            <ScrollArea className="h-[500px]">
              <div className="pl-2 space-y-5">
                <div className="mt-2 grid gap-3 ">
                  <div>
                    {user ? (
                      <div className="grid gap-1">
                        <div className="flex gap-1 justify-between items-center">
                          <div className="flex flex-col space-y-1">
                            <h1 className="truncate text-lg font-semibold leading-none">
                              {user.name && (
                                <p className="font-medium">{user.name}</p>
                              )}
                            </h1>
                            <p className="truncate text-xs leading-none text-muted-foreground">
                              {user.email && (
                                <span className="w-[200px] truncate text-sm text-muted-foreground">
                                  {user.email}
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="relative flex h-10 w-10 items-center justify-center rounded-full">
                            <Avatar className="border h-10 w-10">
                              <AvatarImage src={user.image ?? ""} alt={""} />
                              <AvatarFallback className="bg-gradient-to-br from-foreground via-muted-foreground to-muted opacity-70" />
                            </Avatar>
                          </div>
                        </div>
                        <div className="flex gap-1 mt-3">
                          <Link href="/dashboard">
                            <Button>Dashboard</Button>
                          </Link>
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
                        </div>
                      </div>
                    ) : (
                      <Link href="/login">
                        <Button variant={"outline"}>Sign In</Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg py-2 font-semibold"
                      aria-current={item.current ? "page" : undefined}
                    >
                      <p className="flex items-center gap-2">
                        <span>{item.name}</span>
                      </p>
                    </Link>
                  ))}
                  <Accordion type="single" collapsible className="w-full -mt-2">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="text-lg  font-semibold">
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="font-semibold  pl-3 grid gap-4 text-lg">
                        <Link href={"/products/dicons"}>DIcons</Link>
                        <Link href={"/products/graaadients"}>Graaadients</Link>
                        <Link href={"/products/patterns"}>Patterns</Link>
                        <Link href={"/products/blocks"}>Blocks</Link>
                        <Link href={"/products/dshapes"}>DShapes</Link>
                        <Link href={"/products/colors/generate"}>Colors</Link>
                        <Link href={"/products/easings"}>Easings</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b-0 -mt-3"
                    >
                      <AccordionTrigger className="text-lg py-3 font-semibold">
                        Legal
                      </AccordionTrigger>
                      <AccordionContent className="font-semibold -mb-2 pl-3 grid gap-4 text-lg">
                        <Link href={"/docs/legal/contact"}>Contact</Link>
                        <Link href={"/docs/legal/terms"}>Terms</Link>
                        <Link href={"/docs/legal/privacy"}>Privacy</Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    href={"/docs"}
                    className="text-lg py-2  font-semibold"
                  >
                    <p className="flex items-center gap-2">
                      <span>Components</span>
                    </p>
                  </Link>
                </div>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Header1 };
