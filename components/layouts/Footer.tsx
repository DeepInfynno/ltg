import Link, { LinkProps } from "next/link";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import ContactForm from "./ContactForm";
import PieroHuerto from "@assets/images/piero-huerto.svg";
import Image from "next/image";
import Logo1 from "@assets/images/logo-1.svg";

const navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Affiliates",
    href: "/affiliates",
  },
  {
    title: "Sellers",
    href: "/sellers",
  },
  {
    title: "Carrers",
    href: "/carrers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Seller Login",
    href: "/login",
  },
];

const extraNavigation = [
  {
    title: "Terms",
    href: "/terms",
  },
  {
    title: "Privacy",
    href: "/privacy",
  },
];

type NavLinkProps = LinkProps & {
  title: string;
};

const NavLink = ({ href, title, ...props }: NavLinkProps) => (
  <Link
    href={href}
    {...props}
    className="block py-3 md:py-2 md:px-4 text-black text-lg hover:text-red-500 focus:text-red-500 transition-all ease-in-out duration-200"
  >
    {title}
  </Link>
);

type FooterProps = {
  hideContact?: boolean;
};

const Footer = ({ hideContact }: FooterProps) => {
  return (
    <div>
      {/* {!hideContact && <ContactForm />} */}
      <div className="relative">
        <div className="bg-black">
          <Image
            src={PieroHuerto}
            className="h-[100%] w-[100%] opacity-20 "
            alt="huerto"
          />
        </div>
        <div className="max-w-xl mx-auto px-4 py-8 md:py-16 text-white text-center absolute top-[10%] left-[35%]">
          <h3 className="text-4xl font-bold">Seller Login</h3>
          <p className="mt-12 text-center text-xl">
            We&apos;re passoniate fans, just loke you. We believe in the magic
            of live events and the power they have to unite us.
          </p>
          <form className="mt-14">
            <div className="space-y-4 flex flex-col ">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <div className="flex flex-row items-center gap-4 pt-3 text-xl">
                <input type={"checkbox"} className="text-xl p-3 rounded-md" />
                <p>Remember me</p>
              </div>
            </div>
            <button className="mt-8 bg-[#EA0000] text-white hover:bg-red-600 px-12 py-2 rounded-full transition-all ease-in-out duration-200 font-bold uppercase text-lg">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="block md:grid grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="py-8 text-4xl font-semibold">
              <Image
                src={Logo1}
                width={260}
                className="sm:h-[40px] sm:w-[260px] h-8 w-[200px]"
                height={40}
                alt="logo-1"
              />
            </Link>
            <p className="mt-8 text-[#9D9D9D] text-lg">
              &copy; 2022 liveticketgroup. All rights reserved.
            </p>
          </div>
          <div>
            {navigation.map((item, i) => (
              <NavLink key={i} href={item.href} title={item.title} />
            ))}
          </div>
          <div>
            {extraNavigation.map((item, i) => (
              <NavLink key={i} href={item.href} title={item.title} />
            ))}
            <div className="mt-[140px] md:px-4 flex items-center space-x-4">
              <a href="">
                <SiLinkedin className="h-6 w-6 text-gray-500" />
              </a>
              <a href="">
                <SiInstagram className="h-6 w-6 text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
