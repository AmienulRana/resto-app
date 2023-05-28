import { Button } from "@/components/common/button";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/">Find Foods</Link>
        </Button>
      </section>
    );
  };

  export default EmptyTransaction;