import Link, { LinkProps } from "next/link";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import ContactForm from "./ContactForm";
import PieroHuerto from "@assets/images/piero-huerto.svg";
import PieroHuertoResponsive from "@assets/images/piero-huerto-responsive.svg";
import Image from "next/image";
import Logo1 from "@assets/images/logo-invert.svg";
import Button from "@components/form/Button";

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
    title: "Careers",
    href: "/careers",
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
    className="block whitespace-nowrap py-3 md:py-2 md:px-4 text-black font-bold md:font-medium text-lg hover:text-red-500 focus:text-red-500 transition-all ease-in-out duration-200"
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
          <div className="bg-pieroHuerto bg-no-repeat bg-cover h-[600px] w-full opacity-20"></div>
        </div>
        <div className="max-w-xl mx-auto px-8 sm:px-4 py-8 md:py-16 text-white text-center absolute  md:top-[2%] top-[6%] md:left-[20%] md:right-[20%] left-[5%] right-[5%]">
          <h3 className="lg:text-4xl md:text-3xl text-[22px] font-bold">
            Seller Login
          </h3>
          <p className="mt-8 md:mt-12 text-center text-base md:text-xl leading-9 lg:leading-8">
            We&apos;re passoniate fans, just loke you. We believe in the magic
            of live events and the power they have to unite us.
          </p>
          <form className="mt-10 md:mt-14">
            <div className="space-y-4 flex flex-col ">
              <input
                type="email"
                name="email"
                id="inputID"
                placeholder="Your Email Address"
                className="border-none w-full rounded-lg px-4 py-2 text-black placeholder:text-gray-400"
              />
              <input
                type="password"
                name="password"
                id="inputID"
                placeholder="Password"
                className="border-none w-full rounded-lg px-4 py-2 text-black placeholder:text-gray-400"
              />
              <div className="flex flex-row items-center gap-4 pt-3 text-xl justify-center lg:justify-start">
                <label
                  htmlFor="remember"
                  className="flex gap-[17px] cursor-pointer"
                >
                  <input
                    id="remember"
                    type={"checkbox"}
                    className="text-xl cursor-pointer p-3 rounded-md text-red-500"
                  />
                  <p>Remember me</p>
                </label>
              </div>
            </div>
            <Button className="mt-8">login</Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto xs:mx-0 md:mx-auto px-9 xs:px-10 sm:px-16 lg:px-20 py-8 md:py-16 mt-16 ">
        <div className="block md:grid grid-cols-4 md:grid-cols-2 gap-8 md:gap-28 lg:gap-20">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="py-8 text-4xl font-semibold ">
              <Image
                src={Logo1}
                width={260}
                className="sm:h-[40px] sm:w-[260px] h-8 w-[200px] pr-4"
                height={40}
                alt="logo-1"
              />
            </Link>
            <p className="mt-6 md:mt-10 text-[#9D9D9D] text-lg w-[70%] md:w-full">
              &copy; 2022 liveticketgroup. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row justify-between max-w-[210px] xs:max-w-none xs:justify-start xs:gap-32 md:gap-6 lg:gap-16 xl:gap-28 mt-10 2xl:gap-32 md:mt-0">
            <div>
              {navigation.map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
            </div>
            <div>
              {extraNavigation.map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
              <div className="w-full mt-[158px] xs:mt-[134px] hidden md:block">
                <div className="flex gap-[23px] py-3 md:py-2 md:px-4">
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
          <div className="pb-20 block md:hidden">
            <div className="mt-16 xl:mt-[230px] lg:mt-[240px] md:mt-[240px]  md:ml-[-70px] lg:ml-[-110px] flex items-center space-x-8">
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
