import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";

export default function MeditasiStres1() {
  const videoUrl = "https://www.youtube.com/embed/rsEI97wZmCc";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Stres"
        judul="Menenangkan Pikiran"
        keterangan="Meditasi untuk Overthinking, Cemas dan Stress."
        durasi="13:43"
        kategori="Cerita Stres"
      />
      <Footer />
    </div>
  );
}
