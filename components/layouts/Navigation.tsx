import classNames from "classnames";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Logo1 from "@assets/images/logo-invert.svg";
import Logo2 from "@assets/images/LogoWhite.svg";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Login from "@components/Login";
import Button from "@components/form/Button";
const navigation = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Become an Affiliate",
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
        "py-2 xl:px-2 whitespace-nowrap 2xl:px-4 transition-all ease-in-out duration-200 text-lg lg:max-w-[200px] xl:max-w-none",
        router.pathname === href
          ? "font-normal hover:text-red-600 focus:text-red-600 text-red-600"
          : "text-black font-normal hover:text-red-500 focus:text-red-500",
      )}
    >
      {title}
    </Link>
  );
};

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModal = (e: any) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  return (
    <div className="sticky top-0 shadow-[0px_2px_7px_1px_#0002] z-50 bg-white px-4 2xl:px-24 xl:px-16 md:px-6 py-3 md:py-4 lg:py-8">
      <div className="flex max-w-[1920px] w-full mx-auto items-center flex-row-reverse lg:flex-row justify-between">
        <div className="lg:hidden">
          <Link href="/login">
            <Button className="!px-3 sm:!px-6 md:!px-10">Login</Button>
          </Link>
        </div>
        <div className="flex items-center gap-2 flex-row-reverse lg:flex-row justify-end lg:justify-between w-full">
          <Link
            href="/"
            className="text-2xl h-[25px] xs:h-[30px] xs:w-[200px] sm:h-[40px] sm:w-[260px] md:h-[42px] md:w-[300px] w-[150px] block font-semibold relative"
          >
            <Image src={Logo1} fill alt="logo-1" />
          </Link>
          <div className="flex items-center lg:gap-6">
            <div className="hidden lg:flex items-center gap-6">
              {navigation
                .filter((val) => val.title !== "Login")
                .map((item, i) => (
                  <NavLink key={i} href={item.href} title={item.title} />
                ))}
            </div>
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg lg:hidden"
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
            <div className="block lg:hidden">
              {showSidebar ? (
                <IoMdClose
                  className="h-[52px] w-[52px] p-2 bg-[#EA0000] rounded-full text-white cursor-pointer fixed right-5 sm:left-44 top-6 z-50"
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              ) : (
                ""
              )}

              <div
                className={`block lg:hidden top-0 left-0 h-auto sm:h-full w-full sm:w-auto p-3 bg-[#1A1A1A] shadow text-white fixed z-40 ease-in-out duration-300 ${
                  showSidebar ? "translate-x-0 " : "-translate-x-full"
                }`}
              >
                <div className="space-y-3">
                  <div className="relative w-full">
                    <input
                      type="search"
                      name="Search"
                      disabled
                      className="w-full py-2 pl-10 text-sm bg-[#1A1A1A] border-[#1A1A1A]"
                    />
                  </div>
                  <div className="mt-[111px]">
                    {navigation.map((item, i) => (
                      <div key={i} className="flex flex-col ">
                        <Link
                          href={item.href}
                          title={item.title}
                          className={classNames(
                            "py-3 pl-4 transition-all ease-in-out text-xl duration-200",
                            router.pathname === item.href
                              ? "font-bold hover:text-red-600 focus:text-red-600 text-red-600"
                              : "text-white hover:text-red-500 focus:text-red-500",
                          )}
                        >
                          {item.title !== "Login" && item.title}
                        </Link>
                      </div>
                    ))}
                    <div className="relative w-[239px] sm:w-[200px] mb-[108px] h-10 pl-4 mt-[155px]">
                      <Image
                        className="text-white"
                        width={239}
                        height={40}
                        src={Logo2}
                        alt="logo-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classNames("relative", {
                "before:content-none md:before:content-[''] before:absolute before:w-[53px] before:h-[53px] before:bg-black before:rotate-45 before:right-[26px] before:top-[calc(100%_+_14px)]":
                  showModal,
              })}
            >
              <Link
                href="/login"
                className="lg:px-6 2xl:px-10 py-2 bg-black text-sm 2xl:text-lg text-white rounded-full hover:bg-red-500 focus:bg-red-500 transition-all ease-in-out duration-200 uppercase font-bold hidden lg:flex"
              >
                Login
              </Link>
              {showModal && (
                <div className="hidden md:block absolute top-[84px] bg-black -right-[20px] xl:-right-[96px] w-screen md:max-w-[540px] lg:max-w-[640px] 2xl:max-w-[974px]">
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
