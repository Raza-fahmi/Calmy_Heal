import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarmengatasi from "../../assets/image/mengatasi.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarkondisi from "../../assets/image/kondisipsikologis.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu4 = () => {
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
                Cara Mengatasi Permasalahan Stres dengan Coping Stres
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                bnn aouthor &#8226; 12 Mar 2021
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarmengatasi}
                  alt="gambar mengatasi"
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
                    Sering kali kita dihadapkan pada masalah yang terjadi dalam
                    kehidupan. Permasalahan tersebut menjadi suatu tekanan bagi
                    seseorang dan dapat menimbulkan stres.. Menurut Folkman
                    (Mashudi, 2012) istilah stres mempunyai pengertian gangguan
                    pada tubuh dan pikiran yang disebabkan oleh perubahan
                    lingkungan dan tuntutan kehidupan. Sehingga kita perlu cara
                    untuk mengatasi (coping stress).
                  </p>
                  <p className="mb-2">
                    Coping adalah sebuah cara dari individu dalam menyesuaikan
                    diri dengan tuntutan dari lingkungannya dan sebuah usaha
                    untuk meminimalisir kesenjangan antara tuntutan diluar
                    individu dengan kemampuannya. Coping berasal dari Bahasa
                    inggris, yaitu “cope” yang memiliki arti menanggulangi atau
                    mengatasi suatu hal yang sulit dengan baik (Oxford
                    Dictionary, 2008)
                  </p>
                  <p className="mb-2">
                    Lazarus dan Folkman (Mashudi, 2012) menjelaskan bahwa coping
                    adalah sebuah proses dalam mengatur atau mengatasi tekanan
                    secara internal maupun eksternal, yang dianggap membebani
                    batas kemampuan dari individu. Coping juga dapat
                    didefinisikan sebagai usaha untuk mengubah perilaku dan
                    kognitif dari individu secara konstan untuk mengendalikan
                    tuntutan secara internal dan eksternal secara spesifik, yang
                    dinilai sebagai beban atau suatu hal yang melebihi kemampuan
                    dari seseorang dalam menerima tekanan (Armajayanthi dkk,
                    2017). Matheny (Safaria dan Saputra, 2012) menjelaskan bahwa
                    coping sebagai upaya yang bersifat sehat maupun tidak sehat,
                    positif maupun negatif, usaha secara sadar maupun tidak
                    sadar, untuk mencegah, menghilangkan, atau mengurangi
                    stressor, atau memberikan ketahanan yang ditimbulkan oleh
                    stres. Murphy juga mengatakan bahwa coping adalah upaya
                    untuk mengatasi sebuah kondisi baru yang bersifat mengancam,
                    menimbulkan tantangan, dan frustasi yang sifatnya potensial.
                  </p>
                  <p className="mb-2">
                    Lazarus (Folkman, 2013) menngemukakan bentuk coping stress
                    terdapat dua macam, yang pertama adalah strategi coping yang
                    berorietasi pada masalah (problem-focused coping
                    strategies), dan yang kedua adalah strategi coping yang
                    berorientasi pada emosi (emotional-focused coping
                    strategies). Kedua bentuk coping akan dijelaskan sebagai
                    berikut:
                  </p>
                  <section className="mb-4">
                    <h2 className="text-xl font-bold mb-2">
                      Problem-Focused Coping Strategies
                    </h2>
                    <p className="mb-2">
                      “Pokoknya masalah harus selesai” <br />
                      Problem-focused coping strategies adalah sebuah strategi
                      coping dalam mengurangi stressor dengan mempelajari hal
                      baru atau sebuah keterampilan baru, yang digunakan untuk
                      mengubah situasi, keadaan, atau pokok permasalahan
                      (Horwitz, 2011). Individu menggunakan problem-focused
                      coping strategies cenderung menggunakan strategi yang
                      bersifat kognitif secara langsung, yang digunakan untuk
                      menyelesaikan dan mencari informasi yang dapat digunakan
                      untuk memecahkan masalah (Adriyani, 2014).
                    </p>
                    <p>
                      Strategi kognitif dilakukan untuk mengatasi stres dan
                      menemukan langkah yang baik dalam mengatasi stres dengan
                      cara memodifikasi, mengubah, atau meminimalisir situasi
                      yang sifatnya mengancam. Problem-focused coping strategies
                      biasanya digunakan untuk mengatasi masalah-masalah yang
                      mungkin dapat dikontrol oleh individu (Atmajayanthi,
                      2017).
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      2. Emotional-Focused Coping Strategies
                    </h2>
                    <p className="mb-2">
                      Pemotional-focused coping strategies adalah sebuah usaha
                      dari individu dalam mengendalikan respon emosional
                      terhadap kodisi yang bersifat sangat menekan (Folkman,
                      2013). Strategi coping ini bersifat defensif, karena
                      individu merespon stres secara emosional. dengan berupaya
                      mencari dukungan secara sosial, individu yang menggunakan
                      strategi coping secara emosional lebih menitikberatkan
                      dalam upaya pengurangan emosi negatif ketika menghadapi
                      tekanan. Emotional-focused coping strategies digunakan
                      ketika individu mengalami masalah yang tidak bisa
                      dikontrol (Adriyani 2014).
                    </p>
                    <p className="mb-4">
                      Dukungan yang dimaksud dari strategi coping ini adalah
                      sebuah dukungan yang berasal dari sahabat, keluarga,
                      melakukan aktivitas lain yang sifatnya lebih positif.
                      aktivitas ini bisa merujuk pada olahraga, melakukan hobi
                      positif, berdoa kepada tuhan, dan lain sebagainya dalam
                      menekan stressor (Safaria dan Saputra, 2012).
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

export default ArtikelEdu4;
