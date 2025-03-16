"use client";
 
import { NewsletterTable } from "@/components/admin/assets/newsletter-table"; 

export default function AdminDashboardPage() {
   

  return (
    <div className="p-3 md:p-6 overflow-hidden"> 
      <NewsletterTable />
    </div>
  );
}
