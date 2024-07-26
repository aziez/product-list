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
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";

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
          <CredenzaTitle>Order Confirmed</CredenzaTitle>
          <CredenzaDescription>
            We hope you enjoy your food!{" "}
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <Table>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Image
                      src={"/" + item?.image?.desktop}
                      width="64"
                      height="64"
                      alt={item.image}
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
                <TableCell colSpan={3} className="text-right">
                  ${calculateTotal()}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <button>Close</button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default ConfirmButton;
