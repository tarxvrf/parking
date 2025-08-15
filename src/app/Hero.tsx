"use client";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Hero() {
  const images = ["partner3.jpg", "partner1.jpg", "partner2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ganti gambar tiap 5 detik

    return () => clearInterval(interval);
  });

  return (
    <section className="sm:h-screen  flex items-center justify-center pt-20 sm:pt-32 ">
      <div>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-contain bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/images/${img})` }}
          />
        ))}
      </div>

      <div className="relative z-10  text-center px-6 max-w-3xl">
        <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
          Solusi <span className="text-amber-400">Parkir Modern</span> &amp;
          Aman
        </h1>
        <p className="mt-4 text-center text-sm md:text-xl text-white font-bold">
          GB Parking menyediakan layanan parkir otomatis, pembayaran cashless,
          dan monitoring real-time untuk pengalaman parkir tanpa repot.
        </p>
        <div className="mt-6 flex sm:flex-row gap-4 justify-center">
          <Button size="sm" className="bg-amber-500 hover:bg-gray-400">
            Lihat Layanan
          </Button>
          <Button size={"sm"} className="bg-blue-900 hover:bg-gray-400">
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default Hero;
