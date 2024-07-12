import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi8.png";

export default function MeditasiTidur2() {
  const videoUrl = "https://www.youtube.com/embed/D-17ln2J2wQ";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Tidur"
        judul="Keseimbangan Batin"
        keterangan="Kembali tenang dan damai dengan meditasi tidur untuk inner balence."
        durasi="20:01"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
