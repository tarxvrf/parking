import React from "react";
import Hero from "./Hero";
import About from "./About";
import Partner from "./Partner";
import Service from "./Service";
import Review from "./Review";
import FloatingWA from "./WA";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";


export default function ParkingCompanyProfile() {

  

  return (
    <div className="bg-gradient-to-r from-white via-white to-amber-300"> 
    <Header/>
    <Hero/> 
    <About/> 
    <Service/>
    <Partner/>
    <Review/>
    <Contact/>
    <FloatingWA/>
    <Footer/>
    </div>
  );
}
