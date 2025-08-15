import Image from 'next/image'
import React from 'react'

function Review() {
  return (
    <div>
      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
   
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Apa Kata <span className="text-amber-500">Klien Kami</span>
      </h2>
      <p className="mt-3 text-gray-600">
        Testimoni dari perusahaan dan pengguna yang telah merasakan layanan kami.
      </p>
    </div>


    <div className="grid gap-8 md:grid-cols-3">
   
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
        <Image width={100} height={100} src="/images/user1.jpg" alt="User 1" 
             className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"/>
        <p className="text-gray-600 italic">
          Layanan parkir sangat memudahkan, gate otomatis berjalan lancar dan pembayaran cashless sangat praktis.
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">Budi Santoso</h4>
        <span className="text-sm text-gray-500">Manager Operasional</span>
      </div>

  
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
      <Image width={100} height={100} src="/images/user2.jpg" alt="User 2" 
             className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"/>
        <p className="text-gray-600 italic">
          Sangat profesional, respon cepat, dan sistem monitoring real-time sangat membantu pekerjaan kami.
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">Siti Rahma</h4>
        <span className="text-sm text-gray-500">Direktur Mall Central</span>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
        <Image width={100} height={100}src="/images/user3.jpg" alt="User 3" 
             className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"/>
        <p className="text-gray-600 italic">
          GB Parking benar-benar membuat pengalaman parkir jauh lebih nyaman dan aman.
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">Andi Prasetyo</h4>
        <span className="text-sm text-gray-500">Owner Hotel Grand</span>
      </div>
    </div>
  </div>
</section>

<section id="location" className="py-16 bg-white">
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
      <iframe className='w-full h-full border'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8245666448775!2d106.7162787749898!3d-6.1542452938328625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f900034810cb%3A0xc4cd56f463190483!2sGerbang%20Berkah%20Solusi%20Indonesia!5e0!3m2!1sen!2sid!4v1755175371755!5m2!1sen!2sid"
         allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>

     
      </div>
  )
}

export default Review