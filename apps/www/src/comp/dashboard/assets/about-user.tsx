"use client";

import Image from "next/image";
import { DIcons } from "dicons";

export default function AboutUser({ user }: { user }) {
  return (
    <div>
      <div className="mt-20 grid items-center justify-center gap-3 text-center">
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

        <p className="text-md text-slate-600 dark:text-slate-400">{user.bio}</p>
        <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
          <DIcons.CalenderFold strokeWidth={2} className="h-3 w-3" />
          <p className="text-xs">
            {user.createdAt
              ? new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
                  new Date(user.createdAt),
                )
              : "N/A"}
          </p>
        </div>
        <p className="text-md text-slate-600 dark:text-slate-400">Summary</p>
      </div>
      <div className="my-6 h-80 w-full rounded-md border"></div>
    </div>
  );
}
