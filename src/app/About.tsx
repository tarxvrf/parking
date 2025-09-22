import React from "react";
import Image from "next/image";
import { FaComputer } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";

function About() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 lg:pt-28">
        
          
        
        <div className="max-w-8xl mx-auto px-20 grid lg:grid-cols-2 gap-12 items-center">
         
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-amber-500">GB Parking</span>
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              GB Parking , adalah perusahaan swasta nasional yang bergerak dibidang jasa pengelolaan perparkiran, yang resmi hadir dan berbadan hukun sejak tahun 2009 dengan lokasi/project pertama adalah Menara 165 dan telah mendapatkan kepercayaan pengelolaan parkir dan konsultan manajemen parkir dari banyak klien, baik Perusahaan Swasta maupun
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                  <FaComputer />
                </span>
                <span className="text-gray-700">
                  Teknologi Gate Automation canggih
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                  <CiCreditCard1 />
                </span>
                <span className="text-gray-700">
                  Pembayaran Cashless aman & cepat
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                 <MdOutlineManageAccounts />
                </span>
                <span className="text-gray-700">
                 Manless System
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-block bg-amber-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
            >
              Hubungi Kami
            </a>
          </div>

           <div className="relative">
            <Image width={500} height={500}
              src="/images/gbabout.jpg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
           
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
