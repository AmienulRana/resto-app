import Link from "next/link";
import { Layout } from "@/components/common/layout";
import { Header } from "@/components/common/layout/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import React from "react";
import { Button } from "@/components/common/button";

const categorys = ["New Taste", "Populer", "Recommended", "Food", "Drinking"];

export default function Payment() {
  return (
    <Layout navbar={false}>
      <Header title="Payment" text="You deserve better meal" buttonBack />
      <section className="bg-white px-6 mt-6 py-4">
        <p className="text-sm font-medium">Item Ordered</p>
        <section className="my-4 pb-2.5">
          <Link href="/products/123">
            <section className="flex items-center justify-between">
              <div className="flex">
                <Image
                  src="/product1.png"
                  width={60}
                  height={60}
                  alt="productc"
                  className="rounded-md mr-3 object-cover"
                />
                <div>
                  <Typography component="h2">Cherry Healthy</Typography>
                  <Typography component="p" className="text-gray-c-200 text-sm">
                    Rp289.000
                  </Typography>
                </div>
              </div>
              <span className="text-xs text-gray-c-200">14 Items</span>
            </section>
          </Link>
        </section>
        <p className="text-sm font-medium mb-2">Detail Transaction</p>
        <p className="text-sm mb-1.5 flex justify-between text-gray-c-200">
          Cherry Healthy
          <span className="text-black">IDR 18.390.000</span>
        </p>
        <p className="text-sm mb-1.5 flex justify-between text-gray-c-200">
          Tax (10%)
          <span className="text-black">IDR 1.800.390</span>
        </p>
        <p className="text-sm mb-1.5 flex justify-between text-gray-c-200">
          Total Price
          <span className="text-orange-c-100">IDR 390.803.000</span>
        </p>
      </section>
      <Button classNameProps="h-11 w-[90%] mx-auto absolute bottom-6 left-1/2 -translate-x-[50%] bg-orange-c-100">
        Order Now
      </Button>
    </Layout>
  );
}
