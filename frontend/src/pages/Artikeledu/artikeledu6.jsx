import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarburnout from "../../assets/image/burnout.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarkondisi from "../../assets/image/kondisipsikologis.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu6 = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F9FAF9] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-Montserrat">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-8">
            <Link to="/Calmy-Edu">
              <button
                type="button"
                className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form mb-5"
              >
                <img src={iconleft1} alt="IconLeft" className="mr-2" />
                Kembali
              </button>
            </Link>
            <article className="bg-[#F9FAF9] p-6 rounded-lg shadow-md mb-8 lg:mb-0">
              <h1 className="text-2xl font-bold mb-4 text-center text-[#04364A]">
                Mengenal Academic Burnout Lelah Psikis dalam Belajar
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Salsabila Nanda &#8226; October 6, 2023
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarburnout}
                  alt="gambar burnout"
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-6 text-[#04364A]">
                <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-8">
                  <h2 className="font-bold mb-2 text-xl">Table of content</h2>
                  <ul className="list-disc list-inside font-bold">
                    <li>Mengatasi Stres</li>
                    <li>Mengatasi Stres oleh orang tua</li>
                  </ul>
                </div>
                <div className="lg:w-3/4 text-justify">
                  <h2 className="text-xl font-bold mb-2">
                    Mengenal Academic Burnout
                  </h2>
                  <p className="mb-2">
                    “Pokoknya masalah harus selesai” <br />
                    Istilah burnout pertama kali dikemukakan oleh psikolog
                    Herbert Freudenberger pada tahun 1974. Sindrom ini ia
                    temukan sebagai hasil dari pengamatannya terhadap beberapa
                    pekerja di sektor pelayanan tatap muka. Kebanyakan dari
                    mereka mengalami stres akibat konflik dan tekanan di kantor.
                  </p>
                  <p className="mb-2">
                    Beberapa tahun kemudian, konsep burnout juga diteliti di
                    sekolah. Hasilnya menunjukkan bahwa siswa juga dapat
                    merasakan stres seperti pekerja. Academic burnout atau
                    kelelahan akademik merupakan reaksi emosional, fisik, dan
                    mental yang negatif terhadap studi yang berkepanjangan.
                  </p>
                  <section className="mb-4">
                    <h2 className="font-bold mb-2">
                      1. Aktivitas yang terlalu padat
                    </h2>
                    <p className="mb-2">
                      Bangun pagi sekolah, sorenya bimbel, malamnya ngerjain
                      latihan soal. Akhir pekan dipakai buat les lagi. Energi
                      dan pikiranmu pun lama-lama terkuras. Akhirnya, nggak ada
                      waktu buat santai.
                    </p>
                    <h2 className="font-bold mb-2">
                      2. Persaingan dan tingkat kepercayaan diri
                    </h2>
                    <p className="mb-2">
                      Kadang kita suka insecure alias nggak pede dengan
                      kemampuan sendiri. Misalnya, takut gagal masuk PTN karena
                      banyak saingan. Hal ini membuat kamu terus menerus belajar
                      kapanpun dan dimanapun. Coba deh pakai teknik Feynman biar
                      lebih cepat paham dan menghemat waktu belajar.
                    </p>
                    <h2 className="font-bold mb-2">
                      3. Tugas yang terlalu banyak
                    </h2>
                    <p className="mb-2">
                      Semenjak pandemi, PR semakin menumpuk. Belum lagi jadwal
                      try out yang datang tiap minggu. Kamu harus membagi waktu
                      antara belajar, mengerjakan PR, serta membantu orangtua di
                      rumah. Banyaknya tanggung jawab yang dipikul bisa jadi
                      sumber burnout loh, Brainies.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      Tips Mengatasi Academic Burnout
                    </h2>
                    <p className="mb-2">
                      Bangun pagi sekolah, sorenya bimbel, malamnya ngerjain
                      latihan soal. Akhir pekan dipakai buat les lagi. Energi
                      dan pikiranmu pun lama-lama terkuras. Akhirnya, nggak ada
                      waktu buat santai.
                    </p>
                    <h2 className="font-bold mb-2">1. Buat Batasan</h2>
                    <p className="mb-2">
                      Pertama, kamu harus kasih batasan. Bahasa kerennya
                      boundaries. Pisahkan waktu buat belajar, main, dan
                      mengerjakan tugas rumah. Misalnya, jam 8 sampai 2 siang
                      untuk sekolah. Jam 3 sampai 5 sore bantu Mama beres-beres.
                      Malamnya dipakai untuk istirahat dan nonton series.
                    </p>
                    <h2 className="font-bold mb-2">
                      2. Komunikasikan dengan Guru dan Orangtua
                    </h2>
                    <p className="mb-2">
                      Kedua, komunikasi dengan guru dan orangtua. Yah, memang
                      sulit sih, tapi nggak ada salahnya dicoba. Kamu bisa
                      diskusi dengan teman yang mengalami hal serupa, lalu
                      menyampaikannya lewat kalimat yang sopan ke Bapak dan Ibu
                      Guru.
                    </p>
                    <h2 className="font-bold mb-2">3. Journaling</h2>
                    <p className="mb-2">
                      Ketiga, journaling alias menuangkan seluruh pikiran dan
                      perasaan kamu ke dalam bentuk tulisan. Seringkali kita
                      nggak punya kesempatan untuk curhat karena takut membebani
                      orang lain. Melalui journaling, kamu bisa bercerita
                      tentang hal-hal yang mengganggu pikiran. Hal ini membantu
                      melepaskan stres dan menurunkan tekanan darah tinggi.
                    </p>
                    <h2 className="font-bold mb-2">4. Istirahat</h2>
                    <p className="mb-2">
                      Keempat, take a break! Istirahat selama apapun yang kamu
                      mau. Kalau kamu ngerasa udah capek dan pengen berhenti
                      sebentar, gapapa kok. Cari waktu buat jalan-jalan,
                      belanja, ketemu pacar, kulineran, pokoknya yang bikin kamu
                      semangat dan seneng lagi.
                    </p>
                  </section>
                </div>
              </div>
            </article>
          </div>
          <aside className="lg:w-1/4 flex-shrink-0 mt-8 lg:mt-0">
            <div className="space-y-4 p-4 bg-[#F9FAF9] shadow-md rounded-lg">
              <h3 className="font-bold mb-4 text-[#04364A]">
                Artikel Pilihan Lainnya
              </h3>
              <div className="space-y-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={Gambarkondisi}
                    alt="Kondisi Psikologis"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#04364A] mb-2 font-bold">
                        Pengarang &#8226; 16 Maret 2024
                      </p>
                      <h4 className="font-bold text-[#04364A] flex items-center justify-between">
                        <span>Kondisi Psikologis</span>
                        <img src={iconkanan} alt="Icon" className="w-4 h-4" />
                      </h4>
                      <p className="text-sm text-[#04364A]">
                        Luangkan waktu untuk diri sendiri dengan cara meditasi.
                        10-15 menit dalam sehari...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={Gambarmenjaga}
                    alt="Menjaga Kesehatan Mental"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#04364A] mb-2 font-bold">
                        Pengarang &#8226; 16 Maret 2024
                      </p>
                      <h4 className="font-bold text-[#04364A] flex items-center justify-between">
                        <span>Menjaga Kesehatan Mental</span>
                        <img src={iconkanan} alt="Icon" className="w-4 h-4" />
                      </h4>
                      <p className="text-sm text-[#04364A]">
                        Delusi meyakini sesuatu yang tidak nyata atau tidak
                        sesuai dengan fakta yang sebenarnya...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelEdu6;
