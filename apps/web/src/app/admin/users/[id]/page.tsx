import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
import PageTitle from "@/src/comp/mdx/page-title";
import { LinkCopyButton } from "@/src/comp/uis/link-copy-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";

import UpdateUserForm from "./update-user-form";

export const metadata: Metadata = {
  title: `Update user - Designali`,
  description: "A design agency with a touch of magic.",
};

export default async function UpdateUserPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const user = await getUserById(id);

  if (!user) notFound();
  return (
    <div className="mx-auto max-w-lg space-y-8 px-6">
      <PageTitle
        title=" Update User"
        description={`Manage your account settings and set e-mail preferences.`}
      />
      <div className="mt-10 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/admin/overview">Admin</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/admin/users">Users</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{user.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <p className="flex justify-center gap-2 text-center text-xs text-slate-600 dark:text-slate-400">
        {user.id}

        <LinkCopyButton textToCopy={user.id} />
      </p>
      <UpdateUserForm user={user} />
    </div>
  );
}
