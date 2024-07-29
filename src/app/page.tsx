import ProductCard from "@/components/layouts/product-card";
import { promises as fs } from "fs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CartList from "@/components/layouts/cart-list";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/data.json",
    "utf-8"
  );
  const data = JSON.parse(file);

  console.log(data);

  return (
    <main className=" bg-rose-50 p-8">
      <h1 className="text-4xl mb-8 font-bold font-redhat text-rose-950">
        Desserts
      </h1>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 mb-4  md:w-2/3">
          <ProductCard products={data} />
        </div>
        <div className="w-full  md:w-1/3 mb-8 ">
          <CartList />
        </div>
      </div>
    </main>
  );
}
