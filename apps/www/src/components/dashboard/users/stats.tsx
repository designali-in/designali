"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, Heart, FileText } from "lucide-react"

interface StatsData {
  totalAssets: number
  totalDownloads: number
  totalViews: number
  totalLikes: number
  downloadGrowth: number
  viewGrowth: number
  likeGrowth: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/user/stats")

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setStats(data)
      } catch (err) {
        console.error("Failed to fetch stats:", err)
        setError("Failed to load stats. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (error) {
    return <div className="rounded-md bg-destructive/15 p-4 text-destructive">{error}</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{loading ? "..." : stats?.totalAssets || 0}</div>
          <p className="text-xs text-muted-foreground">Assets you've created</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
          <Download className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{loading ? "..." : stats?.totalDownloads || 0}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.downloadGrowth ? `+${stats.downloadGrowth}% from last month` : "No data from last month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{loading ? "..." : stats?.totalViews || 0}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.viewGrowth ? `+${stats.viewGrowth}% from last month` : "No data from last month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{loading ? "..." : stats?.totalLikes || 0}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.likeGrowth ? `+${stats.likeGrowth}% from last month` : "No data from last month"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

