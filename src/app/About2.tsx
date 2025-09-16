import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-8xl mx-auto px-20 grid lg:grid-cols-2 gap-12 items-center">
         
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Urban <span className="text-amber-500">Mobility</span>
            </h2>
            <p className="text-gray-600 mb-6">
             GB Parking was founded with a vision to revolutionize the parking industry through innovative technology and exceptional service. Since our inception, we have been at the forefront of developing smart parking solutions that address the growing challenges of urban mobility.

              Our comprehensive approach combines IoT technology, mobile applications, and data analytics to create seamless parking experiences for both operators and users. We believe that smart parking is not just about finding a space , its about creating sustainable, efficient, and user-friendly urban environments.
         
            </p>


            <div className="flex gap-3">
              <div
                className="inline-block bg-amber-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
              >
                EST 2009
              </div>
              <div
                className="inline-block bg-gray-200 hover:bg-gray-600 text-black px-6 py-3 rounded-lg font-medium shadow-lg transition"
              >
                ISO 45001 Certified
              </div>

            </div>
          </div>

           <div className="relative">
            <Image width={500} height={500}
              src="/images/meeting.jpeg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
        <div className="py-16">
          <Image width={500} height={500}
              src="/images/visi.png"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
        </div>
      </section>
    </div>
  );
}

export default About;
