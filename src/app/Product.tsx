"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

function Product() {
    type productss = {
        id: number,
        gbr: string,
        jud: string,
        fuls: string
    }
    const [idd, setid] = useState<productss[]>([])

    const product = [

        { id: 1, gbr: "keamanan.png", jud: "Tim kami yang berdedikasi tinggi memiliki keahlian profesional dipadukan dengan rasa tulus dalam sikap pelayanan.Kami memahami pentingnya rasa aman, dan kami akan senantiasa memastikan setiap mitra kami menerima perhatian khusus dan dukungan yang kuat", fuls: "License Plate Recognition (LPR) adalah teknologi berbasis kamera + software yang bisa mendeteksi dan mengenali nomor plat kendaraan secara otomatis.Biasanya dipakai di:Sistem parkir otomatis, Tol elektronik,Manajemen akses kendaraan perumahan, kantor, bandara" },
        { id: 2, gbr: "kebersihan.png", jud: "Kebersihan tempat kerja harus selalu terjaga dan merupakan salah satu aspek yang harus diperhatikan oleh perusahaan.Kebersihan kantor dapat menciptakan kenyamanan kerja dan akan berpengaruh pada produktifikas kerja ", fuls: "GB Transaction Live Report real-time yang menampilkan data kondisi parkir secara langsung, mulai dari jumlah kendaraan yang masuk dan keluar, kapasitas terisi vs kosong, hingga transaksi pendapatan tanpa perlu rekap manual. Data diperoleh dari gate automation, kamera LPR, serta sistem pembayaran, lalu dikirim ke server dan ditampilkan dalam dashboard interaktif yang bisa diakses operator maupun manajemen. Dengan adanya live report, pengelola parkir dapat memantau operasional secara transparan, mengambil keputusan cepat, mencegah manipulasi data, dan mengakses laporan dari mana saja melalui perangkat berbasis web atau aplikasi." },
        { id: 3, gbr: "tenagakerja.png", jud: "Tim kami menyediakan tenaga kerja yang handal dan terlatih, dapat membantu Mitra lebih focus pada bisnis utamanyaa dan memungkinkan akan menjadi  lebih produktif dan mengalami  peningkatan ", fuls: "Control room monitoring adalah pusat kendali yang dilengkapi layar dan sistem terintegrasi untuk memantau seluruh aktivitas parkir secara real-time. Dari ruangan ini, operator dapat melihat tampilan kamera CCTV, data kendaraan masuk dan keluar melalui gate automation serta LPR (License Plate Recognition), status kapasitas parkir, hingga laporan transaksi keuangan. Sistem biasanya terhubung ke dashboard live report, sehingga setiap pergerakan kendaraan, anomali pembayaran, atau kondisi darurat (misalnya kendaraan blacklist masuk) langsung terdeteksi dan bisa ditindak cepat. Dengan control room, pengelolaan parkir menjadi lebih aman, transparan, dan efisien karena semua data terpusat di satu ruang pemantauan" },
    ]
    const modalref = useRef<HTMLDivElement>(null)
    const showmodal = (id: number) => {
        if (modalref.current) {
            modalref.current.style.display = "flex"
            const res = product.filter((item) => item.id === id)
            setid(res)

        }
    }
    const closemodal = () => {
        if (modalref.current) {
            modalref.current.style.display = "none"

        }
    }


    return (

        <section id="product" className=" grid px-20 mx-auto">

            <div className="max-w-8xl">


                <div className="max-w-8xl  mx-auto pt-15 px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-5  items-center">
                    {product.map((items, index) =>
                    (<div key={index} onClick={() => showmodal(items.id)} className="border max-w-xl hover:shadow-4xl shadow-2xl hover:scale-105 duration-200 transform flex flex-col rounded-2xl bg-white p-2 gap-12">
                        <Image width={500} height={500}
                            src={`/images/${items.gbr}`}
                            alt="Tentang GB Parking"

                            className="rounded-2xl w-full h-64 shadow-2xl object-cover  "
                        />
                        <div className="text-justify p-2">
                            <h2 >
                                {items.jud}

                            </h2>
                            <div className="btn mt-2 bg-amber-600 text-white">
                                readmore
                            </div>

                        </div>
                    </div>

                    )
                    )}
                    <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                        <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                            <FaYoutube className="text-5xl" />
                        </div>
                    </div>
                     <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                        <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                            <FaYoutube className="text-5xl" />
                        </div>
                    </div>
                     <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                        <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                            <FaYoutube className="text-5xl" />
                        </div>
                    </div>


                    {/*
                        <div >
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    */}
                </div>

                <div onClick={closemodal} style={{ display: "none" }} ref={modalref} className="flex fixed inset-0 transformation ease-in-out duration-200 items-center justify-center rounded-xl shadow-lg  bg-black/50">
                    {idd.map((item, index) =>

                        <div key={index} className="max-w-xl hover:shadow-4xl shadow-2xl flex flex-col rounded-2xl bg-gray-100  p-2 gap-12">
                            <Image width={500} height={500}
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

    );
}

export default Product;
