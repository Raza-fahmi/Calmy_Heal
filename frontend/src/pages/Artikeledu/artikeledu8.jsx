import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarfeeling from "../../assets/image/feeling.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarkondisi from "../../assets/image/kondisipsikologis.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu8 = () => {
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
                Sulit Fokus dan Sering Overthinking
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                dr. Fadhli Rizal Makarim &#8226; 02 Oktober 2023
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarfeeling}
                  alt="gambar feeling"
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
                  <p className="mb-2">
                    Overthinking atau “berpikir berlebihan” adalah salah satu
                    ciri masalah kesehatan mental. Penyebab overthinking cukup
                    banyak dan ini bisa membuat seseorang terlalu banyak
                    berpikir, merenungkan, atau menganalisis suatu masalah
                    dengan cara yang berlebihan dan berulang-ulang.
                  </p>
                  <p className="mb-2">
                    Seseorang yang mengalami overthinking seringkali terjebak
                    dalam lingkaran pemikirannya sendiri dan tak bisa ia
                    hentikan. Alhasil, hal ini membuat mereka rentan mengalami
                    kecemasan, stres, depresi, dan sulit membuat keputusan.
                  </p>
                  <p className="mb-2">
                    Mereka juga terlalu fokus pada detail kecil, memikirkan
                    kemungkinan-kemungkinan terburuk, atau merasa terobsesi
                    dengan sebuah masalah tanpa solusi yang jelas. Lantas, apa
                    saja yang bisa memicu timbulnya overthinking? Simak
                    penjelasan berikut ini!
                  </p>

                  <section className="mb-4">
                    <h2 className="text-xl font-bold mb-1">
                      Ketahui Berbagai Penyebab Overthinking
                    </h2>
                    <p>
                      Berikut berbagai hal yang bisa membuat seseorang mengalami
                      overthinking:
                    </p>
                    <h2 className="font-bold mb-2">1. Kecemasan</h2>
                    <p className="mb-2">
                      Salah satu penyebab utama overthinking adalah kecemasan.
                      <br />
                      Seseorang yang mengalami kecemasan sering kali merenungkan
                      kemungkinan buruk, mencemaskan tentang masa depan, atau
                      khawatir berlebihan tentang berbagai aspek kehidupan
                      mereka.
                    </p>
                    <h2 className="font-bold mb-2">2. Tidak percaya diri</h2>
                    <p className="mb-2">
                      Orang yang kurang percaya diri cenderung meragukan diri
                      mereka sendiri dan merenungkan setiap tindakan atau
                      keputusan yang mereka buat. Akibatnya, mereka bisa
                      terjebak dalam siklus pemikiran negatif.
                    </p>
                    <h2 className="font-bold mb-2">3. Perasaan tertekan</h2>
                    <p className="mb-2">
                      Situasi atau peristiwa yang membuat stres atau tertekan,
                      seperti masalah pekerjaan, masalah hubungan, atau tekanan
                      finansial, dapat memicu overthinking.
                      <br /> Akibat hal tersebut, seseorang menjadi overthinking
                      karena mencoba mencari solusi atau mencari cara untuk
                      memecahkan masalahnya.
                    </p>
                    <h2 className="font-bold mb-2">
                      5. Memiliki sifat perfeksionisme
                    </h2>
                    <p className="mb-2">
                      Orang-orang yang memiliki standar yang sangat tinggi untuk
                      diri mereka sendiri dan takut membuat kesalahan sering
                      mengalami overthinking. <br /> Sebab, mereka mencoba untuk
                      memastikan bahwa setiap tindakan atau keputusan mereka
                      adalah yang terbaik. <br /> Perfeksionis juga sering
                      terjebak dalam perilaku analisis berlebihan. Mereka
                      mungkin merenungkan setiap opsi, kemungkinan konsekuensi,
                      atau kemungkinan skenario yang mungkin terjadi. <br />
                      Orang yang memiliki sifat ini juga cenderung memikirkan
                      masalah dari berbagai sudut pandang, yang bisa menjadi
                      sangat melelahkan secara mental.
                    </p>
                    <h2 className="font-bold mb-2">
                      6. Mempunyai pengalaman traumatis
                    </h2>
                    <p className="mb-2">
                      Pengalaman traumatis atau peristiwa masa lalu dapat
                      meninggalkan jejak dalam pemikiran seseorang. <br />
                      Mereka mungkin terus-menerus merenungkan pengalaman
                      tersebut atau khawatir bahwa hal serupa akan terjadi lagi.
                    </p>
                    <h2 className="font-bold mb-2">
                      7. Mengidap masalah kesehatan mental
                    </h2>
                    <p className="mb-2">
                      Beberapa kondisi kesehatan mental, seperti gangguan
                      kecemasan, gangguan obsesif-kompulsif (OCD), atau gangguan
                      stres pascatrauma (PTSD), dapat membuat seseorang rentan
                      mengalami overthinking. <br /> OCD misalnya, gangguan
                      mental ini dapat memicu perilaku kompulsif atau tindakan
                      berulang untuk mengatasi obsesi tersebut. Alhasil,
                      pengidapnya seringkali terjebak dalam pemikiran
                      berulang-ulang yang tidak bisa dihentikan.
                    </p>
                    <h2 className="font-bold mb-2">8. Tekanan sosial</h2>
                    <p className="mb-2">
                      Tekanan dari lingkungan sosial, seperti harapan orang lain
                      atau standar masyarakat, dapat memicu overthinking saat
                      seseorang mencoba memenuhi ekspektasi tersebut. Seseorang
                      mungkin merasa takut akan penilaian negatif dari orang
                      lain jika mereka membuat kesalahan atau melakukan sesuatu
                      yang tidak sesuai dengan norma sosial. <br /> Nah, kondisi
                      ini lah yang membuat seseorang merenungkan tindakan mereka
                      secara berulang-ulang. <br />
                      Tujuannya untuk memastikan bahwa mereka tidak akan salah
                      atau dikecam oleh orang lain.
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

export default ArtikelEdu8;
