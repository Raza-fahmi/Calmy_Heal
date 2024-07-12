import React from "react";
import Navbar from "../../component/Navbar";
import HeroBuku from "../../component/HeroBuku";
import DisplayBuku from "../../component/DisplayBuku";
import MencatatBuku from "../../component/MencatatBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku2.png";

export default function Buku3() {
  return (
    <div>
      <Navbar />
      <HeroBuku angka="3" />
      <DisplayBuku
        buku="Sebuah Seni Untuk Bersikap Bodo Amat"
        gambar={buku}
        ringkasan1="Ebook ini berisi ringkasan mengenai  filosofi 'Bodo Amat' yang merupakan cara pandang yang santai terhadap kehidupan, di mana seseorang belajar untuk tidak terlalu mempermasalahkan hal-hal yang tidak perlu dan membebaskan diri dari tekanan dan ekspektasi yang tidak perlu"
        ringkasan2="Ebook ini diringkas dengan tulisannya begitu mengalir,  memberikan panduan untuk mengadopsi sikap yang lebih santai dan bijaksana terhadap kehidupan untuk mencapai kebebasan dan kebahagiaan yang lebih besar. "
        link="/Sebuah-Seni-Untuk-Bersikap-Bodo-Amat"
      />
      <MencatatBuku link="" />
      <Footer />
    </div>
  );
}
