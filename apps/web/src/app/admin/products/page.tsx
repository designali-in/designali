import type { Metadata } from "next";
import Link from "next/link";
import Paginations from "@/components/ui/pagination";
import { formatCurrency, formatId } from "@/lib/dutils";
import DeleteDialog from "@/src/components/admin/delete-dialog";
import PageTitle from "@/src/components/mdx/page-title";
import {
  deleteProduct,
  getAllProducts,
} from "@/src/lib/actions/product.actions";
import { Button } from "@designali/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";

export const metadata: Metadata = {
  title: `Admin Products - Designali`,
};

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: {
    page: string;
    query: string;
  };
}) {
  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || "";
  const products = await getAllProducts({
    query: searchText,
    page,
  });

  return (
    <div className="px-6">
      <PageTitle
        title="Products"
        description={`Manage your account settings and set e-mail preferences.`}
      />

      <div className="flex justify-center">
        <Button asChild variant="default">
          <Link href="/admin/products/create">Create Product</Link>
        </Button>
      </div>
      <div className="mt-10 rounded-3xl border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>RATING</TableHead>
              <TableHead className="w-[100px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{formatId(product.id)}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>

                <TableCell>{product.rating}</TableCell>
                <TableCell className="flex gap-1">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/products/${product.id}`}>Edit</Link>
                  </Button>
                  <DeleteDialog id={product.id} action={deleteProduct} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {products.totalPages > 0 && (
          <Paginations page={page} totalPages={products.totalPages} />
        )}
      </div>
    </div>
  );
}
