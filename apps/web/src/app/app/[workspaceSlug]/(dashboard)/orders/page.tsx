import type { Metadata } from "next";
import PageTitle from "@/src/comp/mdx/page-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";

export const metadata: Metadata = {
  title: `My Orders - Designali`,
};

export default function OrdersPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div className="mx-auto mt-40 max-w-7xl space-y-2">
      <PageTitle
        title="Orders"
        description={`Manage your orders and view your order details`}
      />
      <div className="overflow-x-auto rounded-3xl border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>DATE</TableHead>
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
