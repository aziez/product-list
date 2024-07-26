"use client";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import useStore from "@/store/useStore";

const ButtonAddToChart = ({ product }: { product: any }) => {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state?.cart);

  //   const existingProduct = cart.find((item) => item.name === product.name);

  const [click, setClick] = useState(false);
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    const newQuantity = value + 1;
    setValue(newQuantity);
    addToCart({ ...product, quantity: newQuantity });
  };

  const handleDecrease = () => {
    const newQuantity = value - 1;
    if (newQuantity > 0) {
      setValue(newQuantity);
      addToCart({ ...product, quantity: newQuantity });
    }
  };

  const handleAddToCart = () => {
    setClick(true);
    addToCart({ ...product, quantity: value });
  };

  return (
    <div className="rounded-full border border-rose-500 mb-4 -mt-6 relative">
      {click ? (
        <div className="flex items-center justify-between w-full bg-rose-600 rounded-full">
          <Button
            onClick={handleDecrease}
            disabled={product.quantity <= 1}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-rose-400"
          >
            <MinusCircleIcon className="w-5 h-5 text-white" />
          </Button>
          <Input
            className="w-12 bg-transparent border-none text-center text-white focus:border-none hover:border-none"
            value={value}
            type="text"
            readOnly
          />
          <Button
            onClick={handleIncrease}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-rose-400"
          >
            <PlusCircleIcon className="w-5 h-5 text-white" />
          </Button>
        </div>
      ) : (
        <Button
          variant={"secondary"}
          className="rounded-full"
          onClick={handleAddToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F" clip-path="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          <p className="ml-2">Add to cart</p>
        </Button>
      )}
    </div>
  );
};

export default ButtonAddToChart;
