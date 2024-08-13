import type { Product } from "@/types";

import ProductCard from "./product-card";

const ProductList = ({ title, data }: { title: string; data: Product[] }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">{title}</h2>

      {data.length > 0 ? (
        <div className="grid gap-3 px-2 md:grid-cols-2 lg:grid-cols-3">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
