import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarrasa from "../../assets/image/rasa.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarstres2 from "../../assets/image/stres2.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu5 = () => {
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
                Manajemen Waktu Untuk Mengurangi stres
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Fahmeza &#8226; 27 November 2024
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarrasa}
                  alt="gambar rasa"
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
                  <section className="mb-4">
                    <p className="mb-4">
                      Ini adalah era yang semakin memahami pentingnya kesehatan
                      mental. Dalam sebuah masyarakat yang terus berkembang,
                      pengertian akan kesejahteraan mental menjadi kunci utama
                      untuk memastikan kehidupan yang seimbang dan produktif.
                      Dalam artikel ini, kami akan menjelajahi peran penting
                      kesehatan mental dalam kehidupan sehari-hari. Mari kita
                      mulai perjalanan kita menuju pemahaman yang lebih dalam
                      tentang kesehatan mental dan bagaimana kita dapat
                      merawatnya dengan baik.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      Kesehatan Mental
                    </h2>
                    <p className="mb-2">
                      Gejala gangguan mental pada anak meliputi perubahan
                      perilaku, perubahan mood yang tiba-tiba, kesulitan
                      berkonsentrasi, penurunan berat badan, perilaku menyakiti
                      diri sendiri, masalah kesehatan, dan perasaan intens. Anak
                      dengan kesehatan mental yang baik cenderung merasa
                      bahagia, bangkit dari kekecewaan, memiliki hubungan yang
                      sehat, aktif secara fisik dan nyaman di komunitas mereka.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-4 ">
                      Mempromosikan Kesehatan Mental pada Remaja
                    </h2>
                    <p className="mb-2">
                      Cinta, dukungan, dan hubungan yang erat dengan keluarga
                      serta orang-orang terdekat memiliki dampak positif pada
                      kesehatan mental remaja. Promosi kesehatan mental
                      bertujuan untuk meningkatkan kesejahteraan psikologis dan
                      mengurangi risiko gangguan mental dengan menciptakan
                      lingkungan yang mendukung. Cara praktis untuk
                      mempromosikan kesehatan mental remaja termasuk memberikan
                      perhatian dan dukungan, berbicara terbuka tentang
                      perasaan, serta menjaga keseimbangan antara kesehatan
                      fisik dan mental.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-4 ">
                      Menjaga Kesehatan Mental Remaja
                    </h2>
                    <p className="mb-2">
                      Berbicara secara terbuka dan empati dengan anak remaja
                      tentang kondisi dan kesehatan mentalnya merupakan langkah
                      penting yang harus dilakukan oleh orangtua. Ini
                      menunjukkan perhatian dan peduli dari orangtua serta
                      memberikan kesempatan bagi anak untuk merasa didengar dan
                      didukung. Ide-ide untuk mendorong anak berbicara tentang
                      perasaannya termasuk memberikan pemahaman bahwa orang
                      dewasa pun mengalami masalah, menegaskan bahwa
                      membicarakan masalah bisa membantu menemukan solusi,
                      menawarkan saran untuk berbicara dengan orang lain yang
                      dipercaya, menekankan kerahasiaan saat berbicara dengan
                      profesional kesehatan, dan menegaskan bahwa anak tidak
                      sendirian dalam perjuangan mereka. Meskipun anak mungkin
                      menolak bantuan penting bagi orangtua untuk tetap
                      memperlihatkan kepedulian dan mendorong anak untuk mencari
                      bantuan profesional ketika diperlukan.
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

export default ArtikelEdu5;
