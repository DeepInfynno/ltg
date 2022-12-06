import classNames from "classnames";
import React from "react";

const Login = ({modalClass} : {modalClass?:string}) => {
  return (
    <div className={classNames("relative", modalClass)}>
      <div className="bg-black">
        <div className="bg-pieroHuerto h-[600px] w-full opacity-20"></div>
      </div>
      <div className="max-w-xl mx-auto px-8 sm:px-4 py-8 md:py-16 text-white text-center absolute  md:top-[2%] top-[6%] md:left-[20%] md:right-[20%] left-[5%] right-[5%]">
        <h3 className="lg:text-4xl   md:text-3xl text-[22px] font-bold">
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
              <input
                type={"checkbox"}
                className="text-xl p-3 rounded-md text-red-500 border-red-500"
              />
              <p>Remember me</p>
            </div>
          </div>
          <button className="mt-8 bg-[#EA0000] text-white hover:bg-red-400 focus:bg-red-400 px-12 py-2 rounded-full transition-all ease-in-out duration-200 font-bold uppercase text-lg">
            Seller Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
