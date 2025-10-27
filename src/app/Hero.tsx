"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


function Hero() {
  const images = ["bgfacility.png", "bgfacility.png", "bgfacility.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo GB Parking, saya ingin bertanya tentang layanan."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  
    const modalRef = useRef<HTMLIFrameElement>(null);

  const lihat = () => {
   if (modalRef.current) {
      modalRef.current.style.display = "flex"; // tampil
    }

  }
    const hidemodal = () => {
   if (modalRef.current) {
      modalRef.current.style.display = "none"; 
    }
  };

  useEffect(() => {    

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ganti gambar tiap 5 detik

    return () => clearInterval(interval);
   
  });

  return (
    <section className="h-screen  flex items-center justify-center pt-20 sm:pt-32 ">
      <div>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(/images/${img})` }}
          />
        ))}
      </div>

      <div>

      </div>
    </section>
  );
}

export default Hero;
