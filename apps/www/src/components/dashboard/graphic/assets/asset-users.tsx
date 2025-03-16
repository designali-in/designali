"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type User = {
  id: string;
  name: string;
  username: string;
  bio: string;
  email: string;
  avatarUrl: string;
  totalAssets: number;
  totalDownloads: number;
  totalLikes: number;
  joinedAt: string;
};

const INITIAL_LOAD = 48;
const LOAD_MORE = 48;

export default function UserList({ users }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [sortBy, setSortBy] = useState("mostDownloaded");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  useEffect(() => {
    let result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    switch (sortBy) {
      case "mostAssets":
        result.sort((a, b) => b.totalAssets - a.totalAssets);
        break;
      case "mostDownloaded":
        result.sort((a, b) => b.totalDownloads - a.totalDownloads);
        break;
      case "mostLiked":
        result.sort((a, b) => b.totalLikes - a.totalLikes);
        break;
      default:
        result.sort(
          (a, b) =>
            new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime(),
        );
    }

    setFilteredUsers(result);
    setVisibleCount(INITIAL_LOAD);
  }, [users, searchTerm, sortBy]);

  return (
    <div>
      <div className="mb-4">
        <div className="mt-3 flex items-center justify-between gap-3">
          <Input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-40 md:w-60"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-10 w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest Joined</SelectItem>
              <SelectItem value="mostAssets">Most Assets</SelectItem>
              <SelectItem value="mostDownloaded">Most Downloads</SelectItem>
              <SelectItem value="mostLiked">Most Likes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredUsers.slice(0, visibleCount).map((user) => (
          <Card
            key={user.id}
            className={cn(
              "focused group flex h-full w-full overflow-hidden rounded-sm",
            )}
          >
            <CardHeader className="w-28 border-b p-0">
              <AspectRatio ratio={1} className="overflow-hidden">
                <Link href={`/${user.username}`}>
                  <Image
                    src={user.avatarUrl || "/placeholder.svg"}
                    alt={user.name}
                    fill
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </Link>
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.bio}</p>
              <div className="mt-2 flex justify-between gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <DIcons.Image className="h-4 w-4" />
                  <span>{user.totalAssets} assets</span>
                </div>
                <div className="flex items-center gap-1">
                  <DIcons.Download className="h-4 w-4" />
                  <span>{user.totalDownloads}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < filteredUsers.length && (
        <div className="mt-6 flex justify-center">
          <Button onClick={() => setVisibleCount(visibleCount + LOAD_MORE)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
