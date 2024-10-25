import type { Metadata } from "next";
import Link from "next/link";
import { formatCurrency, formatDateTime, formatId } from "@/lib/dutils";
import { Icons } from "@/src/components/icons";
import PageTitle from "@/src/components/mdx/page-title";
import Paginations from "@/src/components/uis/pagination";
import { Button } from "@designali/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@designali/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";

export const metadata: Metadata = {
  title: `Admin Orders - Designali`,
  description: "A design agency with a touch of magic.",
};

export default async function OrdersPage({
  searchParams: { page = "1" },
}: {
  searchParams: { page: string };
}) {
  return (
    <div className="space-y-2 px-6">
      <PageTitle
        title="Orders"
        description={`Manage your account settings and set e-mail preferences.`}
      />
      <div className="mt-20 rounded-3xl border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>BUYER</TableHead>
              <TableHead>TOTAL</TableHead>
              <TableHead>PAID</TableHead>
              <TableHead>DELIVERED</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </div>
    </div>
  );
}
