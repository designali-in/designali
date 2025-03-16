"use client";

import { Suspense, useEffect, useState } from "react";
import {
  getUsers,
  getAssets,
  getTags,
  getTeams,
  getNewsletterSubscribers,
} from "@/actions/admin/admin-action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardStats() {
  const [stats, setStats] = useState({
    users: 0,
    assets: 0,
    tags: 0,
    teams: 0,
    subscribers: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [users, assets, tags, teams, subscribers] = await Promise.all([
          getUsers(),
          getAssets(),
          getTags(),
          getTeams(),
          getNewsletterSubscribers(),
        ]);

        setStats({
          users: users.length,
          assets: assets.length,
          tags: tags.length,
          teams: teams.length,
          subscribers: subscribers.length,
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="grid p-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <StatCard link="/admin/users" title="Total Users" count={stats.users} />
      <StatCard
        link="/admin/assets"
        title="Total Assets"
        count={stats.assets}
      />
      <StatCard link="/admin/tags" title="Total Tags" count={stats.tags} />
      <StatCard link="/admin/teams" title="Total Teams" count={stats.teams} />
      <StatCard
        link="/admin/newsletter"
        title="Newsletter"
        count={stats.subscribers}
      />
    </div>
  );
}

function StatCard({
  title,
  count,
  link,
}: {
  link: string;
  title: string;
  count: number;
}) {
  return (
    <Link href={link}>
      <Card className="hover:bg-secondary">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Suspense >
          <div className="text-2xl font-bold">{count || "..."}</div>
          </Suspense>
        </CardContent>
      </Card>
    </Link>
  );
}
