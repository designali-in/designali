"use client";

import type { User } from "next-auth";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full pt-2">
          <Avatar className="border h-10 w-10">
            <AvatarImage src={user.image ?? ""} alt={""} />
            <AvatarFallback className="bg-gradient-to-br from-foreground via-muted-foreground to-muted opacity-70" />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <h1 className="truncate text-lg font-semibold leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
            </h1>
            <p className="truncate text-xs leading-none text-muted-foreground">
              {user.email && (
                <span className="w-[200px] truncate text-sm text-muted-foreground">
                  {user.email}
                </span>
              )}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href={`/dashboard`}>
            <h1>Dashboard</h1>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/dashboard/billing`}>
            <h1>Billing</h1>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/dashboard/settings`}>
            <p>Settings</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/`,
            });
          }}
        >
          <div className="flex items-center space-x-2.5">
            <LogOut className="h-4 w-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
