"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import useStore from "@/store/useStore";
import { toast } from "sonner";
import AddToCart from "/public/assets/images/icon-add-to-cart.svg";
const ButtonAddToChart = ({ product }: { product: any }) => {
  const addToCart = useStore((state) => state.addToCart);
  const increaseCart = useStore((state) => state.increaseCart);
  const removeCart = useStore((state) => state.removeCart);
  const cart = useStore((state) => state.cart);

  const [click, setClick] = useState(false);
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    const newQuantity = value + 1;

    setValue(newQuantity);
    addToCart({ ...product, quantity: newQuantity });
  };

  const handleDecrease = () => {
    const newQuantity = value - 1;
    const productname = product?.name;

    if (newQuantity > 0) {
      setValue(newQuantity);
      increaseCart({ ...product, quantity: newQuantity });
    } else {
      setClick(false);
      removeCart(product);
    }
  };

  const handleAddToCart = () => {
    const productName = product?.name;

    setClick(true);
    toast.success("Succesfully Add Product to Cart", {
      description: productName,
    });
    addToCart({ ...product, quantity: value });
  };

  useEffect(() => {
    const isProductInCart = cart.some((item) => item.name === product.name);
    if (!isProductInCart) {
      setClick(false);
      setValue(1); // Reset value if the product is removed
    }
  }, [cart, product.name]);

  return (
    <div className="rounded-full border border-rose-500 mb-4 -mt-6 relative">
      {click ? (
        <div className="flex items-center justify-between w-full bg-rose-600 rounded-full">
          <Button
            onClick={handleDecrease}
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
          <AddToCart />
          <p className="ml-2">Add to cart</p>
        </Button>
      )}
    </div>
  );
};

export default ButtonAddToChart;
