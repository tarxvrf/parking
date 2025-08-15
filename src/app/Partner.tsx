import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
function Partner() {
  return (
    <div>
      {" "}
      {/* Partners Section */}
      <section id="partners" className="pb-16 pt-16 bg-gray-50">
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

          <div className="">
            <Marquee speed={20} gradient={false} pauseOnHover className="py-4">
              <div className="flex justify-center ">
                <Image
                  width={100}
                  height={100}
                  src="/images/alfresh.jpeg"
                  alt="Client 1"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2 object-contain border bg-white rounded-full shadow-md hover:shadow-2xl  transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/m165.jpeg"
                  alt="Client 2"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2  object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/boxis.jpeg"
                  alt="Client 3"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2  object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/detos.jpg"
                  alt="Client 4"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2  object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/livingalam.png"
                  alt="Client 5"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2  object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/bekasi.webp"
                  alt="Client 6"
                  className="w-16 h-16 sm:w-32 sm:h-32 mx-2  object-contain border bg-white rounded-full shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
