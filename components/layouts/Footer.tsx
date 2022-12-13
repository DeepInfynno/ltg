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
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Affiliates",
    href: "/affiliates",
  },
  {
    title: "Become a Seller",
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
    title: "Login",
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
    <div className="w-screen z-50 shadow-[-8px_2px_10px_3px_#0002]">
      {/* {!hideContact && <ContactForm />} */}
      <div className="container max-w-none mx-auto xs:mx-0 md:mx-auto px-9 xs:px-10 sm:px-16 lg:px-0 py-8 md:py-16 lg:max-w-[863px] xl:max-w-[1024px] 2xl:max-w-[1364px]">
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
          <div className="flex  flex-row justify-between max-w-[210px] xs:max-w-none xs:justify-start gap-10 sm:gap-32 md:gap-6 lg:gap-16 xl:gap-28 mt-10 2xl:gap-32 md:mt-0">
            <div className="flex-1">
              {navigation.map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
            </div>
            <div className="flex-1">
              {extraNavigation.map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
              <div className="w-full mt-[158px] xs:mt-[134px] hidden md:block">
                <div className="flex gap-[23px] py-3 md:py-2 md:px-4">
                  <Link target="_blank" href="https://www.linkedin.com/company/livetixgroup">
                    <SiLinkedin className="h-6 w-6 text-gray-500" />
                  </Link>
                  <Link target="_blank" href="#">
                    <SiInstagram className="h-6 w-6 text-gray-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20 block md:hidden">
            <div className="mt-16 xl:mt-[230px] lg:mt-[240px] md:mt-[240px]  md:ml-[-70px] lg:ml-[-110px] flex items-center space-x-8">
              <Link target="_blank" href="https://www.linkedin.com/company/livetixgroup">
                <SiLinkedin className="h-6 w-6 text-gray-500" />
              </Link>
              <Link target="_blank" href="#">
                <SiInstagram className="h-6 w-6 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
