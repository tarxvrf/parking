"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Review() {
  const [count, setCount] = useState(3); // default desktop
  const review = [
    { img: "/images/alfresh.jpeg", review: "lumayan bagus" },
    { img: "/images/boxis.jpeg", review: "sangat bagus" },
    { img: "/images/m165.jpeg", review: "sangat bagus" },
     { img: "/images/detos.jpg", review: "sangat bagus" },
  ];
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
  return (
    <div>
      {/* Reviews Section */}
      <section id="reviews" className="py-20 sm:py-24 lg:py-28 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apa Kata <span className="text-amber-500">Klien Kami</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Testimoni dari perusahaan dan pengguna yang telah merasakan
              layanan kami.
            </p>
          </div>
          <div className="w-full sm:max-w-6xl mx-auto mt-10 ">
            <Swiper
              spaceBetween={20} // jarak antar slide
              // jumlah slide yg tampil
              // tombol next/prev
              pagination={{ clickable: true }}
              slidesPerView={count}
              modules={[Navigation, Pagination]}
            >
              {review.map((item, index=0) => (
                <SwiperSlide key={index} >
                  <div key={index} className="flex justify-center ">
                    <div className="card transition-transform duration-200 rounded-2xl w-full p-2 border-amber-500 border-2 animate-gradient">
                      <Image
                          className="w-full h-48 object-contain rounded-2xl"
                          src={`${item.img}`}
                          height={500}
                          width={1000}
                          alt={""}
                        ></Image>
                      <div className="card-body">                       
                       <h2 className="card-title">Review</h2> 
                        <p className="font-light">{item.review}</p>
                     

                      </div>
                    </div>
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

export default Review;
