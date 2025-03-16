import { Suspense } from "react"; 
import { AssetsList } from "@/components/dashboard/users/assets-list"; 

export default function DashboardPage() { 
  return (
    <div className=" p-3 md:p-6"> 
      <Suspense fallback={""}>
        <AssetsList />
      </Suspense>
    </div>
  );
}
