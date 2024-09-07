import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/src/components/mdx/page-title";
import { getAdminSummary } from "@/src/lib/actions/user.actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";
import { BadgeDollarSign, Barcode, CreditCard, Users } from "lucide-react";

export const metadata: Metadata = {
  title: `Admin - Designali`,
  description: "A design agency with a touch of magic.",
};

export default async function DashboardPage() {
  const users = await getAdminSummary();
  const products = await getAdminSummary();
  return (
    <div className="space-y-4 px-6">
      <PageTitle
        title="Dashboard Overview"
        description={`Manage your account settings and set e-mail preferences.`}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BadgeDollarSign strokeWidth={1} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold"></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard strokeWidth={1} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold"></div>
          </CardContent>
        </Card>
        <Link href={"/admin/users"}>
          <Card className="hover:bg-slate-100 dark:hover:bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users strokeWidth={1} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">
                {users.usersCount[0].count}
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/admin/products"}>
          <Card className="hover:bg-slate-100 dark:hover:bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Barcode strokeWidth={1} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">
                {products.productsCount[0].count}
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Chart</CardTitle>
          </CardHeader>
          <CardContent className="pl-2"></CardContent>
          <CardFooter>Showing total sales for the last </CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>BUYER</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>TOTAL</TableHead>
                  <TableHead>ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
