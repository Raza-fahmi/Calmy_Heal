import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi12.png";

export default function MeditasiMood3() {
  const videoUrl = "https://www.youtube.com/embed/TyPyfk2MlyY";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Meditation Untuk Suasana Hati"
        judul="Meningkatkan Mood"
        keterangan="Meditasi untuk tingkatkan mood / suasana hati"
        durasi="12:22"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
