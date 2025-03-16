"use client";
 
import { TagsTable } from "@/components/admin/assets/tags-table"; 

export default function AdminDashboardPage() {
  
  return (
    <div className="p-3 md:p-6 overflow-hidden">  
      <TagsTable />
    </div>
  );
}
