import classNames from "classnames";
import React from "react";

type buttonProp = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: buttonProp) => {
  return (
    <div>
      <button
        className={classNames(
          "uppercase font-bold bg-[#EA0000] cursor-pointer text-white text-xs md:text-sm xl:text-base 2xl:text-lg hover:bg-red-600 px-6 py-2 rounded-[20px] transition-all ease-in-out duration-200",
          className,
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
