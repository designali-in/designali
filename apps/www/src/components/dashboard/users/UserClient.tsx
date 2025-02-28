"use client";

import type { ExtendedUser } from "@/lib/validations/user";
import type { UserDisplay } from "@/types";
import dynamic from "next/dynamic";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

const Users = dynamic(() => import("./Users"), {
  ssr: false,
  loading: () => <UserClientSkeleton />,
});

interface UsersProps {
  initialUsers: UserDisplay[];
  initialFetchedUsers: ExtendedUser[];
}
const UserClient = ({ initialFetchedUsers, initialUsers }: UsersProps) => {
  return (
    <Users
      initialFetchedUsers={initialFetchedUsers}
      initialUsers={initialUsers}
    />
  );
};

export default UserClient;

const UserClientSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-16" />
      </div>

      <ScrollArea className="w-full"></ScrollArea>
      <div className="flex w-full justify-end">
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
};
