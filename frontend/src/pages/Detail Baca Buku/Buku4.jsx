import React from "react";
import Navbar from "../../component/Navbar";
import HeroBuku from "../../component/HeroBuku";
import DisplayBuku from "../../component/DisplayBuku";
import MencatatBuku from "../../component/MencatatBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku4.png";

export default function Buku4() {
  return (
    <div>
      <Navbar />
      <HeroBuku angka="4" />
      <DisplayBuku
        buku="Love Your Self"
        gambar={buku}
        ringkasan1="Ebook ini berisi ringkasan mengenai ungkapan pentingnya menerima diri sendiri dengan segala kelebihan dan kekurangannya"
        ringkasan2="Ebook ini diringkas dengan panduan praktis untuk membangun kecintaan pada diri sendiri dalam rangka mencapai kesejahteraan mental dan emosional yang lebih baik."
        link="/Love-Your-Self"
      />
      <MencatatBuku link="" />
      <Footer />
    </div>
  );
}
