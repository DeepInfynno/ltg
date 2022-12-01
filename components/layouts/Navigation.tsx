import classNames from "classnames";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
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
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          <Image
            src={Logo1}
            width={260}
            className="sm:h-[40px] sm:w-[260px] h-8 w-[200px]"
            height={40}
            alt="logo-1"
          />
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            {navigation.map((item, i) => (
              <NavLink key={i} href={item.href} title={item.title} />
            ))}
          </div>

          <Link
            href="/login"
            className="px-10 py-2 bg-[#EA0000 ] text-lg text-white rounded-full hover:bg-red-500 focus:bg-red-500 transition-all ease-in-out duration-200 uppercase font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
