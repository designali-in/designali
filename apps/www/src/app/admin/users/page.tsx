"use client";
 
import { UsersTable } from "@/components/admin/assets/users-table";  

export default function AdminDashboardPage() {
  

  return (
    <div className="p-3 md:p-6 overflow-hidden"> 
      <UsersTable /> 
    </div>
  );
}
