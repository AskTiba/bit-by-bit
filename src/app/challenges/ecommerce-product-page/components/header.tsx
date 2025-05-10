"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import menu from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";

// Nav links configuration
const navItems = [
  { name: "Collection", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname(); // Get current path

  return (
    <>
      <header className="flex justify-between items-center mt-2 px-4 sm:mx-28">
        {/* Left side: logo and nav */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger type="button">
                <Image src={menu} alt="Menu" />
              </SheetTrigger>
              <SheetContent side="left" className="w-4/6 sm:w-1/3">
                <SheetHeader className="font-semibold space-y-4">
                  <SheetTitle />
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-base font-medium ${
                        pathname === item.href
                          ? "text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop nav and logo */}
          <section className="flex items-center gap-16">
            <div>
              <Image src={logo} alt="Logo" />
            </div>

            <ul className="hidden sm:flex space-x-8 items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`
            pb-6 transition-all font-medium 
            border-b-4 
            ${
              isActive
                ? "text-orange-500 border-orange-500"
                : "text-gray-600 border-transparent hover:border-orange-300 hover:text-orange-500"
            }
          `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        {/* Right side: cart and avatar */}
        <div className="flex items-center space-x-6">
          <Image src={cart} width={32} height={32} alt="Cart Icon" />
          <Image
            src={avatar}
            width={48}
            height={48}
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      </header>

      <Separator className="my-3" />
    </>
  );
};

export default Header;
