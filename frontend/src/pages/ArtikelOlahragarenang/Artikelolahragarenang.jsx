import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Popup from "../../component/Popup";
import Gambarrenang1 from "../../assets/image/renang1.png";
import Gambarrenang2 from "../../assets/image/renang2.png";
import Gambarrenang3 from "../../assets/image/renang3.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import Icon from "../../assets/icon/Icon";

const ArtikelOlahragaRenang = () => {
  const [note, setNote] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("note", note);
    formData.append("foto", foto);

    try {
      const response = await axios.post(
        "http://localhost:5000/exercise",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.msg);
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setCatatanMembaca(""); // Kosongkan catatan setelah submit berhasil
  };
  return (
    <div>
      <Navbar />
      <div className="container my-10 mx-auto md:px-6 font-Montserrat ">
        <Link to="/ChallengeOlahraga">
          <button
            type="button"
            className="flex items-center py-3 px-8 text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form"
          >
            <img src={iconleft} alt="IconLeft" className="mr-2" />
            Kembali
          </button>
        </Link>

        <section className="mb-32">
          <p className="mb-6 text-center text-3xl font-bold text-[#04364A]">
            Hari 4 : Panduan Renang
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Renang merupakan salah satu olahraga yang memiliki banyak manfaat
            dan keuntungan berenang bagi kesehatan tubuh kamu, terutama bagi
            sistem pernapasan.
          </p>
          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarrenang1}
              alt="gambar renang 1"
            />
          </div>
        </section>
        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarrenang2}
                alt="Gambarrenang2"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
                Panduan Renang
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Lakukan pemanasan sebelum masuk ke air. Pemanasan bisa berupa
                  peregangan ringan atau gerakan dinamis untuk mengurangi risiko
                  cedera dan mempersiapkan otot.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tentukan gaya renang yang ingin Anda lakukan, seperti gaya
                  bebas, gaya punggung, gaya dada, atau gaya kupu-kupu. Pilih
                  gaya yang sesuai dengan kemampuan dan tujuan Anda.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Latih teknik pernapasan yang benar. Untuk gaya bebas,
                  misalnya, bernapaslah secara bergantian ke kanan dan kiri
                  setiap beberapa kayuhan. Tarik napas melalui mulut di atas
                  permukaan air dan buang napas di dalam air.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambarrenang3} alt="Gambarrenang3" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jaga posisi tubuh yang streamline (sejajar dan lurus) untuk
                  mengurangi hambatan air. Posisi tubuh yang baik membantu
                  meningkatkan efisiensi dan kecepatan renang.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Perhatikan gerakan tangan dan kaki sesuai dengan gaya renang
                  yang kamu pilih. Untuk gaya bebas, lakukan gerakan tangan yang
                  memutar dengan kuat dan gerakan kaki yang bergantian naik
                  turun.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jika Anda pemula, gunakan alat bantu seperti papan renang atau
                  pull buoy untuk membantu meningkatkan teknik dan kenyamanan di
                  air.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Setelah selesai renang, lakukan pendinginan dengan berenang
                  perlahan atau melakukan peregangan ringan di air. Ini membantu
                  tubuh pulih dan mengurangi risiko kram atau cedera.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 font-Montserrat">
          <div className="mx-auto w-full max-w-[1080px]">
            <h2 className="mb-5 text-center text-[#04364A] text-3xl font-bold mt-15">
              Yeay Aktifitas Jalan Kaki Telah Selesai !!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="bg-eighth flex justify-center items-center h-[180px] lg:h-[398px] rounded-md flex-col gap-3">
                <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Uploaded"
                      className="object-cover w-full h-full rounded-md"
                    />
                  ) : (
                    <Icon name="kamera" />
                  )}
                </div>
                <label className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:h-[50px] lg:py-3 lg:font-semibold lg:rounded-2xl text-center no-underline cursor-pointer">
                  {preview ? "Ganti Gambar" : "Tambahkan"}
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="note"
                  className="mb-3 block text-base font-bold text-[#07074D] mt-5"
                >
                  Catat hasil pengalaman challenge mu hari ini!
                </label>
                <textarea
                  rows="10"
                  name="note"
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#4FA7A9] py-3 px-6 text-base font-medium text-[#F9FAF9] outline-none focus:shadow-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="hover:shadow-form rounded-xl bg-[#176B87] py-3 px-8 text-base font-semibold text-[#F9FAF9]"
                >
                  Kirim
                </button>
                <Popup
                  isVisible={isPopupVisible}
                  onClose={handleClosePopup}
                  to="/rekap"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelOlahragaRenang;
