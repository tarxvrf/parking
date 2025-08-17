"use client";

import React, { useRef } from "react";

import Image from "next/image";

function Service() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const products = [
    {
      name: "Sistem Parkir Otomatis",
      desc: "Solusi modern untuk manajemen parkir dengan sistem tiket dan sensor otomatis.",
      img: "/images/qris1.jpg",
    },
    {
      name: "Aplikasi Mobile",
      desc: "Booking dan pembayaran parkir lebih mudah melalui aplikasi smartphone.",
      img: "/images/flaz.jpg",
    },
    {
      name: "Smart Barrier Gate",
      desc: "Gerbang parkir otomatis dengan RFID & ANPR (kamera plat nomor).",
      img: "/images/gate.jpg",
    },
    {
      name: "Manajemen Lahan Parkir",
      desc: "Layanan pengelolaan parkir profesional untuk bisnis & properti.",
      img: "/images/palang.jpg",
    },
  ];
  return (
    <div>
      {" "}
      {/* Services Section */}
      <section className=" bg-gray-50 py-16 sm:py-20 lg:py-24 px-6 ">
        {/* 🔹 Background animasi cahaya */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Produk{" "}
            <span>
              <br /> &
            </span>{" "}
            <br />
            <span className="text-amber-500">Layanan Kami</span>
          </h2>
          <div className="grid justify-center ">
            <div className="carousel rounded-box border ">
              <div className="carousel-item flex gap-3 transition-transform duration-150">
                {products.map((product, index) => (
                  <div key={index}>
                    <div className="card w-96 sm:h-96 bg-gradient-to-r from-amber-500 via-white to-blue-300 bg-[length:400%_400%] animate-gradient rounded-2xlshadow-lg">
                      <Image
                        height={500}
                        width={500}
                        src={product.img}
                        alt={product.name}
                        className="w-full h-40 object-cover bg-cover py-2 px-2 rounded-2xl"
                      />
                      <div className="card-body">
                        <div className="card-title text-lg font-semibold">
                          {product.name}
                        </div>
                        <p className="text-gray-600 text-sm">{product.desc}</p>
                      </div>
                    
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
