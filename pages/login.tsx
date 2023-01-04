import Button from "@components/form/Button";
import { Layout } from "@components/layouts";
import Meta from "@components/Meta";
import { NextPageWithLayout } from "./_app";
import OgImage from "../assets/images/logo-1.svg";

const Login: NextPageWithLayout = () => {
  return (
    <div className="relative">
      <Meta
        title={"LiveTicketGroup - Login"}
        description={
          "Access your LiveTicketGroup account by logging in. View and manage your tickets and account settings. Don't have an account yet? Sign up now to get started"
        }
        og_title={"LiveTicketGroup - Login"}
        og_description={
          "Access your LiveTicketGroup account by logging in. View and manage your tickets and account settings. Don't have an account yet? Sign up now to get started"
        }
        og_image={OgImage}
      />
      <div className="bg-black">
        <div className="bg-pieroHuerto bg-no-repeat bg-cover h-[600px] w-full opacity-20"></div>
      </div>
      <div className="max-w-xl mx-auto px-8 sm:px-4 py-8 md:py-16 text-white text-center absolute  md:top-[2%] top-[6%] md:left-[20%] md:right-[20%] left-[5%] right-[5%]">
        <h3 className="lg:text-4xl md:text-3xl text-[22px] font-bold">
          Seller Login
        </h3>
        <p className="mt-8 md:mt-12 text-center text-base md:text-xl leading-9 lg:leading-8">
          We&apos;re passoniate fans, just loke you. We believe in the magic of
          live events and the power they have to unite us.
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
                className="flex gap-3 sm:gap-[17px] cursor-pointer items-center"
              >
                <input
                  id="remember"
                  type={"checkbox"}
                  className="text-xl cursor-pointer p-3 rounded-md text-red-500"
                />
                <p className="text-sm md:text-lg leading-9 lg:leading-8">
                  Remember me
                </p>
              </label>
            </div>
          </div>
          <Button className="mt-8">login</Button>
        </form>
      </div>
    </div>
  );
};

Login.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Login;
