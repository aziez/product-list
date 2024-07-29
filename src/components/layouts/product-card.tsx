"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import ButtonAddToChart from "./button-add-card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect } from "react";

const desktop = "(min-width: 1440px)";
const mobile = "(max-width: 375px)";

const ProductCard = ({ products }: any) => {
  const isDesktop = useMediaQuery(desktop);
  const isMobile = useMediaQuery(mobile);

  useEffect(() => {
    if (isDesktop) {
      console.log("DESKTOP MODE");
    } else if (isMobile) {
      console.log("MOBILE MODE");
    }
  }, [isDesktop, isMobile]);

  const getImageSrc = (product: any) => {
    if (isDesktop) return product?.image?.desktop;
    if (isMobile) return product?.image?.mobile;
    return product?.image?.tablet;
  };

  return (
    <>
      {products.map((product: any) => (
        <Card
          key={product.name}
          className="border-none rounded-md bg-transparent shadow-none mb-8"
        >
          <CardContent className="p-0">
            <Image
              alt="product image"
              width={500}
              height={500}
              priority={true}
              className="rounded-md  w-full object-cover hover:border-2 hover:border-rose-900"
              src={getImageSrc(product)}
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
                <p className="font-redhat text-rose-500 text-base font-bold">
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
