"use client";
import useStore from "@/store/useStore";
import { Button } from "../ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "../ui/credenza";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import ConfirmIcon from "/public/assets/images/icon-order-confirmed.svg";

const ConfirmButton = () => {
  const cart = useStore((state) => state.cart);
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button
          variant={"default"}
          className="mt-3 w-full rounded-full bg-primary/65"
        >
          Confirm Order
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <ConfirmIcon />
          <CredenzaTitle>Order Confirmed</CredenzaTitle>
          <CredenzaDescription>
            We hope you enjoy your food!
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <ScrollArea className="max-h-72 h-full border w-full ">
            <Table className="">
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell colSpan={3}>
                      <Image
                        src={"/" + item?.image?.thumbnail}
                        width="64"
                        height="64"
                        priority={true}
                        alt={item?.name}
                        className="aspect-square rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span>{item.quantity}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell colSpan={5} className="text-right">
                    ${calculateTotal()}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </ScrollArea>
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button className="w-full rounded-full" variant={"default"}>
              Start New Order
            </Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default ConfirmButton;
