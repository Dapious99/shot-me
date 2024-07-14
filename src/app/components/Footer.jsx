import { currentYear } from "@/utils";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white px-8 py-3 text-center flex justify-between items-center">
      <p className="hover:text-amber-600">
        &copy; {currentYear} shotMe by Kodewarlock. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
