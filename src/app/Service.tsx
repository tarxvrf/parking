"use client";

import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function Service() {

 

  return (
   <div>
        {" "}
        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 lg:pt-28">
  
  
  
          <div className="max-w-8xl mx-auto px-20 grid gap-12 items-center">
  
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Layanan Tenaga <span className="text-amber-500">Pengamanan</span>
              </h2>
              <div className="grid grid-cols-[auto_1fr] mx-auto p-10 gap-10 max-w-7xl items-center">
                <div className="relative">
                  <Image width={500} height={500}
                    src="/images/logogbabout.png"
                    alt="Tentang GB Parking"
                    className="rounded-2xl shadow-2xl object-cover h-64 w-64 right-0"
                  />
                </div>
                <div className="text-gray-600 mb-6 text-2xl text-justify ">
                  <span className="font-bold">GB Facility</span> adalah perusahaan Alih Daya telah beroperasi sejak tahun 2005 dibawah naungan PT Gerbang Berkah Solusi Indonesia hingga saat ini telah mengelola ribuan karyawan di seluruh kota  besar di Indonesia
                  GB Faclity memberikan layanan terpadu dan terintegrasi kepada perusahaan yang memerlukan layanan pengelolaan gedung/kantor dan berbagai macam bentuk layanan lainnya.
                </div>
              </div>
  
              <div className="grid lg:grid-cols-2 items-center lg:gap-10">
                <div className="text-gray-600 mb-6 text-justify">
                  <span className="font-bold">GB Facility</span> memberikan Multi-Layanan menjadikan layanan Fasilitas Terpadu dalam berbagai layanan bisnis dan industry, yang melupitu antara lain :
                  <ul>
                    <li>
                      1.	Layanan Penyediaan Tenaga Pengamanan
                    </li>
                    <li>
                      2.	Layanan Penyediaan Tenaga Kerja Pabrik, Operator, dll
                    </li>
                    <li>
                      3.	Layanan Penyediaan Tenaga Kebersihan (cleaning service) dan Office Boy
                    </li>
                  </ul>
  
                  <p className="text-gray-600 mb-6 text-justify">
                    Kehadiran GB Facility untuk memberikan nilai tambah, memelihara dan mengoptimalkan tempat milik mitra/pelanggan dan berkontribusi pada harapan mitra/pengguna jasa kami, agar perusahaan mitra/pengguna jasama kami dapat lebih focus dalam pengembangan bisnisnya.
                  </p>
  
                  <div className="text-gray-600 mb-6 text-justify">
                    <h1 className="font-bold">PENGELOLAAN TENAGA KERJA OUTSOURCING</h1>
  
                    Tenaga Kerja Outsourcing adalah tenaga kerja dari pihak ketiga untuk menyelesaikan suatu pekerjaan pada perusahaan pengguna jasa.
                    Perusahaan outsourcing merupakan perusahaan yang menyediakan jasa dan menyalurkan tenaga kerja dengan keahlian tertentu ke perusahaan yang membutuhkan.
                  </div>
                  <div className="text-gray-600 mb-6 text-justify">
                    <h1 className="font-bold">Dasar Hukum Utama</h1>
                    <span className="font-bold">Undang-Undang No. 13 Th. 2003 tentang Ketenagakerjaan (UU Ketenagakerjaan) :</span>
                    Sebelum UU Cipta Kerja, outsourcing diatur dalam Pasal 64 dan 66, yang mengizinkan penyerahan pekerjaan melalui perjanjian pemborongan atau penyediaan jasa pekerja/buruh
                  </div>
  
                  <div className="text-gray-600 mb-6 text-justify">
                    <span className="font-bold">Undang-Undang No. 6 Th. 2023 tentang Penetapan Perpu Cipta Kerja Menjadi Undang-Undang :</span>
                    UU ini mengubah dan memperbarui ketentuan mengenai outsourcing dalam UU Ketenagakerjaan, mengizinkan penyerahan sebagian pekerjaan kepada pihak lain dengan perjanjian tertulis.
                  </div>
  
                  <div className="text-gray-600 mb-6 text-justify">
                    <span>Peraturan Pemerintah Nomor 35 Tahun 2021</span> tentang Perjanjian Kerja Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan Pemutusan Hubungan Kerja :
                    PP ini merupakan aturan turunan dari UU Cipta Kerja yang lebih rinci mengatur tentang alih daya, termasuk ketentuan mengenai izin usaha dan perlindungan pekerja.
                  </div>
                </div>
                <div>
                  <Image src={"/images/aboutgbrpekerja.png"} className="relative w-full bg-cover" width={500} height={500} alt={""} >
                  </Image>
                </div>
  
              </div>
  
            </div>
  
          </div>
        </section>
      </div>
  );
}

export default Service;
