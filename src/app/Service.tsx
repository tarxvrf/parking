"use client";

import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

          <div className="flex justify-center">
            <Carousel className="max-w-sm lg:max-w-xl ">
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-gradient-to-r from-amber-500 via-white to-blue-300 bg-[length:400%_400%] animate-gradient rounded-2xlshadow-lg">
                      <Image
                        height={500}
                        width={500}
                        src={product.img}
                        alt={product.name}
                        className="w-full h-40 object-cover bg-center px-2 rounded-2xl"
                      />
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">{product.desc}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
