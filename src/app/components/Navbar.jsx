"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="flex justify-between bg-cyan-900 dark:bg-cyan-950 text-white cursor-pointer px-8 py-3">
      <Link href="/" className="italic">
        shotMe
      </Link>
      <div className="flex items-center gap-4">
        <button
          className="bg-cyan-800 px-4 py-2 rounded sm:absolute sm:right-16 md:absolute md:right-20"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <FaMoon className="text-black" />
          ) : (
            <FaSun className="text-white" />
          )}
        </button>
        <div className="flex gap-6">
          <Link href="/picture">Pictures</Link>
          <Link href="/video">Videos</Link>
          <Link href="/about">About</Link>
          <Link href="/signin">Sign In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
