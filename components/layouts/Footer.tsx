import Link, { LinkProps } from "next/link";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import ContactForm from "./ContactForm";

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
    className="block py-3 md:py-2 md:px-4 text-gray-700 hover:text-red-500 focus:text-red-500 transition-all ease-in-out duration-200"
  >
    {title}
  </Link>
);

const Footer = () => {
  return (
    <div>
      <ContactForm />
      <div className="bg-gray-900">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-16 text-white text-center">
          <h3 className="text-4xl font-medium">Seller Login</h3>
          <p className="mt-8">
            We&apos;re passoniate fans, just loke you. We believe in the magic
            of live events and the power they have to unite us.
          </p>
          <form className="mt-8">
            <div className="space-y-4 ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
            </div>
            <button className="mt-8 bg-red-500 text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
              Seller Login
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="block md:grid grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="py-8 text-4xl font-semibold">
              <span>live</span>
              <span className="text-red-500">ticket</span>
              <span>group</span>
            </Link>
            <p className="mt-8 text-gray-700">
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
            <div className="mt-8 md:px-4 flex items-center space-x-4">
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
