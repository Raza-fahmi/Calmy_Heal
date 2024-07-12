import React from "react";
import Navbar from "../../component/Navbar";
import HeroMeditation from "../../component/HeroMeditation";
import Footer from "../../component/Footer";
import MeditasiUntuk from "../../component/MeditasiUntuk";
import ilustrasi from "../../assets/image/meditasistres.svg";
import ilustrasi2 from "../../assets/image/meditasifokus.svg";
import ilustrasi3 from "../../assets/image/meditasitidur.svg";
import ilustrasi4 from "../../assets/image/meditasimood.svg";

export default function CalmyMeditation() {
  return (
    <div>
      <Navbar />
      <HeroMeditation />
      <MeditasiUntuk
        gambar={ilustrasi}
        meditasi="Meditsai Untuk Stres"
        penjelasan="Meditasi untuk Mengatasi Stres adalah teknik yang membantu mengelola dan mengurangi stres. Fokus pada pernapasan atau pikiran tenang meredakan kecemasan, menenangkan pikiran dan tubuh, serta meningkatkan kesejahteraan secara keseluruhan."
        reverse={false}
      />
      <MeditasiUntuk
        gambar={ilustrasi2}
        meditasi="Meditasi Untuk Fokus"
        penjelasan="Meditasi terfokus dapat membantu kamu agar bisa menjadi lebih fokus dengan yang sedang kamu lakukan. Dalam meditasi ini terdapat teknik meditasi yang dilakukan dengan  menaruh semua perhatian pada suara, objek, atau sensasi tertentu."
        reverse={true}
      />
      <MeditasiUntuk
        gambar={ilustrasi3}
        meditasi="Meditsai Untuk Tidur"
        penjelasan="Calmy Meditation membantu meraih tidur berkualitas dengan teknik khusus. Fokus pada pernapasan, relaksasi otot, dan pemusatan pikiran menghilangkan hambatan tidur, memberikan pengalaman tidur yang damai dan memulihkan setiap malam."
        reverse={false}
      />
      <MeditasiUntuk
        gambar={ilustrasi4}
        meditasi="Meditasi Untuk Suasana Hati"
        penjelasan="Meditasi untuk suasana hati meningkatkan kesejahteraan emosional dan mental dengan fokus pada pernapasan atau pikiran positif. Tujuannya adalah mencapai ketenangan batin, mengurangi stres, dan menciptakan suasana hati yang lebih tenang, bahagia, dan seimbang."
        reverse={true}
      />
      <Footer />
    </div>
  );
}
