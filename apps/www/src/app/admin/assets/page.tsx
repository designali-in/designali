"use client";
 
import { AssetsTable } from "@/components/admin/assets/assets-table";  

export default function AdminDashboardPage() { 

  return (
    <div className="container py-10 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Assets Dashboard</h1>

      <AssetsTable />
    </div>
  );
}
