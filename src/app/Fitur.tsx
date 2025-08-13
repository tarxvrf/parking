import React from 'react'
import Image from 'next/image'
import { pop } from './font'
function Fitur() {
  return (
    <div>
      {/** Fitur yang kami punya */}
      <section id="fitur" className="bg-amber-100 py-16">
        <div className="mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-semibold text-center mb-10">Fitur Yang kami Punya</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Image className="rounded-3xl mb-2" width={500} height={500} src={"/images/qris1.jpg"} alt={""}></Image>
              <h3 className={`${pop.variable} font-thin`}>QRIS</h3>
            </div>

            <div className="rounded-2xl ">
              <Image className="rounded-3xl mb-2" width={500} height={500} src={"/images/cashles.jpg"} alt={""}></Image>
             
            </div>
          </div>
        </div>
    

      </section></div>
  )
}

export default Fitur