import React from "react";
import Image from "next/image";

function Sistem() {


  return (

    <div>
      {" "}
      {/* About Section */}
      <section id="sistem" className="py-20 sm:py-24 lg:pt-28 bg-amber-600">

        <div className="sm:max-w-8xl bg-amber-600 mx-auto ">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-white">   GB Parking System</span>
          </h2>

          <div className="max-w-8xl  mx-auto px-20 grid lg:grid-cols-2 gap-12 items-center">

            <div className="">
              <Image width={500} height={500}
                src="/images/about.png"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/planknama.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
                <Image width={500} height={500}
                  src="/images/control.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/livereportapp.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
                <Image width={500} height={500}
                  src="/images/lpr.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>

               <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/cashles.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
                <Image width={500} height={500}
                  src="/images/tap.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-40 object-cover"
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
