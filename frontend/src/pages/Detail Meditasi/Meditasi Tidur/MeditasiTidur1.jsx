import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi7.png";

export default function MeditasiTidur1() {
  const videoUrl = "https://www.youtube.com/embed/xqYzcbV-MZo";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Tidur"
        judul="Pengantar Tidur"
        keterangan="Meditasi Pengantar Tidur"
        durasi="35:39"
        kategori="Cerita Tidur"
      />
      <Footer />
    </div>
  );
}
