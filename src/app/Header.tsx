"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <div className="text-white font-bold text-xl">GB Parking</div>

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
          <label htmlFor="my-drawer-3">
            <GiHamburgerMenu className="text-white mt-1 sm:hidden" />{" "}
          </label>
        </div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
