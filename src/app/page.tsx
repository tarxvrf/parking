import { Poppins } from "next/font/google";
import React from "react";
import { FaCar, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { pop,car } from "./font";
import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import Partner from "./Partner";
import Service from "./Service";
import Review from "./Review";
import FloatingWA from "./WA";
import Contact from "./Contact";


export default function ParkingCompanyProfile() {

  

  return (
    <div > 
    <Hero/> 
    <About/> 
    <Service/>
    <Partner/>
    <Review/>
    <Contact/>
    <FloatingWA/>
    </div>
  );
}
