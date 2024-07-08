import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-cyan-950 text-white cursor-pointer px-8 py-3">
      <Link href="/" className="italic">
        shotMe
      </Link>
      <div className="flex gap-4">
        <div>dark mode div</div>
        <div className="flex gap-6">
          <Link href="/picture">Pictures</Link>
          <Link href="/video">Videos</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
