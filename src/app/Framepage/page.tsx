import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Framepage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default Framepage;
