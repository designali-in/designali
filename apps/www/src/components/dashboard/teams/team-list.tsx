//@ts-nocheck
"use client";

import type { Team } from "@/types/global";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamListProps {
  teams: Team[];
}

export function TeamList({ teams }: TeamListProps) {
  if (!teams.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-sm text-muted-foreground">No teams found</p>
        <p className="text-sm text-muted-foreground">
          Create a team to get started
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y">
      {teams.map((team) => (
        <div key={team.id} className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{team.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{team.name}</h3>
                <Badge variant="secondary">
                  {team._count.members}{" "}
                  {team._count.members === 1 ? "member" : "members"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Created{" "}
                {formatDistanceToNow(new Date(team.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <Link href={`/dashboard/teams/${team.slug}`}>
            <Button> View Team</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export function TeamListSkeleton() {
  return (
    <div className="divide-y">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32" />
              <Skeleton className="mt-2 h-4 w-24" />
            </div>
          </div>
          <Skeleton className="h-9 w-24" />
        </div>
      ))}
    </div>
  );
}
