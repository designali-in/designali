import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Admin - Designali`,
  description: "A design agency with a touch of magic.",
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="py-4 text-2xl font-semibold">Admin</h1>
    </div>
  );
}
