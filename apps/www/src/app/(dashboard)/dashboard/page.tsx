import { Suspense } from "react" 
import { DashboardStats } from "@/src/components/dashboard/users/stats" 
import { AssetsList } from "@/components/dashboard/users/assets-list"

export default function DashboardPage() {
  return (
    <div className="grid gap-3 p-3">
       <Suspense fallback={""}>
        <DashboardStats />
      </Suspense>
      <Suspense fallback={""}>
      <AssetsList />
      </Suspense>
    </div>
  )
}

