"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Button } from "../ui/button";
import { CircleXIcon } from "lucide-react";
import useStore from "@/store/useStore";
import ConfirmButton from "./confirm-button";
import { toast } from "sonner";
import EmptyCart from "./empty-cart";
import CarbonIcon from "/public/assets/images/icon-carbon-neutral.svg";

const CartList = () => {
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeCart);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleRemoveItem = (item: any) => {
    removeItem(item);
    toast.warning("Removed", {
      description: item?.name,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-rose-600">
          Your Cart ({cart.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length > 0 ? (
          <Table>
            <TableCaption className="bg-rose-50 p-3 items-center">
              <div className="flex justify-center items-stretch">
                <CarbonIcon />
                <p className="ml-2 text-rose-900">
                  This is a <b>carbon-neutral</b> delivery
                </p>
              </div>
              <ConfirmButton />
            </TableCaption>
            <TableBody>
              {cart.map((item) => (
                <React.Fragment key={item.name}>
                  <TableRow className="border-none">
                    <TableCell colSpan={4} className="font-medium text-nowrap">
                      {item.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-rose-600">
                      {item.quantity}x
                    </TableCell>
                    <TableCell className="text-rose-300">
                      @ ${item.price}
                    </TableCell>
                    <TableCell className="text-bold text-rose-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleRemoveItem(item)}
                        variant="link"
                        size="icon"
                      >
                        <CircleXIcon className="h-4 w-4 text-rose-300" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell colSpan={3} className="text-right">
                  ${calculateTotal()}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <EmptyCart />
        )}
      </CardContent>
    </Card>
  );
};

export default CartList;
