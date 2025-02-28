import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

import { UserAccountNav } from "./user-account-nav";

export async function LoginButton() {
  const user = await getCurrentUser();
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <div>
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Link href="/login">
              <Button className="px-3" variant="default" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </DropdownMenu>
    </div>
  );
}

export async function DashboardButton() {
  const user = await getCurrentUser();

  return (
    <div className="hidden md:block">
      <Link href={"/dashboard"}>
        {user ? <Button variant={"outline"}>Dashboard</Button> : null}
      </Link>
    </div>
  );
}

export async function PhoneLoginButton() {
  const user = await getCurrentUser();

  return (
    <div>
      <div>
        {user ? (
          <Link href="/dashboard">
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
        ) : (
          <Link href="/login">
            {" "}
            <Button variant={"outline"}>Sign In</Button>
          </Link>
        )}
      </div>
      <AdminLoginButton />
    </div>
  );
}

export async function AdminLoginButton() {
  const user = await getCurrentUser();

  return (
    <div>
      {user && user.role === "ADMIN" && (
        <Link className="w-full" href="/admin">
          <p className="text-md mt-6 font-semibold">Admin</p>
        </Link>
      )}
    </div>
  );
}
