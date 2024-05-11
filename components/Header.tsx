"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import ThemeSwitcher from "./ThemeSwitcher";
import NavItem from "./NavItem";
import Image from "next/image";
const Header = () => {
  const [open, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!open);
  };
  return (
    <header className=" text-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="w-1/4">
          <div className="relative w-100">
          <Link href={'/'}><Image src='/images/profile.png' width={64} height={64} className="object-cover" alt=""></Image></Link>
          </div>
        </div>
        <div className="w-1/2 text-center justify-center flex">
         <DesktopNav></DesktopNav>

          <button
            className="block lg:hidden text-2xl text-white focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
        <div className="w-1/4 flex justify-end">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div></div>
      </div>
    </header>
  );
};

const DesktopNav = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex gap-10 rounded-md bg-white/90 p-4 px-5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </ul>
    </nav>
  );
};

export default Header;
