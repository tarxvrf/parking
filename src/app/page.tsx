import { Poppins } from "next/font/google";
import React from "react";
import { FaCar, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { pop,car } from "./font";
import Image from "next/image";

export default function ParkingCompanyProfile() {

  

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-gradient-to-r from-amber-500 to-white  text-white">
        <h1 className="text-2xl font-bold">ParkirPro</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:underline">Tentang</a>
          <a href="#services" className="hover:underline">Layanan</a>
          <a href="#partners" className="hover:underline">Partner</a>
          <a href="#reviews" className="hover:underline">Review</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-amber-500 to-white">
        <div className="grid md:grid-cols-2 gap-10 items-center mx-auto px-6 ">
          <div className="col-span-1">
            <h2 className={`${pop.variable}  text-3xl md:text-5xl font-bold mb-4 text-white`}>
              
              Solusi Parkir Modern dan Aman
            </h2>
            <p className={`${car.className} text-lg text-gray-700 mb-8`}>
              Kelola area parkir Anda dengan sistem digital terbaik.
            </p>
            <a
              href="#contact"
              className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
            >
              Konsultasi Sekarang
            </a>
          </div>
          <div>
            <img src="../images/parking1.jpg" alt="Parkir Digital" className="rounded-xl w-full mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className={`${pop.variable} text-3xl mb-6 font-thin`}>Tentang ParkirPro</h3>
        <p className="text-gray-700 leading-relaxed">
          ParkirPro adalah perusahaan penyedia solusi manajemen parkir terintegrasi
          dengan teknologi terbaru. Kami membantu institusi, gedung, dan bisnis
          mengoptimalkan pengelolaan parkir dengan sistem otomatis dan keamanan tinggi.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl  mb-10 text-amber-500 font-bold text-center">
            Layanan Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaCar className="text-green-600 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Sistem Parkir Otomatis</h4>
              <p className="text-gray-600">
                Solusi parkir dengan sensor, gate, dan sistem tiket digital.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaCar className="text-green-600 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Aplikasi Monitoring</h4>
              <p className="text-gray-600">
                Pantau ketersediaan parkir secara real-time melalui dashboard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaCar className="text-green-600 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Keamanan Area Parkir</h4>
              <p className="text-gray-600">
                Kamera CCTV & sistem pelat nomor untuk keamanan maksimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/** Fitur yang kami punya */}
      <section id="fitur" className="bg-amber-100 py-16">
        <div className="mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-semibold text-center mb-10">Fitur Yang kami Punya</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Image className="rounded-3xl mb-2" width={500} height={500} src={"/images/qris1.jpg"} alt={""}></Image>
              <h3 className={`${pop.variable} font-thin`}>QRIS</h3>
            </div>

            <div className="rounded-2xl ">
              <Image className="rounded-3xl mb-2" width={500} height={500} src={"/images/cashles.jpg"} alt={""}></Image>
             
            </div>
          </div>
        </div>
    

      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-white px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Telah Dipercaya Oleh</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="../images/build1.jpg" alt="Partner 1" className="h-16" />
          <img src="../images/build2.jpg" alt="Partner 2" className="h-16" />
          <img src="../images/build3.jpg" alt="Partner 3" className="h-16" />
          <img src="/partner4.png" alt="Partner 4" className="h-16" />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Apa Kata Klien Kami</h3>
            <div className="space-y-6">
             
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <p className="italic text-gray-600 mb-4">
                  "Teknologi yang digunakan canggih dan mudah diintegrasikan."
                </p>
                <p className="font-bold">- Sari, Developer IT</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <p className="italic text-gray-600 mb-4">
                  "Keamanan parkir meningkat drastis sejak menggunakan layanan ini."
                </p>
                <p className="font-bold">- Andi, Pemilik Mall</p>
              </div>
            </div>
          </div>
          <div>
            <img src="../images/parking1.jpg" alt="Review Pelanggan" className="w-full h-96 rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 px-6 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">Hubungi Kami</h3>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          />
          <textarea
            placeholder="Pesan Anda"
            rows={5}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-700 text-white py-10 px-6 text-center">
        <h4 className="text-xl font-bold mb-4">Kontak</h4>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>0812-3456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> <span>Jl. Parkir Digital No.1, Jakarta</span>
          </div>
          <a
            href="https://wa.me/6281234567890"
            className="flex items-center gap-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> <span>Chat via WhatsApp</span>
          </a>
        </div>
        <p className="text-sm text-green-200">&copy; 2025 ParkirPro. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
