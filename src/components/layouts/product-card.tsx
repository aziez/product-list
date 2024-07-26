import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ButtonAddToChart from "./button-add-card";

const ProductCard = ({ products }: any) => {
  return (
    <>
      {products.map((product: any) => (
        <Card
          key={product.name}
          className="border-none rounded-md bg-transparent shadow-none mb-8"
        >
          <CardContent className="p-0 ">
            <Image
              alt="produc image"
              width={1000}
              height={1000}
              className="rounded-md hover:border-2 hover:border-rose-900"
              src={"/" + product?.image?.desktop}
            />
            <div className="grid">
              <div className="flex w-full justify-center">
                <ButtonAddToChart product={product} />
              </div>
              <div>
                <p className="font-redhat text-rose-400">{product?.category}</p>
                <p className="font-redhat text-rose-900 font-bold text-lg text-nowrap">
                  {product?.name}
                </p>
                <p className="font-redhat text-rose-500  text-base font-bold">
                  {"$ " + product?.price}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;
