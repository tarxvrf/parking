import React from 'react'
import { FaCar } from 'react-icons/fa'

function Service() {
  return (
    <div>  {/* Services Section */}
         <section id="services" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Layanan <span className="text-amber-500">Unggulan</span> Kami
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Memberikan solusi parkir modern yang aman, cepat, dan praktis untuk berbagai kebutuhan.
      </p>
    </div>

   
    <div className="grid gap-8 md:grid-cols-3">
  
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transform hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
       
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2" d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4-4 4m4-4v12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Gate Automation</h3>
        <p className="text-gray-600 text-sm">
          Sistem gerbang otomatis dengan teknologi terkini untuk kelancaran akses parkir.
        </p>
      </div>

     
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transform hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2" d="M12 8c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2-.672 2-1.5S13.105 8 12 8zm0 5c-2.21 0-4 .895-4 2v1h8v-1c0-1.105-1.79-2-4-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Cashless Payment</h3>
        <p className="text-gray-600 text-sm">
          Pembayaran parkir tanpa uang tunai, cepat dan aman dengan berbagai metode.
        </p>
      </div>

     
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transform hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2" d="M3 3h18M9 3v18m6-18v18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
        <p className="text-gray-600 text-sm">
          Pantau status parkir secara langsung melalui dashboard yang mudah digunakan.
        </p>
      </div>
    </div>
  </div>
</section>
          
          </div>
  )
}

export default Service