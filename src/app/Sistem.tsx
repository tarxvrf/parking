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
            <span className="text-white"> GB Parking System</span>
          </h2>

          <div className="max-w-8xl mx-auto grid lg:grid-cols-2 py-10  ">

            <div className="pl-20 ">
              <Image width={1000} height={600}
                src="/images/about.jpg"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-lg w-full  object-cover"
              />
            </div>
            <div className="grid mx-auto">
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/livereport.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72  object-cover"
                />
                <Image width={500} height={500}
                  src="/images/control.png"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
              <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/livereport.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
                <Image width={500} height={500}
                  src="/images/handle.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>

               <div className="max-w-2xl grid grid-cols-2 gap-2 py-2">
                <Image width={500} height={500}
                  src="/images/mxseris.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
                <Image width={500} height={500}
                  src="/images/dispenser.jpg"
                  alt="Tentang GB Parking"
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
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
