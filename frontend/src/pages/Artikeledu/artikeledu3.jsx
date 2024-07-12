import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarpenyebabstres from "../../assets/image/penyebabstres.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarstres2 from "../../assets/image/stres2.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu3 = () => {
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
                Penyebab Gangguan Stres Pada Remaja
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Verywell Family &#8226; September 2022
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarpenyebabstres}
                  alt="penyebabstres"
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
                    <h2 className="text-xl font-bold mb-2">
                      Faktor Penyebab Stres Para Remaja Melansir dari Verywell
                      Family, sejumlah faktor pemicu stres pada anak remaja, di
                      antaranya:
                    </h2>
                    <h2 className="text-xl font-bold mb-2">Sosial media</h2>
                    <p className="mb-4">
                      Pemakaian sosial media seringkali menuai pro dan kontra.
                      Di satu sisi, sosial media mempermudah kita untuk
                      memeroleh informasi. Namun, pemakaian yang tidak bijak
                      justru menghabiskan waktu, menurunkan kepercayaan diri,
                      menyebabkan stres hingga kecemasan.
                    </p>
                    <p>
                      Terutama jika remaja mengalami cyberbullying atau berjuang
                      melawan rasa takut akan ketinggalan berita atau yang biasa
                      disebut fenomena fear of missing out (FOMO). Menggulir
                      sosial media secara terus menerus dapat menyebabkan stres
                      ketika anak menemukan berita atau informasi tertentu.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      Terlalu sibuk berkegiatan
                    </h2>
                    <p className="mb-2">
                      Kegiatan seperti olahraga, musik, tari, dan seni
                      seharusnya menghilangkan stres, bukan menambahnya. Namun,
                      kegiatan yang terlalu banyak ini bisa menyita waktunya.
                      Alhasil, anak tidak memiliki waktu luang untuk
                      beristirahat dan berujung stres.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-4 ">
                      Orang tua terlalu protektif
                    </h2>
                    <p className="mb-2">
                      Wajar bila orang tua ingin menghindarkan anak dari efek
                      negatif dunia luar. Orang tua juga cenderung memastikan
                      anaknya tidak kesulitan dan terhindar dari rasa sakit.
                    </p>
                    <p className="mb-2">
                      Namun, secara tidak sadar, perilaku protektif yang
                      dilakukan orang tua justru mengekang anak. Bukannya merasa
                      nyaman, anak justru merasa terganggu dan stres.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-4 ">Situasi pandemi</h2>
                    <p className="mb-2">
                      Tidak dapat disangkal bahwa pandemi COVID-19 telah
                      mengubah kehidupan anak remaja. Akibatnya, mereka
                      mengalami banyak ketidakpastian dalam hidup.
                    </p>
                    <p className="mb-2">
                      Mulai dari bersekolah hingga bersosialisasi dengan
                      teman-temannya terpengaruh. Seluruh ketidakpastian ini
                      kemudian menimbulkan stres dan kecemasan.
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

export default ArtikelEdu3;
