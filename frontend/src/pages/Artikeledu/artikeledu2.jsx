import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarsosialmedia from "../../assets/image/sosialmedia.png";
import Gambarmenjaga from "../../assets/image/menjaga.png";
import Gambarkondisi from "../../assets/image/kondisipsikologis.png";
import iconleft1 from "../../assets/image/kiri.png";
import iconkanan from "../../assets/image/kanan.png";
import { Link } from "react-router-dom";

const ArtikelEdu1 = () => {
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
                Pengaruh Sosial Media Terhadap Tingkat Stres
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Fahmeza &#8226; 27 November 2024
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarsosialmedia}
                  alt="gambar sosial media"
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
                  <p className="mb-2">
                    Media sosial telah menjadi bagian yang tidak terpisahkan
                    dari kehidupan sehari-hari. Setiap detik, jutaan orang di
                    seluruh dunia mengakses platform seperti Facebook,
                    Instagram, Twitter, dan TikTok. Fenomena ini sangat mencolok
                    terutama di kalangan remaja yang sering kali sulit
                    melepaskan diri dari media sosial. Meskipun media sosial
                    memiliki banyak manfaat, seperti memfasilitasi komunikasi
                    dan memperluas jaringan sosial, dampaknya terhadap kesehatan
                    mental, khususnya tingkat stres, menjadi isu yang semakin
                    mendapat perhatian.
                  </p>

                  <section className="mb-4">
                    <h2 className="text-xl font-bold mb-2">
                      Peningkatan Tingkat Stres
                    </h2>
                    <p className="mb-2">
                      Stres yang dialami oleh pengguna media sosial dapat
                      disebabkan oleh beberapa faktor. Pertama, tekanan sosial
                      untuk tampil sempurna sering kali menyebabkan kecemasan.
                      Remaja, misalnya, merasa perlu untuk selalu terlihat
                      menarik dan bahagia dalam setiap postingan mereka. Hal ini
                      diperparah dengan budaya "like" dan komentar yang menjadi
                      tolok ukur popularitas seseorang. Ketika postingan mereka
                      tidak mendapatkan respon yang diharapkan, mereka mungkin
                      merasa kurang dihargai atau bahkan diabaikan.
                    </p>
                    <p>
                      Kedua, paparan terhadap konten negatif dan berita palsu
                      (hoaks) juga berkontribusi pada peningkatan stres. Media
                      sosial sering menjadi tempat tersebarnya informasi yang
                      tidak selalu benar, dan hal ini dapat memicu kekhawatiran
                      serta ketidakpastian. Informasi tentang kejadian tragis
                      atau berita buruk yang terus-menerus juga dapat
                      mempengaruhi kondisi emosional pengguna. Ketiga, FOMO
                      (Fear of Missing Out) atau ketakutan akan ketinggalan
                      informasi juga merupakan penyebab stres yang signifikan.
                      Remaja sering merasa harus selalu terhubung dengan media
                      sosial agar tidak ketinggalan tren atau percakapan penting
                      di kalangan teman-temannya. Ketakutan ini bisa membuat
                      mereka terus-menerus memantau media sosial, yang pada
                      akhirnya mengurangi waktu untuk beristirahat dan melakukan
                      aktivitas lain yang lebih menenangkan.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      Dampak Jangka Panjang
                    </h2>
                    <p className="mb-2">
                      Penggunaan media sosial yang berlebihan dapat berdampak
                      buruk dalam jangka panjang. Stres kronis yang diakibatkan
                      oleh media sosial bisa berkontribusi pada gangguan
                      kesehatan mental lainnya, seperti depresi dan kecemasan.
                      Studi menunjukkan bahwa remaja yang menghabiskan lebih
                      banyak waktu di media sosial memiliki risiko lebih tinggi
                      untuk mengalami masalah ini dibandingkan dengan mereka
                      yang menggunakan media sosial dengan lebih seimbang.
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

export default ArtikelEdu1;
