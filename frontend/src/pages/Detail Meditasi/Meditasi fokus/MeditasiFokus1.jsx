import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";

export default function MeditasiFokus1() {
  const videoUrl =
    "https://www.youtube.com/embed/mZA-8PdMHPY?si=F8dba8KSFsujCJ4f";
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        videoUrl={videoUrl}
        meditasi="fokus"
        judul="Tingkatkan Fokus"
        keterangan="Meditasi tingkatkan fokus menggunakan kekuatan konsentrasi untuk meningkatkan ketenangan pikiran dan kejernihan mental Anda."
        durasi="12:17"
        kategori="Cerita Fokus"
      />
      <Footer />
    </div>
  );
}
