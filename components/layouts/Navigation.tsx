import classNames from "classnames";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Logo1 from "@assets/images/logo-invert.svg";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Login from "@components/Login";
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
          ? "font-bold hover:text-red-600 focus:text-red-600 text-red-600 underline decoration-4"
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
  }

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  return (
    <div className="sticky top-0 shadow-[0px_2px_7px_1px_#0002]  z-50 bg-white px-4 xl:px-24 lg:px-16 md:px-6 py-3 md:py-8">
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

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center">
            {navigation
              .filter((val) => val.title !== "Seller Login")
              .map((item, i) => (
                <NavLink key={i} href={item.href} title={item.title} />
              ))}
          </div>
          <div className="block md:hidden">
            {showSidebar ? (
              <IoMdClose
                className="h-6 w-6 text-white cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
              />
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
              className={`block md:hidden top-0 right-0  h-full p-3 bg-gray-800 shadow  text-white fixed  z-40 ease-in-out duration-300 ${
                showSidebar ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="space-y-3">
                <div className="relative w-full">
                  <input
                    type="search"
                    name="Search"
                    disabled
                    className="w-full py-2 pl-10 text-sm bg-gray-800 border-gray-800"
                  />
                </div>
                <div className="mt-10">
                  {navigation.map((item, i) => (
                    <div key={i} className="flex flex-col ">
                      <Link
                        href={item.href}
                        title={item.title}
                        className={classNames(
                          "py-4 pl-4 transition-all ease-in-out text-2xl duration-200",
                          router.pathname === item.href
                            ? "font-bold hover:text-red-600 focus:text-red-600  underline decoration-4"
                            : "text-white hover:text-red-500 focus:text-red-500",
                        )}
                      >
                        {item.title === "Seller Login" ?
                          <Button >{item.title}</Button>
                        : 
                          item.title
                        }
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={classNames("relative",{"before:content-none md:before:content-[''] before:absolute before:w-[53px] before:h-[53px] before:bg-black before:rotate-45 before:right-[26px] before:top-[calc(100%_+_14px)]": showModal })}>
            <Link
              href="/login"
              onClick={handleModal}
              className="px-10 py-2 bg-black text-lg text-white rounded-full hover:bg-red-500 focus:bg-red-500 transition-all ease-in-out duration-200 uppercase font-bold hidden md:flex"
              >
              Login
            </Link>
            {showModal && 
              <div className="hidden md:block absolute top-[84px] bg-black right-[-96px] w-screen md:max-w-[540px] lg:max-w-[640px] 2xl:max-w-[974px]">
                <Login />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
