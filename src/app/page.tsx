
import Banner from "@/components/Banner";
import ProductCard from "@/components/Productcard";
import Image from "next/image";
import Link from "next/link";
export interface Change {
  dir: "up" | "down";
  pct: number;
}

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: Change;
  markets: Market[];
}
export default async function Home() {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products = await res.json();
  const productPriceIncrease = products.filter((product: Product) => product.change.dir === "up")
  const productPriceDecrease = products.filter((product: Product) => product.change.dir === "down");
  const sortedProductPriceIncrease = sortProductsByChange(productPriceIncrease);
  const sortedProductPriceDecrease = sortProductsByChange(productPriceDecrease);
  function sortProductsByChange(products: Product[]) {
    products.sort((a, b) => b.change.pct - a.change.pct);
    return products;
  }
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Price Increase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {sortedProductPriceIncrease.slice(0, 6).map((product: Product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard item={product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Price Decrease</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {sortedProductPriceDecrease.slice(0, 6).map((product: Product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard item={product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard item={product} />
            </Link>
          ))}
        </div>
      </div>
       

    </>
  );
}