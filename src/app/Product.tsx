"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";

function Product() {
    type productss ={
        id:number,
        gbr:string,
        jud:string,
        fuls:string
    }
    const [idd,setid]= useState<productss[]>([])

    const product = [
        { id:1,gbr: "planknama.png", jud: " memilik sistem gerbang otomatis yang digunakan untuk mengatur keluar-masuk kendaraan di area parkir",fuls:`Gate Automation adalah sistem gerbang otomatis yang dipakai untuk mengatur keluar-masuk kendaraan di area parkir. Biasanya dipadukan dengan barrier gate (palang parkir), sensor, dan sistem pembayaran/akses.Jadi, gate automation parkiran bukan cuma soal palang otomatis, tapi sebuah ekosistem: hardware (palang, sensor), software (sistem manajemen parkir), dan integrasi pembayaran modern`
            
         },
        { id:2,gbr: "licences.png", jud: "memiliki sistem License Plat Recognition LPR Semi Cashless",fuls:"License Plate Recognition (LPR) adalah teknologi berbasis kamera + software yang bisa mendeteksi dan mengenali nomor plat kendaraan secara otomatis.Biasanya dipakai di:Sistem parkir otomatis, Tol elektronik,Manajemen akses kendaraan perumahan, kantor, bandara" },
        { id:3,gbr: "livereportapp.png", jud: "Memiliki sistem live report yang digunakan untuk memantau kondisi transaksi pemasukan secara realtime",fuls:"GB Transaction Live Report real-time yang menampilkan data kondisi parkir secara langsung, mulai dari jumlah kendaraan yang masuk dan keluar, kapasitas terisi vs kosong, hingga transaksi pendapatan tanpa perlu rekap manual. Data diperoleh dari gate automation, kamera LPR, serta sistem pembayaran, lalu dikirim ke server dan ditampilkan dalam dashboard interaktif yang bisa diakses operator maupun manajemen. Dengan adanya live report, pengelola parkir dapat memantau operasional secara transparan, mengambil keputusan cepat, mencegah manipulasi data, dan mengakses laporan dari mana saja melalui perangkat berbasis web atau aplikasi." },
        { id:4,gbr: "controlroom.png", jud: "Memiliki ruang Control room khusus untuk memantau kendaraan yang masuk dan keluar parkir ",fuls:"Control room monitoring adalah pusat kendali yang dilengkapi layar dan sistem terintegrasi untuk memantau seluruh aktivitas parkir secara real-time. Dari ruangan ini, operator dapat melihat tampilan kamera CCTV, data kendaraan masuk dan keluar melalui gate automation serta LPR (License Plate Recognition), status kapasitas parkir, hingga laporan transaksi keuangan. Sistem biasanya terhubung ke dashboard live report, sehingga setiap pergerakan kendaraan, anomali pembayaran, atau kondisi darurat (misalnya kendaraan blacklist masuk) langsung terdeteksi dan bisa ditindak cepat. Dengan control room, pengelolaan parkir menjadi lebih aman, transparan, dan efisien karena semua data terpusat di satu ruang pemantauan" },
        { id:5,gbr: "cashles.png", jud: "Memiliki metode pembayaran non-tunai yang sudah bekerjasama dengan Bank yang ada di dalam negeri yang digunakan untuk melakukan pembayaran parkir",fuls:"Cashless payment parkiran adalah metode pembayaran non-tunai yang memanfaatkan teknologi digital seperti kartu debit/kredit, e-money (Flazz, e-Toll, Brizzi), QRIS, atau dompet digital (OVO, GoPay, Dana, ShopeePay) untuk mempermudah proses transaksi parkir. Sistem ini terintegrasi dengan gate automation sehingga pengguna cukup melakukan tap kartu, scan QR, atau menggunakan aplikasi e-wallet saat keluar parkir, dan barrier terbuka otomatis setelah pembayaran berhasil. Keuntungan utama cashless payment adalah transaksi lebih cepat, mengurangi antrean di pintu keluar, meningkatkan keamanan karena tidak ada uang tunai yang disimpan, serta memberikan transparansi penuh kepada pengelola karena semua pembayaran tercatat secara digital dan bisa dipantau langsung melalui dashboard laporan" },
        { id:6,gbr: "dinamic.png", jud: "Memiliki sistem Dynamic digital signage yang berupa papan informasi digital yang dapat memberikan informasi jumlah slot parkir",fuls:"Dynamic digital signage adalah papan informasi digital berbasis layar LED/LCD yang dapat menampilkan konten secara dinamis dan real-time sesuai kondisi lapangan. Dalam konteks parkir, signage ini biasanya ditempatkan di pintu masuk, pintu keluar, atau area strategis untuk menampilkan jumlah slot kosong, arah menuju area parkir yang tersedia, tarif parkir, hingga pesan promosi atau informasi darurat. Sistem ini terhubung dengan sensor parkir, LPR, dan server pusat sehingga informasi selalu diperbarui otomatis tanpa intervensi manual. Keunggulannya, dynamic digital signage membuat pengalaman pengguna lebih mudah dan cepat, mengurangi kebingungan mencari tempat parkir, serta memberi nilai tambah bagi pengelola dengan fleksibilitas menampilkan konten iklan atau pengumuman sesuai kebutuhan" }
    ]
     const modalref = useRef<HTMLDivElement>(null)
    const showmodal =(id:number)=>{
        if(modalref.current){        
           modalref.current.style.display="flex"
           const res = product.filter((item)=>item.id ===id)
           setid(res)
           
        }
    }
        const closemodal =()=>{
        if(modalref.current){
          modalref.current.style.display="none"
          
        }
    }
   
   
    return (
        <div>
            {" "}
            {/* product Section */}
            <section id="product" className="py-20 bg-amber-600 sm:py-24 lg:pt-28">

                <div className="max-w-8xl bg-amber-600 ">
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-white">PRODUCT</span>
                    </h2>
                    <div  className="max-w-8xl  mx-auto pt-15 px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-5  items-center">
                        {product.map((items, index) =>
                           ( <div  key={index} onClick={()=>showmodal(items.id)}   className="max-w-xl hover:shadow-4xl h-100 shadow-2xl hover:scale-105 duration-200 transform flex flex-col rounded-2xl bg-white p-2 gap-12">
                                <Image  width={500} height={500}
                                    src={`/images/${items.gbr}`}
                                    alt="Tentang GB Parking"
                                   
                                    className="rounded-2xl w-full h-70 shadow-2xl object-cover "
                                />
                                <div>
                                    <h2 className="text-justify p-2">
                                      <span className="text-amber-600 font-bold text-lg">GB Parking </span>  {items.jud}
                                    </h2>
                                </div>
                            </div>
                        
                        )
                        )}
                    </div>

                    <div onClick={closemodal} style={{display:"none"}} ref={modalref} className="flex fixed inset-0 transformation ease-in-out duration-200 items-center justify-center rounded-xl shadow-lg  bg-black/50">
                          {idd.map((item,index)=>
                        
                            <div key={index}  className="max-w-xl hover:shadow-4xl shadow-2xl flex flex-col rounded-2xl bg-gray-100  p-2 gap-12">
                                <Image  width={500} height={500}
                                    src={`/images/${item.gbr}`}
                                    alt="Tentang GB Parking"
                                   
                                    className="rounded-2xl w-full h-70 shadow-2xl object-cover "
                                />
                                <div>
                                    <h2 className="text-justify p-2">
                                        <span className="font-bold"></span>{item.fuls}
                                    </h2>
                                </div>
                            </div>


                        )}
                    </div>


                            
                </div>
            </section>
        </div>
    );
}

export default Product;
