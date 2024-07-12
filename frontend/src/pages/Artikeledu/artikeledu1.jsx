import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarstres from "../../assets/image/stres.png";
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
                MANAJEMEN STRES PADA MAHASISWA
              </h1>
              <p className="mb-6 text-center text-[#04364A]">
                Fahmeza &#8226; 27 November 2024
              </p>
              <div className="flex justify-center mb-6">
                <img
                  src={Gambarstres}
                  alt="gambar stres"
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
                    “Ma, pusing banget ngerjain tugas mata kuliah ini” “Rasanya
                    kok aku gak bisa-bisa ngerti ya sama materinya. Stres deh!!”
                    “Aku rasanya gak bisa tidur kalau mikirin besok ujian”
                    Apakah kita pernah mendengarkan anak kita mengucapkan hal di
                    atas? Mungkin beberapa kalimat pernah kita dengar ataupun
                    tidak. Anak kita, sebagai mahasiswa, acapkali mengeluh atau
                    berujar bahwa dirinya merasa tertekan. Pada fase ini,
                    seorang mahasiswa akan menghadapi berbagai tantangan baru.
                    Pertama, proses adaptasi ketika menjadi mahasiswa baru
                    seperti tinggal jauh dari orangtua, menyesuaikan jadwal
                    kuliah yang  berbeda-beda, mencari teman baru, atau mengatur
                    keuangannya sendiri. Kedua, ketika menghadapi tugas kuliah
                    atau berusaha mendapatkan nilai yang tinggi. Ketiga,
                    berkaitan dengan cita-cita atau tujuan mahasiswa setelah
                    lulus kuliah. Mereka akan mencari inspirasi dan kesempatan
                    lowongan pekerjaan yang sesuai dengan dirinya. Jika kita
                    berada di posisi mereka, sangat mungkin bagi kita untuk
                    merasa bingung maupun tertekan atau yang umum disebut
                    sebagai stres.
                  </p>
                  <p className="mb-2">
                    Stres merupakan suatu keadaan di mana sumber daya yang
                    miliki oleh seseorang tidak dapat mendukung keinginan yang
                    ingin dicapai. Misalnya, seorang mahasiswa ingin mendapatkan
                    nilai A tetapi ia malah dapat C. Terjadi kesenjangan antara
                    apa yang diinginkan terhadap kemampuan yang dimilikinya.
                    Pada dasarnya, individu dapat memberikan respon yang berbeda
                    pada setiap permasalahan yang dihadapinya. Terdapat dua
                    respon yang biasa mucul, yaitu individu akan
                    menghadapi atau menghindar dari permasalahannya. Alangkah
                    baiknya jika permasalahan yang mahasiswa hadapi
                    menjadi kesempatan belajar bagi dirinya untuk menemukan
                    solusi yang sesuai diri mereka karena nantinya mahasiswa
                    perlu menjadi seseorang yang mandiri dan mampu mengambil
                    keputusan secara tepat.
                  </p>
                  <section className="mb-4">
                    <h2 className="text-xl font-bold mb-2">
                      Terdapat dua cara yang biasa dilakukan seseorang untuk
                      mengatasi stres, yaitu :
                    </h2>
                    <p></p>
                  </section>
                  <section className="mb-4">
                    <p>
                      1. Problem focused coping “Pokoknya masalah harus selesai”
                      Cara ini lebih berfokus kepada pemecahan masalahnya.
                      Bertujuan untuk mengurangi tuntutan dari situasi yang
                      menyebabkan stres atau memperluas sumber daya yang dapat
                      dimanfaatkan untuk menghadapinya (Sarafino & Smith, 2011).
                      Misalnya, melakukan diskusi, mencari informasi mengenai
                      cara belajar, bertanya ke dosen, dan lain sebagainya.
                      <br />
                      1. Emotion-focused coping “Yang penting aku tenang dulu”
                      Cara ini lebih fokus kepada pengendalian respon
                      emosi ketika menghadapi stres. Misalnya, menonton TV,
                      beribadah, mencari dukungan dari keluarga dan teman,
                      berolahraga, menangis, curhat, jalan dengan teman, dan
                      lain sebagainya.
                      <br />
                      Kedua cara di atas tidak selalu berdiri sendiri. Seseorang
                      dapat menggunakan kedua cara tersebut secara bersamaan.
                      Cara apa yang biasa dilakukan oleh anak? Kita boleh
                      mengamati dan berbicara dengan anak ketika ia menghadapi
                      stres. Kemudian dapat ditanyakan apakah cara yang biasa ia
                      lakukan sudah berhasil dan efektif untuk menyelesaikan
                      masalahnya. Alangkah baiknya jika orangtua dapat
                      berdiskusi, sharing, dan melakukan evaluasi bersama dengan
                      anak sehingga mereka juga belajar untuk memahami diri
                      sendiri.
                    </p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold mb-2 ">
                      apa saja yang dapat dilakukan orangtua bersama anak ketika
                      menghadapi stres? Berikut beberapa hal yang dapat
                      dipraktikkan:
                    </h2>
                    <p className="mb-2">
                      1. Dengarkan cerita anak dengan sepenuhnya Berikan ruang
                      dan waktu sepenuhnya untuk anak dapat bercerita mengenai
                      masalahnya. Lebih baik orangtua mengenyampingkan pikiran
                      pribadinya. Selain itu, jangan berikan pernyataan awal,
                      seperti “Ah, kamu gitu aja kok gak bisa sih?” , “Kamu
                      jangan galau gitu dong”, atau “Loh, kok kamu cengeng
                      banget sih”.
                      <br /> 2. Menanyakan pendapat anak terhadap masalah
                      tersebut Setelah anak sudah selesai menceritakan perasaan
                      serta masalahnya, berikan kesempatan anak dapat
                      menyampaikan penilaiannya terhadap masalah tersebut.
                      Seperti, sumber masalahnya dari mana, siapa yang harus
                      bertanggung jawab terhadap masalah tersebut, dan lain
                      sebagainya. Hal ini dapat melatih anak untuk berpikir
                      secara kritis.
                      <br /> 3. Menanyakan usaha yang sudah dilakukan oleh anak
                      Orangtua dapat bertanya mengenai usaha-usaha apa saja yang
                      sudah dilakukan anak selama ini. Apakah usaha tersebut
                      sudah 100% dilakukan atau belum.
                      <br /> 4. Menanyakan sumber daya apa yang dibutuhkan oleh
                      anak Jika anak sudah melakukan usahanya namun masih belum
                      berhasil, tanyakan sumber daya apa yang dapat dimanfaatkan
                      oleh anak untuk membantu ia menghadapi stresnya. Seperti,
                      dosen siapa yang bisa diajak berdiskusi, apakah ada tempat
                      belajar untuk mahasiswa di kampus, teman siapa yang paling
                      membuat nyaman untuknya bercerita, dan lain sebagainya.
                      <br /> 5. Melakukan evaluasi kembali Setelah anak sudah
                      diajak bercerita dan berdiskusi, lakukan evaluasi kembali
                      mengenai usaha yang sudah dilakukan dan persentasi
                      keberhasilannya.
                    </p>
                    <p>
                      Ketika kita menerima curhatan anak mengenai
                      perkuliahannya, kita dapat melihat dulu respon-respon yang
                      muncul pada dirinya. Jika ia merasa sedih, cemas, tidak
                      semangat, berpikir tidak mampu secara terus menerus maka
                      kita dapat mengajak ia untuk berdiskusi. Selain itu, perlu
                      diperhatikan juga respon fisik yang muncul pada dirinya,
                      seperti sulit tidur, selera makan berkurang, pusing,
                      maupun tangan berkeringat karena merasa cemas. Jika respon
                      tersebut muncul dalam waktu lebih dari empat minggu,
                      sebaiknya kita dapat mengajak anak untuk bertemu dengan
                      konselor maupun psikolog.
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
