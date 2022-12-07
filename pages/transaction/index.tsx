import LayoutUser from "../../components/LayoutUser";
import Image from "next/image";
import { Typography } from "@mui/material";
import Button from "../../components/Button";
import Link from "next/link";
import { useState } from "react";

const EmptyTransaction = () => {
  return (
    <section className="bg-white h-full overflow-y-auto flex flex-col items-center px-20 pt-24">
      <Image
        src="/empty_transaction.png"
        width={170}
        height={210}
        alt="empty cart image"
      />
      <Typography component="h1" variant="h5" className="mt-7 mb-2">
        Ouch! Hungry
      </Typography>
      <Typography component="p" className="text-center">
        Seems like you have not ordered any food yet
      </Typography>
      <Button classNameProps="bg-orange-c-100 mt-7">
        <Link href="/scann">Find Foods</Link>
      </Button>
    </section>
  );
};

const ExitsTransaction = () => {
  return <h1>Hai</h1>;
};

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  return (
    <LayoutUser>
      {transactions.length === 0 ? <EmptyTransaction /> : <h1>Hello</h1>}
    </LayoutUser>
  );
};

export default Transaction;
