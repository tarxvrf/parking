import React from "react";
import Image from "next/image";

function Product() {


    return (

        <div>
            {" "}
            {/* product Section */}
            <section id="product" className="py-20 bg-amber-600 sm:py-24 lg:pt-28">

                <div className="max-w-8xl bg-amber-600">
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-white">   PRODUCT</span>
                    </h2>
                   
<<<<<<< HEAD
                        <div className="max-w-8xl  mx-auto px-20 grid lg:grid-cols-3 gap-12 pb-5 items-center">

                            <div className="max-w-4xl rounded-2xl bg-white p-2 gap-12">
=======
                        <div className="max-w-8xl  mx-auto px-20 grid lg:grid-cols-2  items-center">

                            <div className="grid sm:grid-cols-2 rounded-2xl bg-white p-2 gap-12">
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486
                                <Image width={500} height={500}
                                    src="/images/about.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-32 h-32 object-cover object-center"
                                />
                                <div>
                                    <h2>Akses Parkir Masuk & Keluar
                                        -	TIPPO (Tap In Tap Out) System
                                    </h2>
                                </div>
                            </div>
<<<<<<< HEAD
                            <div className="max-w-4xl rounded-2xl  bg-white p-2 gap-12">
=======
                            <div className="grid sm:grid-cols-2 rounded-2xl  bg-white p-2 gap-12">
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486
                                <Image width={500} height={500}
                                    src="/images/lpr.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-32 h-32 object-cover"
                                />
                                <div>
                                    <h2>License Plat Recognition
                                        LPR

                                        -	Semi Cashless

                                    </h2>
                                </div>
                            </div>


                        </div>
                        <div className="max-w-8xl  mx-auto px-20 grid lg:grid-cols-2 items-center">

<<<<<<< HEAD
                            <div className="max-w-4xl rounded-2xl bg-white p-2 gap-12">
=======
                            <div className="max-w-4xl grid sm:grid-cols-2 rounded-2xl bg-white p-2 gap-12">
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486
                                <Image width={500} height={500}
                                    src="/images/livereportapp.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>Live Report
                                    </h2>
                                </div>
                            </div>
<<<<<<< HEAD
                           
=======
                            <div className="max-w-4xl grid sm:grid-cols-2 rounded-2xl  bg-white p-2 gap-12">
                                <Image width={500} height={500}
                                    src="/images/bongate2.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>Barrier Gate (Gate Automatic)
                                        terintegrasi

                                        -	Semi Cashless

                                    </h2>
                                </div>
                            </div>
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486


                        </div>
                        <div className="max-w-8xl  mx-auto px-20 grid lg:grid-cols-2 gap-12 items-center">

<<<<<<< HEAD
                            <div className="max-w-4xl rounded-2xl bg-white p-2 gap-12">
=======
                            <div className="max-w-4xl grid sm:grid-cols-2 rounded-2xl bg-white p-2 gap-12">
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486
                                <Image width={500} height={500}
                                    src="/images/control.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>Control Room
                                    </h2>
                                </div>
                            </div>
<<<<<<< HEAD
                            <div className="max-w-4xl rounded-2xl  bg-white p-2 gap-12">
=======
                            <div className="max-w-4xl grid sm:grid-cols-2 rounded-2xl  bg-white p-2 gap-12">
>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486
                                <Image width={500} height={500}
                                    src="/images/edc.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>Handheld / Mobile Cashier
                                        (Android system)

                                    </h2>
                                </div>
                            </div>


                        </div>
                        <div className="max-w-8xl  mx-auto px-20 grid sm:grid-cols-2 gap-12 items-center">

                            <div className="max-w-4xl rounded-2xl bg-white p-2 gap-12">
                                <Image width={500} height={500}
                                    src="/images/ev.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>EV Charging
                                        -	Menyediakan parangkat untuk pasaokan energi kendaraan lisrik

                                    </h2>
                                </div>
                            </div>
<<<<<<< HEAD
                         
=======
                            <div className="max-w-4xl grid sm:grid-cols-2 rounded-2xl  bg-white p-2 gap-12">
                                <Image width={500} height={500}
                                    src="/images/bongate.png"
                                    alt="Tentang GB Parking"
                                    className="rounded-2xl shadow-lg w-full object-cover"
                                />
                                <div>
                                    <h2>Akses Parkir Masuk & Keluar
                                        -	TIPPO (Tap In Tap Out) System
                                    </h2>
                                </div>
                            </div>

>>>>>>> 08ff66ee0b4311948ce11223ff9ba9122e651486

                        </div>
                  

                </div>
            </section>
        </div>
    );
}

export default Product;
