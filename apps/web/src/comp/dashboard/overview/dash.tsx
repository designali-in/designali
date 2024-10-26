import Image from "next/image";
import Link from "next/link";
import { Button } from "@designali/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";
import { Separator } from "@designali/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";
import { ArrowUpRight, CreditCard } from "lucide-react";

import { Icons } from "../../icons";
import { LinkListDashboard } from "../../tools/links/link-list";
import { LinkCount } from "./link-count";

export default function Dashboard({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page) || 1;

  return (
    <div className="mx-auto mt-10 flex min-h-screen max-w-7xl flex-col">
      <Separator />
      <main className="mt-10 flex flex-1 flex-col gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card
            className="bg-red-100 dark:bg-red-900"
            x-chunk="dashboard-01-chunk-1"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Designs
              </CardTitle>
              <Icons.shapes strokeWidth={1} className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            className="bg-blue-100 dark:bg-blue-900"
            x-chunk="dashboard-01-chunk-2"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Payments
              </CardTitle>
              <CreditCard strokeWidth={1} className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹ 0.00</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Link href={"/tools"}>
            <Card
              className="bg-yellow-100 hover:bg-slate-100 dark:bg-yellow-900 dark:hover:bg-slate-900"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Created Links
                </CardTitle>
                <Icons.link strokeWidth={1} className="h-6 w-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <LinkCount />
                </div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </Link>
          <Card
            className="bg-green-100 dark:bg-green-900"
            x-chunk="dashboard-01-chunk-3"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Designs Approved
              </CardTitle>
              <Icons.checkcircle strokeWidth={1} className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>My Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from Designali.
                </CardDescription>
              </div>
              <Button asChild size="md" className="ml-auto gap-1">
                <Link href="/dashboard/orders">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>TOTAL</TableHead>
                    <TableHead>PAID</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody></TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Short Links</CardTitle>
              <CardDescription>
                Your created short links & QR codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <LinkListDashboard />

                <Link
                  href={"/app/dashboard/short-links"}
                  className="flex w-full"
                >
                  <Button variant="outline" size="lg" className="flex w-full">
                    See all my links
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
