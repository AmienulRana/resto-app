import { Header } from "@/components/common/layout/layout";
import { Rating } from "@/components/common/rating";
import { Tabs } from "@/components/common/tabs";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const categorys = ["In Progress", "Past Orders"];
const ExitsTransaction = () => {
  
  const [tabActive, setTabActive] = useState("");

  
  return (
    <>
      <Header
        title="FoodMarket"
        text="Let’s get some foods"
        buttonBack={false}
      />
      <section className="bg-white mt-6">
        <Tabs tabActive={tabActive} setTabActive={setTabActive} labels={categorys}/>
        <section className="px-6">
          <div className="flex pb-3 mt-4 justify-between mb-3.5">
            <div className="flex">
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
                 3 items • Rp289.000
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ExitsTransaction;
