"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

function Header() {
  const path = usePathname();
   const linkmenu=[
    { name:"Home", path:"/"},
    { name:"Contact", path:"/tentang"},
      ]  
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
 
    <div className="text-white font-bold text-xl">GB Parking</div>

  
    <nav className="hidden md:flex space-x-6">
      <a href="#home" className="text-white hover:text-green-400">Home</a>
      <a href="#services" className="text-white hover:text-green-400">Layanan</a>
      <a href="#portfolio" className="text-white hover:text-green-400">Portfolio</a>
      <a href="#contact" className="text-white hover:text-green-400">Kontak</a>
    </nav>

    
    <button className="md:hidden text-white">
      ☰
    </button>
  </div>
</header>
    </div>
  );
}

export default Header;
