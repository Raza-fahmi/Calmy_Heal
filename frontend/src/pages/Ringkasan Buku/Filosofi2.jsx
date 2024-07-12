import React from "react";
import Navbar from "../../component/Navbar";
import RingkasanBuku from "../../component/RingkasanBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku1.png";
import buku2 from "../../assets/image/buku2.png";

export default function Filosofi2() {
  return (
    <div>
      <Navbar />
      <RingkasanBuku
        judul="Filosofi Teras"
        pengarang="Henry Manampiring"
        bab="6 - END"
        topik1="Keadilan dan Kebijaksanaan"
        isi1="Henry Manampiring melanjutkan penjelasannya tentang Stoisisme dengan membahas kebajikan keadilan dan kebijaksanaan. Keadilan tidak hanya berarti memperlakukan orang lain dengan cara yang benar, tetapi juga mencakup tanggung jawab sosial dan etika dalam berinteraksi dengan orang lain, serta memperlakukan diri sendiri dengan hormat. Kebijaksanaan, di sisi lain, adalah kemampuan untuk membuat keputusan yang baik dan benar berdasarkan pengetahuan dan pengalaman. Stoisisme mengajarkan penggunaan akal sehat dalam menghadapi masalah dan mencari solusi yang adil dan bijaksana."
        topik2="Keberanian"
        isi2="Stoisisme menekankan hidup sesuai dengan alam dan kodrat manusia sebagai makhluk rasional, dengan empat kebajikan utama: kebijaksanaan, keberanian, keadilan, dan pengendalian diri. Filosofi ini praktis dan dapat diterapkan dalam kehidupan sehari-hari. Salah satu prinsip inti Stoisisme adalah dikotomi kendali, yang mengajarkan kita untuk membedakan antara hal-hal yang bisa kita kendalikan, seperti pikiran, tindakan, dan sikap kita, dan hal-hal yang tidak bisa kita kendalikan, seperti peristiwa eksternal dan tindakan orang lain. Dengan fokus pada apa yang bisa kita kendalikan, kita dapat mengurangi stres dan kecemasan serta membangun ketenangan batin melalui penerimaan realitas."
        topik3="Premeditatio Malorum"
        isi3="Konsep Premeditatio Malorum, yang berarti membayangkan hal-hal buruk yang mungkin terjadi, diperkenalkan sebagai teknik untuk mempersiapkan diri secara mental. Membayangkan kemungkinan terburuk membantu mengurangi kejutan emosional dan meningkatkan kesiapan mental. Dengan menghadapi ketakutan secara langsung, kita dapat mengurangi kecemasan dan membangun rasa syukur serta menghargai apa yang ada saat ini dengan memahami bahwa hal-hal bisa menjadi lebih buruk."
        topik4="Epictetus dan Praktik Stoik Harian"
        isi4="Henry menyoroti pentingnya latihan harian yang diajarkan oleh Epictetus untuk menerapkan prinsip-prinsip Stoisisme. Latihan harian ini termasuk refleksi diri, meditasi pagi dan malam, dan jurnal Stoik. Ajaran Epictetus menekankan kesadaran diri dan refleksi terus-menerus untuk meningkatkan karakter. Menggunakan momen-momen kecil dalam kehidupan sehari-hari sebagai kesempatan untuk melatih kebajikan Stoik adalah salah satu cara untuk menjaga perkembangan pribadi yang berkelanjutan."
        topik5="Filosofi Teras dalam Kehidupan Modern"
        isi5="Bab terakhir buku ini membahas penerapan Stoisisme di berbagai aspek kehidupan modern, seperti pekerjaan, hubungan, dan kesehatan mental. Di tempat kerja, prinsip Stoisisme dapat membantu menghadapi tekanan dengan tenang dan fokus pada usaha terbaik. Dalam hubungan, kesabaran, pengertian, dan keadilan sangat penting. Untuk kesehatan mental, prinsip-prinsip Stoisisme dapat digunakan untuk mengatasi stres, kecemasan, dan depresi. Buku ini juga menyajikan kisah-kisah inspiratif dan studi kasus yang menunjukkan bagaimana filosofi ini dapat membantu dalam berbagai situasi kehidupan nyata."
        penutup="Buku 'Filosofi Teras' memberikan landasan kuat dalam prinsip-prinsip Stoisisme dan cara menerapkannya dalam kehidupan sehari-hari. Dengan memahami konsep-konsep seperti keadilan, kebijaksanaan, keberanian, Premeditatio Malorum, dan latihan harian, pembaca diajak untuk mengintegrasikan Stoisisme dalam hidup mereka. Melalui penerapan praktis ini, pembaca dapat mencapai kebahagiaan dan kedamaian batin, serta mengembangkan ketahanan dan kebijaksanaan dalam menghadapi berbagai tantangan hidup. Henry Manampiring memberikan panduan yang relevan dan praktis untuk menjalani hidup yang lebih bermakna dan harmonis dengan filosofi Stoisisme."
        buku={buku}
        buku2={buku2}
        judulrek1="Berani Tidak Disukai"
        judulrek2="Sebuah Seni Untuk Bersikap Bodo Amat"
        ringkasan="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        ringkasan2="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        selamat="RINGKASAN FILOSOFI TERAS - END"
        kembali="/Filosofi-Teras-1"
        next1="/Berani-Tidak-Disukai"
        next2="/Sebuah-Seni-Untuk-Bersikap-Bodo-Amat"
        showSelamat={true}
        showButton={false}
        showkonten={false}
        showkonten2={false}
        showkonten3={false}
        showkonten4={false}
        showkonten5={false}
      />
      <Footer />
    </div>
  );
}
