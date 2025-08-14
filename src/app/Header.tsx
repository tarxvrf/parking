"use client";

import React, { useEffect, useState } from "react";

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
    <div className="fixed top-0 left-0 w-full z-50 ">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50  ${isScrolled ? "bg-amber-500 shadow-xl rounded-b-lg ease-in-out duration-1000 " : "duration-1000 ease-in-out bg-transparent"}`}>
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

          <button className="md:hidden text-white">☰</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
