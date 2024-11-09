import Image from "next/image";
import { Icons } from "@/comp/icons";
import { getUserById } from "@/src/lib/validations/auth";

import { auth } from "@/lib/auth";

export default async function UserId() {
  const session = await auth();
  const user = await getUserById(session.user.id);

  return (
    <>
      <div className="mt-20 grid items-center justify-center gap-3 text-center">
        <div className="flex justify-center">
          <Image
            src={user.image}
            width={60}
            height={60}
            alt={""}
            className="rounded-full border"
          />
        </div>
        <h1 className="mt-3 inline-flex items-baseline bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 bg-clip-text px-6 pb-1 text-3xl font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600 dark:bg-clip-text sm:text-5xl">
          {user.name}
        </h1>
        <p className="text-md text-slate-600 dark:text-slate-400">
          {user.email}
        </p>
        <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
          <Icons.calendar strokeWidth={2} className="h-3 w-3" />
          <p className="text-xs">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
            }).format(new Date(user.createdAt))}
          </p>
        </div>
      </div>
    </>
  );
}
