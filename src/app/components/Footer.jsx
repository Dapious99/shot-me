import { currentYear } from "@/utils";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white px-8 py-3 text-center flex justify-between items-center">
      <p className="">
        &copy; {currentYear} shotMe by Kodewarlock. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Twitter"
          aria-hidden="true"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          aria-hidden="true"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          aria-hidden="true"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
