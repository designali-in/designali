"use client";
 
import { AssetsTable } from "@/components/admin/assets/assets-table";  

export default function AdminDashboardPage() { 

  return (
    <div className="p-3 md:p-6 overflow-hidden"> 
      <AssetsTable />
    </div>
  );
}
