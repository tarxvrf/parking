import React from "react";

function Contact() {
  return (
    <div>
      {" "}
      {/* Contact htmlForm */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Kontak <span className="text-amber-500">Kami</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hubungi kami untuk informasi lebih lanjut atau konsultasi layanan
              parkir.
            </p>
          </div>

          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:max-w-2xl gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block p-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block p-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Informasi Kantor
                </h3>
                <p className="text-gray-700 mb-2">
                  Green Park Office View RD 05,
                  <br />
                  Jalan Daan Mogot Raya KM 14,
                  <br />
                  Cengkareng, Jakarta Barat
                </p>
                <p className="text-gray-700">
                  📞{" "}
                  <a
                    href="tel:+622112345678"
                    className="text-blue-600 hover:underline"
                  >
                    +62 21 1234 5678
                  </a>
                  <br />
                  📧{" "}
                  <a
                    href="mailto:info@gb-parking.co.id"
                    className="text-blue-600 hover:underline"
                  >
                    info@gb-parking.co.id
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
