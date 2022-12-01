import { Typography } from "@mui/material";
import LayoutUser from "../../components/LayoutUser";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import { ChevronLeft } from "@mui/icons-material";
import React from "react";

const SignUp = () => {
  return (
    <LayoutUser>
      <section className="px-6 py-5 mb-6 bg-white flex items-center">
        <ChevronLeft className="text-2xl" />
        <div className="ml-6">
          <Typography variant="h6" component="h1">
            Sign up
          </Typography>
          <Typography variant="body1" component="p" className="text-gray-c-200">
            Find your best ever meal
          </Typography>
        </div>
      </section>
      <section className="px-6 py-5 bg-white h-4/5">
        <Input
          type="text"
          placeholder="Type your full name"
          label="Full Name"
          classNameContainer="mb-4"
        />
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
        <Button text="Countinue" classNameProps="bg-orange-c-100 mb-3" />
        <Typography component="p">
          Already have account?{" "}
          <Link href="/sign-in" className="text-orange-c-100">
            Sign in
          </Link>
        </Typography>
      </section>
    </LayoutUser>
  );
};
export default SignUp;
