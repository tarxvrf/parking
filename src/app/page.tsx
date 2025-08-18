import React from "react";
import Hero from "./Hero";
import About from "./About";
import Partner from "./Partner";
import Service from "./Service";
import Review from "./Review";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import WA from "./WA";
import Lokasi from "@/Lokasi";


export default function ParkingCompanyProfile() {

  

  return (
    <div className=""> 
    <Header/>
    <Hero/>
    <About/>
    <Service/>
    <Partner/>
    <Review/>
     <Lokasi/>
    <Contact/>   
    <WA/>
    <Footer/>
   
  
    </div>
  );
}
