import Link from "next/link";
import LayoutUser, { Header } from "../components/LayoutUser";
import Image from "next/image";
import { Typography } from "@mui/material";
import { StarRate, StarOutline } from "@mui/icons-material";
import { useRef, useEffect, useState } from "react";
import RatingProduct from "../components/RatingProduct";

const categorys = ["New Taste", "Populer", "Recommended", "Food", "Drinking"];

export default function Home() {
  let indicatorRef = useRef();
  const [indicator, setIndicator] = useState({
    width: 73,
    position: 24,
  });
  const [tabActive, setTabActive] = useState("");

  const handleNavigateTabs = (button, tabActive) => {
    const buttonWidth = button.target.clientWidth;
    const buttonPosition = button.target.offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
    setTabActive(tabActive);
  };
  useEffect(() => {
    setTabActive(categorys[0]);
  }, []);

  return (
    <LayoutUser>
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
            <div className="flex items-center">
              {[...Array(4)].map((i) => (
                <StarRate className="w-4 h-4 text-orange-c-100" key={i} />
              ))}
              {[...Array(5 - 4)].map((i) => (
                <StarOutline className="w-4 h-4 text-gray-c-300" key={i} />
              ))}
              <Typography
                component="p"
                className="text-gray-c-200 text-xs ml-1.5 mb-0"
              >
                4.5
              </Typography>
            </div>
          </section>
        </section>
      </section>

      <section className="bg-white mt-6">
        <section className="flex border-b w-full overflow-x-auto hide-scrollbar sticky top-0 border-gray-c-100 px-6 py-4">
          <span
            className="absolute bottom-0 border border-black duration-300"
            ref={indicatorRef}
            style={{
              left: `${indicator.position}px`,
              width: `${indicator.width}px`,
            }}
          />
          {categorys.map((data) => (
            <button
              className="text-md mr-6 bg-transparent min-w-max"
              onClick={(e) => handleNavigateTabs(e, data)}
            >
              <Typography component="p">{data}</Typography>
            </button>
          ))}
        </section>
        <section className="px-6 mt-4 pb-2.5">
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
          <section className="flex justify-between mb-3.5">
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
                <Typography component="p" className="text-gray-c-200 text-sm">Rp289.000</Typography>
              </div>
            </section>
            <RatingProduct rating={3.5}/>
          </section>
        </section>
      </section>
    </LayoutUser>
  );
}
