"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function Service() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(3); // default desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setCount(1); // mobile
      } else {
        setCount(3); // selain mobile
      }
    };

    handleResize(); // cek saat pertama kali render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <section id="service" className=" bg-gray-50 py-20 sm:py-24 lg:py-28 px-6 ">
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
          <div className="w-full sm:max-w-6xl mx-auto mt-10 ">            
            <Swiper 
              spaceBetween={20} // jarak antar slide
            // jumlah slide yg tampil
              // tombol next/prev
              pagination={{ clickable: true }}
              slidesPerView={count}
              modules={[Navigation, Pagination]}
            >
              {products.map((item, index) => (
                <SwiperSlide key={index}>
                  <div key={index} className="flex justify-center">
                    <Image
                      className="rounded-2xl w-full h-48 object-cover"
                      src={`${item.img}`}
                      height={500}
                      width={1000}
                      alt={""}
                    ></Image>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
