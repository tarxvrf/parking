import React from "react";
import { car, pop } from "./font";
import Image from "next/image";

function Hero() {
  return (
   
      <section className="h-screen flex items-center justify-center pt-32 ">
        <div className="absolute inset-0">
          <Image
            width={500}
            height={500}
            alt="GB Parking"
            className="w-full h-full object-cover opacity-80"
            src={"/images/parking1.jpg"}
          />
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
