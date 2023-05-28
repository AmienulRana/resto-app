import { Typography } from "@mui/material";
import Link from "next/link";
import { ChevronLeft } from "@mui/icons-material";
import React from "react";
import { Layout } from "@/components/common/layout";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";

const SignUp = () => {
  return (
    <Layout>
      <section className="px-6 py-5 mb-6 bg-white flex items-center">
        <div className="ml-6">
          <Typography variant="h6" component="h1">
            Sign In
          </Typography>
          <Typography variant="body1" component="p" className="text-gray-c-200">
            Find your best ever meal
          </Typography>
        </div>
      </section>
      <section className="px-6 py-5 bg-white h-4/5">
        <Input
          type="email"
          placeholder="Type your email address"
          label="Email Address"
          classNameContainer="mb-4"
        />
        <Input
          type="password"
          placeholder="Type your password"
          label="Password"
          classNameContainer="mb-4"
        />
        <Button classNameProps="bg-orange-c-100 mb-3">Countinue</Button>
        <Typography component="p">
          Doesn&apos;t have account?{" "}
          <Link href="/sign-up" className="text-orange-c-100">
            Sign up
          </Link>
        </Typography>
      </section>
    </Layout>
  );
};
export default SignUp;
