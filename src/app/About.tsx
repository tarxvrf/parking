import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image width={500} height={500}
              src="/images/parking1.jpg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Tahun Pengalaman</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-amber-500">GB Parking</span>
            </h2>
            <p className="text-gray-600 mb-6">
              GB Parking adalah penyedia solusi parkir modern yang mengedepankan
              teknologi otomatisasi, kemudahan pembayaran, dan keamanan sistem
              untuk pengalaman parkir yang efisien di seluruh Indonesia.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Teknologi Gate Automation canggih
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Pembayaran Cashless aman & cepat
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                     strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Monitoring real-time berbasis cloud
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
        </div>
      </section>
    </div>
  );
}

export default About;
