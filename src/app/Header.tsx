"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // kalau scroll > 50px, ubah bg
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" ">
      {/* Header */}
      <header
        className={`fixed bg-amber-300 top-0 left-0 w-full z-50  ${
          isScrolled
            ? "bg-amber-500 shadow-xl rounded-b-lg ease-in-out duration-1000 "
            : "duration-1000 ease-in-out bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-white font-bold text-2xl">GB Parking</div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-white hover:text-amber-400 font-bold"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-amber-400 font-bold"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-amber-400 font-bold"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white hover:text-amber-400 font-bold"
            >
              Kontak
            </a>
          </nav>
          <label htmlFor="close">
            <GiHamburgerMenu className="text-white text-2xl mt-1 sm:hidden" />{" "}
          </label>
        </div>

        <div className="drawer">
          <input id="close" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <ul className="menu bg-gradient-to-r from-amber-500 via-white to-amber-500  bg-[length:400%_400%] animate-gradient relative z-10  min-h-full w-full p-4">
              {/* Sidebar content here */}
              <label htmlFor="close" className="drawer-overlay"></label>
              <label htmlFor="close">
                <IoCloseCircle className="text-4xl" />
              </label>
              <Link
                href="#about"
                onClick={() => {
                  document.getElementById("close")?.click();
                }} className="text-xl font-bold"
              >
                About
              </Link>
               <Link
                href="#service"
                onClick={() => {
                  document.getElementById("close")?.click();
                }} className="text-xl font-bold"
              >
                Service
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
