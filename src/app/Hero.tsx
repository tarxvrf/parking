"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


function Hero() {
  const images = ["partner3.jpg", "partner1.jpg", "partner2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo GB Parking, saya ingin bertanya tentang layanan."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

   const [isopen,setopen]= useState(false)
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
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(/images/${img})` }}
          />
        ))}
      </div>

      <div className="relative z-20  text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Solusi <span className="text-amber-400">Parkir Modern</span><br /> &amp;
          <br />Aman
        </h1>
        <p className="mt-4 text-center text-xl text-white font-bold">
          GB Parking menyediakan layanan parkir otomatis, pembayaran cashless,
          dan monitoring real-time untuk pengalaman parkir tanpa repot.
        </p>
        <div className="mt-3  flex sm:flex-row gap-4 justify-center text-white">
          <button onClick={lihat} className="bg-error p-2 rounded-xl hover:bg-gray-400">
            Lihat Video
          </button>
          <Link className="bg-green-500 p-2 rounded-xl hover:bg-gray-400" href={href} target="_blank">
            Hubungi Kami
          </Link>
         

        </div>


       <div ref={modalRef} style={{display:"none"}} onClick={hidemodal} className="fixed transformation  duration-200 bg-black/70 inset-0 flex items-center justify-center" >
          
            <iframe width="800" height="500"  src="https://www.youtube.com/embed/ZkuOmMN8I5M?si=8qmn-TiEXtzXkrYm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
          </div>
      </div>
      <div>

      </div>
    </section>
  );
}

export default Hero;
