import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";

export default function MeditasiFokus3() {
  const videoUrl = "https://www.youtube.com/embed/M4iod1TJ6RY";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="Fokus"
        judul="Konsentrasi Mendalam"
        keterangan="Melatih konsentrasi mendalam dengan meditasi mempertajam daya fokus."
        durasi="11:13"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
