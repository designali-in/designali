"use client";

import { Suspense, useEffect, useState } from "react";
import {
  getAssets,
  getInspiration,
  getAssetLikes,
  getAssetViews,
} from "@/actions/admin/admin-action";
import { DotPattern } from "@/components/ui/backgrounds/dot-pattern";
import Link from "next/link";
import NumberCounter from "../../ui/texts/number-counter";

export function Stats() {
  const [stats, setStats] = useState({
    assets: 0,
    inspiration: 0,
    assetlikes: 0,
    assetviews: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [assets, inspiration, assetlikes, assetviews] = await Promise.all(
          [getAssets(), getInspiration(), getAssetLikes(), getAssetViews()]
        );

        setStats({
          assets: assets.length,
          inspiration: inspiration.length,
          assetlikes: assetlikes,
          assetviews: assetviews,
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
      <StatCard
        link="/graphic"
        title="Inspirations"
        count={stats.inspiration}
      />
      <StatCard link="/graphic" title="Assets" count={stats.assets} />

      <Link className="cursor-pointer" href={"/about"}>
        <div className="relative h-full overflow-hidden rounded-xl border p-8 text-center hover:border-slate-300 dark:hover:border-slate-700">
          <p className="text-xs text-indigo-400 md:-mb-2">Experience</p>
          <h1 className="font-mono text-6xl font-bold tracking-tighter text-indigo-500 md:text-9xl">
            <NumberCounter value={8} />
          </h1>
          <p className="text-xs text-slate-600 dark:text-indigo-400 md:-mt-2">
            Years
          </p>
          <DotPattern width={5} height={5} />
        </div>
      </Link>
      <Link className="cursor-pointer" href={"/products/graaadients"}>
        <div className="relative h-full overflow-hidden rounded-xl border p-8 text-center hover:border-slate-300 dark:hover:border-slate-700">
          <p className="text-xs text-lime-400 md:-mb-2">Free</p>
          <h1 className="font-mono text-6xl font-bold tracking-tighter text-lime-500 md:text-9xl">
            4K
          </h1>
          <p className="text-xs text-lime-500 md:-mt-2">Graaadients</p>
        </div>
      </Link> 
      <StatCard link="/graphic" title="Asset Likes" count={stats.assetlikes} />
      <StatCard link="/graphic" title="Asset Views" count={stats.assetviews} />
    </div>
  );
}

export function AboutStats() {
  const [stats, setStats] = useState({
    assets: 0,
    inspiration: 0,
    assetlikes: 0,
    assetviews: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [assets, inspiration, assetlikes, assetviews] = await Promise.all(
          [getAssets(), getInspiration(), getAssetLikes(), getAssetViews()]
        );

        setStats({
          assets: assets.length,
          inspiration: inspiration.length,
          assetlikes: assetlikes,
          assetviews: assetviews,
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="grid p-6  grid-cols-2 md:grid-cols-4 gap-3">
      <StatCard
        link="/graphic"
        title="Inspirations"
        count={stats.inspiration}
      />
      <StatCard link="/graphic" title="Assets" count={stats.assets} />
      <StatCard link="/graphic" title="Asset Likes" count={stats.assetlikes} />
      <StatCard link="/graphic" title="Asset Views" count={stats.assetviews} />
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
      <div className="border p-6 rounded-3xl">
        <div>
          <Suspense>
            <NumberCounter
              value={count ?? "..."}
              className="px-2 flex justify-center text-5xl font-bold tracking-tighter"
            />
          </Suspense>
          <div className="text-center text-xs text-primary/70 md:text-sm">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
