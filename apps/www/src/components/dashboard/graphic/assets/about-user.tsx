"use client";

import Image from "next/image";
import { DIcons } from "dicons";
import Link from "next/link";

export function ProfileUser({ user }: { user: any }) {
  return (
    <div className="mt-20">
      <div className="grid items-center justify-center gap-3 text-center">
        <div className="flex justify-center">
          <Image
            src={user.image ?? "/placeholder.svg"}
            width={60}
            height={60}
            alt={user.name || "User Avatar"}
            className="rounded-full border"
          />
        </div>
        <h1 className="mt-3 inline-flex items-baseline bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 bg-clip-text px-6 pb-1 text-3xl font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600 dark:bg-clip-text sm:text-5xl">
          {user.name}
        </h1>

        <p className="text-md ">{user.bio}</p>
        <div className="flex items-center justify-center gap-2 ">
          <DIcons.CalenderFold strokeWidth={2} className="h-3 w-3" />
          <p className="text-xs">
            {user.createdAt
              ? new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
                  new Date(user.createdAt),
                )
              : "N/A"}
          </p>
        </div>
        <p className="text-md ">Summary</p>
      </div>
      <div className="my-6 p-3 md:p-6 w-full rounded-md border">
      <p className="text-sm text-primary/70">{user.summary || "..."}</p>
      </div>
    </div>
  );
}

export function DashboardUser({ user }: { user: any }) {
  return (
    <div>
      <div className="grid items-center gap-3">
        <div className="flex mt-3 items-center gap-4">
          <Image
            src={user.image ?? "/placeholder.svg"}
            width={48}
            height={48}
            alt={user.name || "Avatar"}
            className="rounded-full aspect-square border"
          />
          <h1 className="inline-flex items-baseline text-3xl font-bold  sm:text-5xl">
          {user.name}
        </h1>
        </div>
        <div className="flex flex-wrap gap-4">
        <p className="text-md text-primary/70">{user.email}</p>
        <div className="border-r h-6"></div>
        <Link href={`/graphic/profile/${user.username}`}>
        <p className="text-md text-ali hover:underline">{user.username}</p>
        </Link>
        <div className="border-r h-6"></div>
        <p className="text-md text-primary/70">{user.bio}</p>
        <div className="border-r h-6"></div>
        <div className="flex items-center  gap-2 ">
          Joined
          <DIcons.CalenderFold strokeWidth={2} className="h-3 w-3" />
          <p className="text-xs text-primary/70">
            {user.createdAt
              ? new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
                  new Date(user.createdAt),
                )
              : "N/A"}
          </p>
        </div>
        </div> 
      </div>
      <div className=" mt-4 p-3 md:p-6 w-full rounded-md border">
      <p className="text-sm text-primary/70">{user.summary}</p>
      </div>
    </div>
  );
}

