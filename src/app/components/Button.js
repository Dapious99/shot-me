import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm || md",
  variant = "primary || secondary || transparent",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium rounded-md shadow focus:outline-none disabled:opacity-50",
      {
        "py-2 px-10 text-sm font-normal": size === "sm",
        "py-3 px-32 md:px-24 sm:px-20 text-sm font-normal": size === "md",
        "bg-cyan-900 text-white hover:bg-cyan-400": variant === "primary",
        "bg-cyan-400 text-neutral-300 hover:bg-cyan-900":
          variant === "secondary",
        "bg-transparent text-black hover:bg-cyan-400": variant === "transparent",
      }
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;
