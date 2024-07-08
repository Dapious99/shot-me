import React from "react";
import { currentYear } from "../../utils/index";

const Footer = () => {
  return (
    <div className="bg-cyan-950 text-white cursor-pointer px-8 py-3 text-center">
      &#169;Kodewarlock {currentYear} All right reserved.
    </div>
  );
};

export default Footer;
