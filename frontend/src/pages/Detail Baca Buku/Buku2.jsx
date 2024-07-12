import React from "react";
import Navbar from "../../component/Navbar";
import HeroBuku from "../../component/HeroBuku";
import DisplayBuku from "../../component/DisplayBuku";
import MencatatBuku from "../../component/MencatatBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku1.png";

export default function Buku2() {
  return (
    <div>
      <Navbar />
      <HeroBuku angka="2" />
      <DisplayBuku
        buku="Berani Tidak Disukai"
        gambar={buku}
        ringkasan1="Ebook ini diringkas dengan tulisannya begitu mengalir bahwa untuk mencapai kebahagiaan, kita perlu memiliki keberanian untuk tidak disukai oleh orang lain."
        ringkasan2="Ebook ini berisi ringkasan mengenai ungkapan kita memiliki kekuatan untuk mengubah hidup kita dengan mengubah cara kita berpikir tentang diri kita sendiri dan hubungan kita dengan orang lain"
        link="/Berani-Tidak-Disukai"
      />
      <MencatatBuku link="/" />
      <Footer />
    </div>
  );
}
