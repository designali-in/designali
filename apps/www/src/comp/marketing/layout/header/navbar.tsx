"use client";

import type { MainNavItem } from "@/types";
import type { User } from "next-auth";

import useScroll from "@/hooks/use-scroll";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button } from "@/components/ui/button";

import { UserAccountNav } from "./user-account-nav";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export function NavBar({ user, scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
