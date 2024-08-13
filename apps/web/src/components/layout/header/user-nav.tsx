"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@designali/ui/avatar";
import { Button } from "@designali/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@designali/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

import { UserProfile } from "../../dashboard/overview/link-count";

export function UserNav() {
  const session = useSession();

  if (session.status !== "authenticated") {
    return;
  }

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outline"
            className="relative flex h-8 w-8 items-center justify-center rounded-full"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={session.data.user.image} alt={""} />
              <AvatarFallback className="bg-gradient-to-br from-foreground via-muted-foreground to-muted opacity-70" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-3">
              <h1 className="truncate text-lg font-semibold leading-none">
                {session.data.user.name}
              </h1>
              <p className="truncate text-xs leading-none text-muted-foreground">
                {session.data.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {session.data.user.role === "admin" && (
              <DropdownMenuItem>
                <Link className="w-full" href="/admin/overview">
                  Admin
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem asChild>
              <Link href={`/app/dashboard/overview`}>
                <h1>Dashboard</h1>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/app/dashboard/billing`}>
                <h1>Billing</h1>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/app/dashboard/settings`}>
                <p>Settings</p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
