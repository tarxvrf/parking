"use client";

import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function Service() {

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
      img: "/images/bongate.png",
    },
    {
      name: "Aplikasi Mobile",
      desc: "Booking dan pembayaran parkir lebih mudah melalui aplikasi smartphone.",
      img: "/images/edc.png",
    },
    {
      name: "Smart Barrier Gate",
      desc: "Gerbang parkir otomatis dengan RFID & ANPR (kamera plat nomor).",
      img: "/images/ev.png",
    },
    {
      name: "Manajemen Lahan Parkir",
      desc: "Layanan pengelolaan parkir profesional untuk bisnis & properti.",
      img: "/images/lpr.png",
    },
  ];
  return (
    <div>
      {" "}
      {/* Services Section */}
      <section id="service" className=" bg-gray-50 py-20 sm:py-24 lg:py-28 px-6 ">
        {/* 🔹 Background animasi cahaya */}
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Produk{" "}
            <span>
              <br /> &
            </span>{" "}
            <br />
            <span className="text-amber-500">Layanan Kami</span>
          </h2>
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 via-white to-blue-900 bg-[length:400%_400%] animate-gradient relative z-10 w-full sm:max-w-6xl mx-auto mt-10 ">            
            <Swiper 
              spaceBetween={20} // jarak antar slide
            // jumlah slide yg tampil
              // tombol next/prev
              pagination={{ clickable: true }}
              slidesPerView={count}
              modules={[Navigation, Pagination]}
            >
              {products.map((item, index) => (
                <SwiperSlide key={index} >
                  <div key={index} className="flex justify-center p-8">
                    <Image
                      className=" hover:scale-110 hover:shadow-2xl transition-transform duration-200 rounded-2xl w-full h-48 object-cover shadow-xl"
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
