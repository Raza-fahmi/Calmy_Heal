import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi9.png";

export default function MeditasiTidur3() {
  const videoUrl = "https://www.youtube.com/embed/D-17ln2J2wQ";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Tidur"
        judul="Tidur Nyenyak"
        keterangan="Self-Healing melalui meditasi tidur untuk relaksasi mendalam."
        durasi="19:43"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
