import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi6.png";

export default function MeditasiStres3() {
  const videoUrl = "https://www.youtube.com/embed/b5oYj1Ypj7I";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Stres"
        judul="Bernafas Relaksasi"
        keterangan="Latihan pernafasan untuk Anxiety, Panic Attack dan Relaksasi."
        durasi="09:39"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
