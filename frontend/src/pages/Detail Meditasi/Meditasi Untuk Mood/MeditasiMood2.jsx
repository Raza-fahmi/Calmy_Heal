import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi11.png";

export default function MeditasiMood2() {
  const videoUrl = "https://www.youtube.com/embed/ijbaGee-tpk";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Suasana Hati"
        judul="Good Mood"
        keterangan="Penyemangat suasana hati untuk mood lebih baik."
        durasi="13:26"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
