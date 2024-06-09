"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-full  fixed p-5 text-slate-100 border-b border-slate-700 flex items-center justify-around">
      <Link href={"/"}>
        <h1 className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-800 via-sky-500 to-green-500 text-[2em] px-2">
          Sally
        </h1>
      </Link>
      <ul className="flex items-center gap-7 text-[1.2em]">
        <li >
          <Link  href={'/'} className="hover:text-white text-slate-300 ">Home</Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-white text-slate-300 ">About</Link>
        </li>
        <li>
          <Link href={'/'} className="hover:text-white text-slate-300 ">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
