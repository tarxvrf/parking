import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <div>
      {" "}
      {/* Partners Section */}
      <section id="partners" className="pb-32 pt-16 bg-gray-50">
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

          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center ">
              <Image
                width={100}
                height={100}
                src="/images/alfresh.jpeg"
                alt="Client 1"
                className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl  transform hover:-translate-y-2 transition"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/m165.jpeg"
                alt="Client 2"
                className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
              />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/boxis.jpeg"
                alt="Client 3"
                 className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
            />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/detos.jpg"
                alt="Client 4"
                 className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
            />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/livingalam.png"
                alt="Client 5"
                  className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
            />
            </div>

            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/images/bekasi.webp"
                alt="Client 6"
                className="h-32 w-32 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
