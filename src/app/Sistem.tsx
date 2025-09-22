import React from "react";
import Image from "next/image";

function Sistem() {

  return (

    <div>
      {" "}
      {/* About Section */}
      <section id="sistem" className="py-20 bg-amber-600 sm:py-24 lg:pt-28">

        <div className="sm:max-w-8xl bg-amber-600 mx-auto ">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-white">   GB Parking System</span>
          </h2>

          <div className="max-w-9xl  mx-auto px-20 pt-10 grid lg:grid-cols-2 gap-12 lg:gap-2">

            <div className="max-w-7xl">
              <Image width={1000} height={500}
                src="/images/about.png"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-lg w-full h-full object"
              />
            </div>
            <div className="md:px-20">
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/control.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
                <Image width={500} height={500}
                  src="/images/dispenser.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
              </div>
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/posmanles.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
                <Image width={500} height={500}
                  src="/images/terpalgate.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
              </div>

              <div className="max-w-2xl grid grid-cols-2 h-52 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/dinamic2.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
                <Image width={500} height={500}
                  src="/images/akseslpr.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-52 object-cover"
                />
              </div>

            </div>

          </div>


        </div>
      </section>
    </div>
  );
}

export default Sistem;
