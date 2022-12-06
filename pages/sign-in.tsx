import { Typography } from "@mui/material";
import LayoutUser from "../components/LayoutUser";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";

const SignIn = () => {
  return (
    <LayoutUser>
      <section className="px-6 py-5 mb-6 bg-white">
        <Typography variant="h6" component="h1">
          Sign in
        </Typography>
        <Typography variant="body1" component="p" className="text-gray-c-200">
          Find your best ever meal
        </Typography>
      </section>
      <section className="px-6 py-5 bg-white h-4/5">
        <Input
          type="text"
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
        <Button classNameProps="bg-orange-c-100">Sign in</Button>
        <Link href="/sign-up">
          <Button classNameProps="text-white bg-gray-c-300 mt-3">
            Create new account
          </Button>
        </Link>
      </section>
    </LayoutUser>
  );
};
export default SignIn;
