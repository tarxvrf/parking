"use client";
import React, { useEffect, useState } from "react";
import { car, pop } from "./font";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  const images = ["partner3.jpg", "partner1.jpg", "partner2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ganti gambar tiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center pt-32 ">
      <div className={`absolute inset-0 bg-black/40 `}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/images/${img})` }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl animate-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Solusi <span className="text-amber-400">Parkir Modern</span> &amp;
          Aman
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white font-bold">
          GB Parking menyediakan layanan parkir otomatis, pembayaran cashless,
          dan monitoring real-time untuk pengalaman parkir tanpa repot.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-amber-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
          >
            Lihat Layanan
          </a>
          <a
            href="#contact"
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
