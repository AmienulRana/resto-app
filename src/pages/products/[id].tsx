import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/router";
import { Layout } from "@/components/common/layout";
import { Rating } from "@/components/common/rating";
import { Button } from "@/components/common/button";

const ProductDetail = () => {
  const router = useRouter();
  return (
    <Layout navbar={false}>
      <section className="relative bg-white h-full">
        <ChevronLeftIcon
          className="absolute text-white cursor-pointer top-5 left-4 block w-10 h-10"
          onClick={() => router.back()}
        />
        <Image
          src="/product1.png"
          width={300}
          height={330}
          className="w-full object-cover"
          priority
          alt="product"
        />
        <section className="-translate-y-8 px-4 py-6 w-full bg-white rounded-2xl relative">
          <section className="flex justify-between items-center">
            <div>
              <Typography component="h1" className="mb-1.5">
                Chery Healthy
              </Typography>
              <Rating rating={4.6} />
            </div>
            <div className="flex">
              <button className="w-7 h-7 flex items-center justify-center border border-black rounded-md">
                <RemoveIcon />
              </button>
              <Typography component="p" className="mx-2.5">
                1
              </Typography>
              <button className="w-7 h-7 flex items-center justify-center border border-black rounded-md">
                <AddIcon />
              </button>
            </div>
          </section>
          <Typography component="p" className="text-sm text-gray-c-200 mt-3">
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Typography>
          <section className="mt-3.5">
            <Typography component="p">Ingredients</Typography>
            <Typography component="p" className="text-gray-c-200">
              Seledri, telur, blueberry, madu.
            </Typography>
          </section>
        </section>
        <section className="absolute flex items-center justify-between bottom-0 left-0 w-full bg-white px-4 py-6">
          <div>
            <Typography component="p" className="text-base text-gray-c-200">
              Total price
            </Typography>
            <Typography component="h2" className="text-lg">
              Rp12.289.000
            </Typography>
          </div>
          <Button classNameProps="h-11 w-40 bg-orange-c-100">Order Now</Button>
        </section>
      </section>
    </Layout>
  );
};

export default ProductDetail;
