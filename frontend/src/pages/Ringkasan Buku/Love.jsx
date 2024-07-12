import React from "react";
import Navbar from "../../component/Navbar";
import RingkasanBuku from "../../component/RingkasanBuku";
import Footer from "../../component/Footer";
import buku from "../../assets/image/buku1.png";
import buku2 from "../../assets/image/buku2.png";

export default function Love() {
  return (
    <div>
      <Navbar />
      <RingkasanBuku
        judul="Love Your Self"
        pengarang="Dr. Laila Maharani. M.Pd"
        bab="1 - 6"
        topik1="Prolog"
        isi1="Di tengah hiruk-pikuk kehidupan modern yang sering kali memaksa kita untuk mengejar standar yang tidak realistis, terkadang kita lupa satu hal yang paling penting: mencintai diri sendiri. Buku ini bukan hanya tentang pesan yang umum dan sering kita dengar tentang self-love, tetapi tentang perjalanan mendalam untuk menemukan arti sejati dari self-acceptance. Mari kita menjelajahi bersama bagaimana pengalaman hidup, tantangan, dan momen-momen yang membuat kita merasa tidak aman dapat menjadi jembatan menuju pemahaman yang lebih dalam tentang nilai diri kita. Dengan menggali inti dari apa yang membuat kita unik dan berharga, buku ini mengajak Anda untuk mengubah pandangan terhadap diri sendiri, memperkuat kepercayaan diri, dan menemukan kebahagiaan yang muncul dari dalam."
        topik2="Self-Acceptance"
        isi2="Buku ini mengajarkan bahwa self-acceptance bukan hanya tentang menerima bagian-bagian positif dari diri sendiri, tetapi juga menghadapi dan mengakui bagian-bagian yang mungkin dianggap kurang sempurna atau tidak diinginkan. Ini melibatkan proses yang kompleks di mana pembaca belajar untuk merangkul keunikan dan kompleksitas diri mereka tanpa rasa malu atau penolakan."
        topik3="Self Care"
        isi3="Konsep self-care dalam buku ini tidak hanya mencakup merawat tubuh secara fisik melalui pola makan sehat dan olahraga, tetapi juga memperluas cakupannya ke aspek-emosi dan mental. Buku ini menekankan pentingnya mengenal dan memenuhi kebutuhan emosional dan psikologis, seperti memberikan diri waktu untuk relaksasi, mengelola stres, dan mengembangkan kegiatan yang meningkatkan kesejahteraan secara keseluruhan."
        topik4="Self-Esteem"
        isi4="Buku ini mengeksplorasi kompleksitas dalam membangun self-esteem yang kokoh. Ini tidak hanya tentang meningkatkan persepsi positif terhadap diri sendiri, tetapi juga mengatasi rasa tidak percaya diri yang dalam. Dengan memahami asal-usul dan pola pikir di balik rasa kurang percaya diri, pembaca diajak untuk mengembangkan strategi konkret untuk mengatasi hal ini, seperti melalui pengakuan pencapaian dan kemampuan pribadi."
        topik5="Relationship with Others"
        isi5="Topik ini mempertimbangkan bagaimana hubungan interpersonal memengaruhi persepsi diri. Buku ini tidak hanya menyoroti pentingnya membangun hubungan yang sehat dan mendukung dengan orang lain, tetapi juga menjelaskan bagaimana dinamika hubungan ini dapat memperkuat atau merusak rasa harga diri seseorang. Ini melibatkan keterlibatan dalam komunikasi yang efektif, pengelolaan konflik yang sehat, dan mengenali batasan pribadi untuk menjaga keseimbangan dalam interaksi sosial."
        topik6="Practical Exercises and Reflections"
        isi6="Bagian ini menawarkan latihan-latihan yang dirancang untuk merangsang refleksi mendalam dan aksi nyata. Melalui latihan seperti jurnal harian, meditasi, atau dialog internal positif, pembaca didorong untuk mengintegrasikan konsep-konsep yang dipelajari dalam kehidupan sehari-hari mereka, mengubah pemahaman menjadi tindakan yang konkret."
        topik7="Inspiration and Motivation"
        isi7="Buku ini menggunakan kisah-kisah inspiratif dan kutipan-kutipan motivasional untuk memberikan dorongan yang dibutuhkan pembaca dalam perjalanan mereka menuju self-love. Dengan menunjukkan contoh-contoh positif dan perjalanan pribadi orang-orang lain, pembaca diharapkan dapat menemukan inspirasi untuk mengatasi rintangan dan mengembangkan hubungan yang lebih positif dengan diri mereka sendiri."
        penutup="Dengan demikian, buku 'Love Yourself' tidak hanya menyediakan panduan praktis untuk meningkatkan kesejahteraan pribadi, tetapi juga mengajak pembaca untuk melakukan perjalanan pribadi yang mendalam untuk menemukan dan menghargai nilai diri mereka."
        buku={buku}
        buku2={buku2}
        judulrek1="Berani Tidak Disukai"
        judulrek2="Sebuah Seni Untuk Bersikap Bodo Amat"
        ringkasan="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        ringkasan2="Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada kebaikan dan ..."
        selamat="RINGKASAN LOVE YOUR SELF - END"
        next1="/Berani-Tidak-Disukai"
        next2="/Sebuah-Seni-Untuk-Bersikap-Bodo-Amat"
        kembali="/Buku-4"
        showSelamat={true}
        showButton={false}
        showkonten={true}
        showkonten2={true}
        showkonten3={false}
        showkonten4={false}
        showkonten5={false}
      />
      <Footer />
    </div>
  );
}
