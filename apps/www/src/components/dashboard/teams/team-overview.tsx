//@ts-nocheck
"use client";

import { formatDistanceToNow } from "date-fns";
import { Activity, Settings, Users } from "lucide-react";

import { formatTeamActivity } from "@/lib/validations/team-activity";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamOverviewProps {
  team: {
    _count: {
      members: number;
      activities: number;
    };
    members: {
      user: {
        name: string | null;
        email: string | null;
        image: string | null;
      };
      role: string;
    }[];
    activities: {
      id: string;
      event: string;
      metadata: any;
      createdAt: Date;
      user: {
        name: string | null;
        email: string | null;
        image: string | null;
      };
    }[];
  };
}

export function TeamOverview({ team }: TeamOverviewProps) {
  const recentActivities = team.activities.slice(0, 5);
  const admins = team.members.filter(
    (member) => member.role === "OWNER" || member.role === "ADMIN",
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{team._count.members}</div>
          <p className="text-xs text-muted-foreground">
            {admins.length} administrator{admins.length === 1 ? "" : "s"}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{team._count.activities}</div>
          <p className="text-xs text-muted-foreground">Total events recorded</p>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
          <CardDescription>Recent team events and changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.length > 0 ? (
              recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.image ?? undefined} />
                    <AvatarFallback>
                      {activity.user.name[0].toUpperCase() ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user.name}</span>{" "}
                      {formatTeamActivity(
                        activity.event,
                        activity.metadata,
                        activity.user.name || "Unknown",
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(activity.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No recent activity
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
