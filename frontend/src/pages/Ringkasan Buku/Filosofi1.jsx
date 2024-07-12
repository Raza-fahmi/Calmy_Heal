import React from "react";
import Navbar from "../../component/Navbar";
import RingkasanBuku from "../../component/RingkasanBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku1.png";
import buku2 from "../../assets/image/buku2.png";

export default function Filosofi1() {
  return (
    <div>
      <Navbar />
      <RingkasanBuku
        judul="Filosofi Teras"
        pengarang="Henry Manampiring"
        bab="1 - 5"
        topik1="Pengenalan Stoisisme"
        isi1="Henry Manampiring memperkenalkan pembaca pada Stoisisme, sebuah filosofi kuno yang didirikan oleh Zeno dari Citium di awal abad ke-3 SM. Filosofi ini berkembang di Yunani dan Roma dengan tokoh-tokoh terkenal seperti Epictetus, Seneca, dan Marcus Aurelius. Zeno mengajarkan di sebuah beranda berpilar yang disebut 'Stoa Poikile,' yang kemudian menjadi asal nama Stoisisme. Epictetus, seorang mantan budak, menjadi filsuf Stoik terkemuka dengan karyanya 'Enchiridion,' sementara Seneca, seorang penulis dan penasihat Kaisar Nero, dikenal melalui 'Letters to Lucilius.' Marcus Aurelius, Kaisar Romawi, menulis 'Meditations,' sebuah koleksi catatan pribadinya tentang kehidupan dan filosofi Stoik."
        topik2="Prinsip-prinsip Dasar Stoisisme"
        isi2="Stoisisme menekankan hidup sesuai dengan alam dan kodrat manusia sebagai makhluk rasional, dengan empat kebajikan utama: kebijaksanaan, keberanian, keadilan, dan pengendalian diri. Filosofi ini praktis dan dapat diterapkan dalam kehidupan sehari-hari. Salah satu prinsip inti Stoisisme adalah dikotomi kendali, yang mengajarkan kita untuk membedakan antara hal-hal yang bisa kita kendalikan, seperti pikiran, tindakan, dan sikap kita, dan hal-hal yang tidak bisa kita kendalikan, seperti peristiwa eksternal dan tindakan orang lain. Dengan fokus pada apa yang bisa kita kendalikan, kita dapat mengurangi stres dan kecemasan serta membangun ketenangan batin melalui penerimaan realitas."
        topik3="Amor Fati : Menerima dan Mencintai Takdir"
        isi3="Selain itu, Stoisisme mengajarkan konsep Amor Fati, yang berarti menerima dan mencintai takdir kita. Dengan menerima segala sesuatu yang terjadi sebagai bagian dari hidup kita, kita dapat membangun ketahanan mental dan mengurangi penderitaan emosional."
        topik4="Memento Mori: Menghargai Setiap Momen"
        isi4="Konsep Memento Mori, mengingat kematian, juga diajarkan untuk membantu kita menghargai setiap momen dalam hidup, memprioritaskan apa yang benar-benar penting, dan membuat keputusan yang bijaksana. Mengingat kematian dapat mengurangi ketakutan terhadapnya dan mendorong kita untuk menjalani hidup yang bermakna dan penuh tujuan."
        topik5="Pengendalian Diri: Keseimbangan Hidup"
        isi5="Bab tentang pengendalian diri menekankan pentingnya kebajikan ini dalam menghindari ekses dan menemukan keseimbangan dalam hidup. Dengan mengendalikan hasrat dan keinginan, kita dapat mencapai hidup yang harmonis dan sehat, serta menghindari perilaku impulsif yang merusak. Praktik harian dalam pengendalian diri, seperti makan dengan bijak, mengelola emosi, dan menjaga pola hidup seimbang, sangat dianjurkan. Refleksi diri membantu kita memahami dan mengendalikan dorongan berlebihan."
        penutup="Dengan pemahaman yang mendalam tentang sejarah, tokoh-tokoh utama, dan konsep-konsep inti Stoisisme dari Bab 1 hingga Bab 5, pembaca diajak untuk mengintegrasikan filosofi ini dalam kehidupan mereka. Hal ini bertujuan untuk mencapai kebahagiaan dan kedamaian batin melalui kebijaksanaan, penerimaan, dan pengendalian diri."
        buku={buku}
        buku2={buku2}
        judulrek1="Berani Tidak Disukai"
        judulrek2="Sebuah Seni Untuk Bersikap Bodo Amat"
        ringkasan="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        ringkasan2="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        showSelamat={false}
        showkonten={false}
        showkonten2={false}
        showkonten3={false}
        showkonten4={false}
        showkonten5={false}
        next1="/Berani-Tidak-Disukai"
        next2="/Sebuah-Seni-Untuk-Bersikap-Bodo-Amat"
        kembali="/Buku-1"
      />
      <Footer />
    </div>
  );
}
