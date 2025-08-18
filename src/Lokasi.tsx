import React from 'react'

function Lokasi() {
  return (
    
      <section id="location" className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Lokasi <span className="text-amber-500">Kami</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Green Park Office View RD 05, Jalan Daan Mogot Raya KM 14,
              Cengkareng, Jakarta Barat.
            </p>
          </div>

          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8245666448775!2d106.7162787749898!3d-6.1542452938328625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f900034810cb%3A0xc4cd56f463190483!2sGerbang%20Berkah%20Solusi%20Indonesia!5e0!3m2!1sen!2sid!4v1755175371755!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
  )
}

export default Lokasi