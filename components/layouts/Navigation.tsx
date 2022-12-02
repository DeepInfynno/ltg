import classNames from "classnames";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Logo1 from "@assets/images/logo-1.svg";
import { useState } from "react";
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

type NavLinkProps = LinkProps & {
  title: string;
  active?: boolean;
};

const NavLink = ({ href, title, active, ...props }: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      {...props}
      className={classNames(
        "py-2 px-4 transition-all ease-in-out duration-200 text-lg",
        router.pathname === href
          ? "font-bold hover:text-red-600 focus:text-red-600  underline decoration-4"
          : "text-gray-700 hover:text-red-500 focus:text-red-500",
      )}
    >
      {title}
    </Link>
  );
};

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <div className=" px-4 xl:px-24 lg:px-16 md:px-6 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          <Image
            src={Logo1}
            width={260}
            className="sm:h-[40px] sm:w-[260px] h-8 w-[200px]   "
            height={40}
            alt="logo-1"
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            {navigation
              .filter((val) => val.title !== "Seller Login")
              .map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
          </div>
          <div className="block md:hidden">
            {showSidebar ? (
              <button
                className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                x
              </button>
            ) : (
              <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg "
                aria-controls="navbar-hamburger"
                aria-expanded="false"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

            <div
              className={`block md:hidden top-0 right-0 w-[100vw] sm:w-[45vw] bg-black  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
                showSidebar ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="mt-10">
                {navigation.map((item, i) => (
                  <div key={i} className="flex flex-col ">
                    <Link
                      href={item.href}
                      title={item.title}
                      className={classNames(
                        "py-2 pl-4 transition-all ease-in-out duration-200 text-lg",
                        router.pathname === item.href
                          ? "font-bold hover:text-red-600 focus:text-red-600  underline decoration-4"
                          : "text-white hover:text-red-500 focus:text-red-500",
                      )}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/login"
            className="px-10 py-2 bg-black text-lg text-white rounded-full hover:bg-red-500 focus:bg-red-500 transition-all ease-in-out duration-200 uppercase font-bold hidden md:flex"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
