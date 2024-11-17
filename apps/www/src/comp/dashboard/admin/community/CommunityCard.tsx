import type { ExtendedCommunity } from "@/types";
import type { FC } from "react";
import Link from "next/link";

import { formatTimeToNow } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import UserAvatar from "../users/UserAvatar";

interface CommunityCardProps {
  community: ExtendedCommunity;
}

const CommunityCard: FC<CommunityCardProps> = ({ community }) => {
  return (
    <Link
      href={`/dashboard/community/${community.category.toLowerCase()}/${community.id}`}
      className="group focus:outline-none"
    >
      <Card className="focused flex h-full flex-col transition hover:border-neutral-100 dark:hover:border-neutral-900">
        <CardHeader className="flex-1 py-5">
          <CardTitle className="line-clamp-1">
            <div className="flex gap-2.5">
              <UserAvatar className="h-8 w-8" user={community.creator} />
              <div className="space-y-2.5">
                <div className="flex flex-col gap-x-2.5 md:flex-row md:items-center">
                  {community.name}
                  <div className="space-x-1">
                    <span className="text-sm text-muted-foreground">
                      {formatTimeToNow(new Date(community.createdAt))}
                    </span>
                    <span className="text-sm text-muted-foreground">{`#${community.category.toLowerCase()}`}</span>
                  </div>
                </div>
                <CardDescription className="font-normal">
                  {community.description}
                </CardDescription>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default CommunityCard;
