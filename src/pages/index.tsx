import Link from "next/link";
import { Layout } from "@/components/common/layout";
import { Header } from "@/components/common/layout/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { StarRate, StarOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Rating } from "@/components/common/rating";
import React from "react";
import { Tabs } from "@/components/common/tabs";

const categorys = ["New Taste", "Populer", "Recommended", "Food", "Drinking"];

export default function Home() {
  const [indicator, setIndicator] = useState({
    width: 73,
    position: 24,
  });
  const [tabActive, setTabActive] = useState("");

  const handleNavigateTabs = (event: any, tabActive: string) => {
    const buttonWidth: number = event.target.clientWidth;
    const buttonPosition: number = event.target.offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
    setTabActive(tabActive);
  };
  useEffect(() => {
    setTabActive(categorys[0]);
  }, []);

  return (
    <Layout>
      <Header
        title="FoodMarket"
        text="Let’s get some foods"
        buttonBack={false}
      />
      <section className="px-6 flex w-full overflow-x-scroll hide-scrollbar">
        <section className="min-w-48 h-52 rounded-md overflow-hidden mr-6 bg-white shadow-lg">
          <div className="w-full h-auto">
            <Image
              src="/product1.png"
              width={200}
              height={140}
              alt="Product"
              className="object-cover"
            />
          </div>
          <section className="px-3 mt-3">
            <Typography component="h2" className="text-base truncate">
              Cherry Healthy
            </Typography>
            <Rating rating={4.5} />
          </section>
        </section>
      </section>

      <section className="bg-white mt-6">
        <Tabs
          tabActive={tabActive}
          setTabActive={setTabActive}
          labels={categorys}
        />

        <section className="px-6 mt-4 pb-2.5">
          <Link href="/products/123">
            <section className="flex pb-3 justify-between mb-3.5">
              <section className="flex">
                <Image
                  src="/product1.png"
                  width={60}
                  height={60}
                  alt="productc"
                  className="rounded-md mr-3"
                />
                <div>
                  <Typography component="h2">Soup Bumil</Typography>
                  <Typography component="p" className="text-gray-c-200 text-sm">
                    Rp289.000
                  </Typography>
                </div>
              </section>
              <Rating rating={3.5} />
            </section>
          </Link>
        </section>
      </section>
    </Layout>
  );
}
