import Link from "next/link";
import LayoutUser, { Header } from "../components/LayoutUser";
import Image from "next/image";
import { Typography } from "@mui/material";
import { StarRate, StarOutline } from "@mui/icons-material";

export default function Home() {
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

      <Link href="/sign-up/user">Sign up user</Link>
    </LayoutUser>
  );
}
