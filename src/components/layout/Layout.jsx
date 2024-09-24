import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { BsWhatsapp } from "react-icons/bs";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <a
        target="_blank"
        href="https://wa.me/"
        className="fixed bg-[#25d366] hover:bg-[rgb(75,212,125)] hover:scale-[1.09] duration-150 text-white font-bold sm:p-4 p-2 rounded-full bottom-5 right-5 z-10"
      >
        <div className="text-3xl">
          <BsWhatsapp />
        </div>
      </a> */}
      <Footer />
    </>
  );
}

export default Layout;
