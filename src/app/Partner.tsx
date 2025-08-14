import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <div>
      {" "}
      {/* Partners Section */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dipercaya oleh{" "}
              <span className="text-amber-500">Klien Terbaik</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Lebih dari 100+ perusahaan dan institusi mempercayakan solusi
              parkir kepada kami.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center ">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 1"
                className="h-12 object-contain filter grayscale  transform hover:-translate-y-2 transition"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 2"
                className="h-12 object-contain filter grayscale transform hover:-translate-y-2 transition"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 3"
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 4"
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 5"
                className="h-12 object-contain hover:grayscale-0 transition duration-300"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/favicon.ico"
                alt="Client 6"
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
