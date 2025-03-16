"use client";
 
import { UsersTable } from "@/components/admin/assets/users-table";  

export default function AdminDashboardPage() {
  

  return (
    <div className="container py-10 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Users Dashboard</h1>
      <UsersTable />
       
    </div>
  );
}
