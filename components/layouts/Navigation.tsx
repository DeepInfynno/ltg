import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
        "py-2 px-4 transition-all ease-in-out duration-200",
        router.pathname === href
          ? "text-red-500 hover:text-red-600 focus:text-red-600"
          : "text-gray-700 hover:text-red-500 focus:text-red-500",
      )}
    >
      {title}
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="py-8 text-2xl font-semibold">
          <span>live</span>
          <span className="text-red-500">ticket</span>
          <span>group</span>
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            {navigation.map((item, i) => (
              <NavLink key={i} href={item.href} title={item.title} />
            ))}
          </div>
          <Link
            href="/signup"
            className="hidden md:block px-6 py-2 text-gray-700 hover:text-red-500 focus:text-red-500 transition-all ease-in-out duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-red-500 focus:bg-red-500 transition-all ease-in-out duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
