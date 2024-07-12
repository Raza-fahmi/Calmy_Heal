import React from "react";
import Navbar from "../../component/Navbar";
import HeroBuku from "../../component/HeroBuku";
import DisplayBuku from "../../component/DisplayBuku";
import buku from "../../assets/image/buku3.png";
import MencatatBuku from "../../component/MencatatBuku";
import Footer from "../../component/Footer";

export default function Buku1() {
  return (
    <div>
      <Navbar />
      <HeroBuku angka="1" />
      <DisplayBuku
        buku="Filosofi Teras"
        gambar={buku}
        ringkasan1="Ebook ini berisi ringkasan mengenai bagaimana bisa mencapai ketenangan batin dan kebahagiaan sejati dengan stoisisme. Stoisisme juga mengajarkan untuk fokus pada kebajikan seperti kebijaksanaan, keberanian, keadilan, dan pengendalian diri"
        ringkasan2="Ebook ini diringkas dengan tulisannya begitu mengalir,  refleksi harian, visualisasi negatif, dan membedakan antara apa yang dapat dan tidak dapat kita kendalikan untuk membantu pembaca menerapkan filosofi ini dalam kehidupan mereka untuk mencapai ketenangan dan kebijaksanaan."
        link="/Filosofi-Teras-1"
      />
      <MencatatBuku link="" />
      <Footer />
    </div>
  );
}
