"use client";

import Link from "next/link";
import { Button } from "@designali/ui/button";
import { DropdownMenu } from "@designali/ui/dropdown-menu";
import { useSession } from "next-auth/react";

import { UserNav } from "./user-nav";

export function LoginButton() {
  const session = useSession();

  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <div>
          {session.status === "authenticated" ? (
            <UserNav />
          ) : (
            <Link href="/login">
              <Button variant={"outline"} size={"md"}>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </DropdownMenu>
    </div>
  );
}

export function DashboardButton() {
  const session = useSession();

  return (
    <div className="hidden md:block">
      <Link href={"/app/dashboard/overview"}>
        {session.status === "authenticated" ? (
          <Button variant={"outline"} size={"md"}>
            Dashboard
          </Button>
        ) : null}
      </Link>
    </div>
  );
}

export function PhoneLoginButton() {
  const session = useSession();

  return (
    <div>
      <div>
        {session.status === "authenticated" ? (
          <Link href="/app/dashboard/overview">
            <Button variant={"outline"} size={"md"}>
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            {" "}
            <Button variant={"outline"} size={"md"}>
              Sign In
            </Button>
          </Link>
        )}
      </div>
      <AdminLoginButton />
    </div>
  );
}

export function AdminLoginButton() {
  const session = useSession();

  if (session.status !== "authenticated") {
    return;
  }
  return (
    <div>
      {session.data.user.role === "admin" && (
        <Link className="w-full" href="/admin/overview">
          <p className="text-md mt-6 font-semibold">Admin</p>
        </Link>
      )}
    </div>
  );
}
