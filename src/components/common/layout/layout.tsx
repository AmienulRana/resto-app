import { ReactNode } from "react";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeft } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface Props {
  children: ReactNode;
  navbar?: boolean;
}

const dataNavbar = [
  { name: "home", Icon: HomeIcon, active_link: "/", href: "/" },
  {
    name: "scan Qr",
    Icon: QrCodeScannerIcon,
    active_link: "/scann",
    href: "/scann",
  },
  {
    name: "transaction",
    Icon: ShoppingBagIcon,
    active_link: "/transaction",
    href: "/transaction",
  },
  {
    name: "my account",
    Icon: PersonIcon,
    active_link: "/sign-in",
    href: "/my-account",
  },
];

interface PropsHeader {
  title: string;
  text: string;
  buttonBack: boolean;
}
export const Header = (props: PropsHeader) => {
  return (
    <header>
      <section className="px-6 py-5 mb-6 bg-white flex items-center">
        {props.buttonBack ? <ChevronLeft className="text-2xl" /> : null}
        <div className="ml-6">
          <Typography variant="h6" component="h1">
            {props.title}
          </Typography>
          <Typography variant="body1" component="p" className="text-gray-c-200">
            {props.text}
          </Typography>
        </div>
      </section>
    </header>
  );
};

const LayoutUser = (props: Props) => {
  const router: NextRouter = useRouter();
  const { navbar = true} = props;

  return (
    <section className="w-full h-screen flex justify-center">
      <section className="md:w-96 h-full relative overflow-y-auto bg-gray-c-100">
        {navbar && 
          <nav className="absolute left-0 bottom-0 w-full bg-white">
            <ul className="flex justify-between w-full py-3.5 px-10">
              {dataNavbar.map((data, index) => (
                <Link href={data?.href} key={index}>
                  <li
                    className={[
                      "flex flex-col justify-center items-center",
                      data.active_link === router.pathname
                        ? "text-orange-c-100"
                        : "text-gray-c-300",
                    ].join(" ")}
                  >
                    <data.Icon className="text-3xl" />
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        }
        <main className={["h-full overflow-y-auto hide-scrollbar", navbar ? 'pb-10' : 'pb-0'].join(' ')}>{props.children}</main>
      </section>
    </section>
  );
};

export default LayoutUser;
