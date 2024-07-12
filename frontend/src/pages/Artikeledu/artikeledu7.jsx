import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarsehat from "../../assets/image/sehat.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarstres2 from "../../assets/image/stres2.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu7 = () => {
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
                Membangun Kebiasaan Sehat: Cara Mengoptimalkan Fokus
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Verywell Family &#8226; September 2022
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarsehat}
                  alt="gambar sehat"
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-6 text-[#04364A]">
                <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-8">
                  <h2 className="font-bold mb-2 text-xl">Table of content</h2>
                  <ul className="list-disc list-inside font-bold">
                    <li>Kesehatan Mental</li>
                    <li>Mempromosikan Kesehatan Mental</li>
                    <li>Menjaga Kesehatan Mental</li>
                  </ul>
                </div>
                <div className="lg:w-3/4 text-justify">
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      Mengenal Burnout: Apa yang Perlu Kamu Ketahui
                    </h2>
                    <p className="mb-2">
                      Sebelum kita membahas cara mengatasi burnout, penting
                      untuk memahami gejala dan penyebabnya. Burnout bisa muncul
                      sebagai hasil dari tekanan yang berlebihan, perasaan tidak
                      mampu menghadapi tuntutan, dan kurangnya dukungan sosial.
                      Beberapa gejala burnout meliputi kelelahan yang kronis,
                      penurunan motivasi, perasaan putus asa, kesulitan
                      berkonsentrasi, dan perubahan mood.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-4 ">
                      Cara Mengoptimalkan Fokus
                    </h2>
                    <h2 className="font-bold mb-4 ">
                      Orang tua terlalu protektif
                    </h2>
                    <p className="mb-2">
                      <strong>1. Rencanakan Waktu Belajar dengan Bijak:</strong>
                      Buatlah jadwal belajar yang teratur dan realistis.
                      Sisihkan waktu untuk istirahat dan rekreasi agar otak
                      memiliki waktu untuk me-refresh diri.
                    </p>
                    <p className="mb-2">
                      <strong>
                        2. Temukan Lingkungan Belajar yang Nyaman:
                      </strong>
                      Cari tempat yang tenang dan bebas dari gangguan untuk
                      belajar. Pastikan tempat tersebut memiliki pencahayaan
                      yang cukup dan kursi yang nyaman.
                    </p>
                    <p className="mb-2">
                      <strong>3. Gunakan Teknik Manajemen Waktu:</strong>{" "}
                      Pelajari teknik manajemen waktu seperti metode Pomodoro,
                      di mana kamu belajar selama 25 menit dan istirahat selama
                      5 menit. Teknik ini membantu menjaga fokus dan mencegah
                      kelelahan.
                    </p>
                    <p className="mb-2">
                      <strong>4. Praktikkan Mindfulness:</strong> Latihan
                      meditasi atau teknik pernapasan bisa membantu menenangkan
                      pikiran dan meningkatkan konsentrasi
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4 ">
                      Mengurangi Risiko Burnout
                    </h2>
                    <p className="mb-2">
                      <strong> 1. Kenali Batas Kemampuanmu:</strong>
                      Jangan terlalu menuntut diri sendiri. Sadari kapan kamu
                      perlu beristirahat dan jangan ragu untuk meminta bantuan
                      jika merasa terlalu tertekan.
                    </p>
                    <p className="mb-2">
                      <strong>2. Jaga Keseimbangan:</strong>
                      Selain belajar, penting juga untuk menjaga keseimbangan
                      dengan kegiatan yang menyenangkan dan relaksasi seperti
                      olahraga, seni, atau berkumpul dengan teman-teman.
                    </p>
                    <p className="mb-2">
                      <strong>3. Tetap Terhubung: </strong> Jalinlah hubungan
                      yang sehat dengan teman, keluarga, dan orang-orang yang
                      peduli denganmu. Dukungan sosial dapat membantu mengurangi
                      stres dan meningkatkan kesejahteraan mental.
                    </p>
                    <p className="mb-2">
                      <strong>4. Jaga Kesehatan Fisik:</strong> Pastikan kamu
                      mendapatkan tidur yang cukup, makan makanan bergizi, dan
                      melakukan olahraga secara teratur. Kesehatan fisik yang
                      baik dapat membantu menjaga keseimbangan emosi dan mental.
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
                    src={Gambarstres2}
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

export default ArtikelEdu7;
