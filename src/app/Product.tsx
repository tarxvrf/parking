"use client"
import React, { useRef } from "react";
import Image from "next/image";

function Product() {
    const product = [
        { gbr: "bongate.png", jud: "Akses Parkir Masuk & Keluar TITO (Tap In Tap Out) System" },
        { gbr: "lpr.png", jud: "License Plat Recognition LPR Semi Cashless" },
        { gbr: "livereportapp.png", jud: "tentang live report" }
    ]
     const modalref = useRef<HTMLDivElement>(null)
    const showmodal =()=>{
        if(modalref.current){


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
                    <div ref={modalref} className="max-w-8xl  mx-auto pt-15 px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-5 items-center">
                        {product.map((items, index) =>
                            <div key={index} onClick={showmodal}  className="max-w-xl hover:scale-105 duration-200 transform flex flex-col rounded-2xl bg-white p-2 gap-12">
                                <Image width={500} height={500}
                                    src={`/images/${items.gbr}`}
                                    alt="Tentang GB Parking"

                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                                <div>
                                    <h2>
                                        {items.jud}
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
