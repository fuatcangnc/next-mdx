"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
type NavItemProps = {
  href: string;
  children?: React.ReactNode;
};
const NavItem = ({ href, children }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  console.log(pathname);
  return (
      <li>
        <Link href={href}className={`${isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400'}`}>
          {children}{isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-50/0 via-teal-500/40 to-teal-50/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
        </Link>
      </li>
  );
};

export default NavItem;
