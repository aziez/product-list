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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import { Button } from "../ui/button";
import { CircleXIcon } from "lucide-react";
import useStore from "@/store/useStore";
import ConfirmButton from "./confirm-button";

const CartList = () => {
  const cart = useStore((state) => state.cart);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-rose-600">
          Your Cart ({cart.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption className="bg-rose-50 p-3 items-center">
            <div className="flex justify-center items-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
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
                    <Button variant={"link"} size={"icon"}>
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
      </CardContent>
    </Card>
  );
};

export default CartList;
