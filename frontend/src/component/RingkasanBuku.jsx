import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon/Icon";
import conventy from "../assets/image/conveti.svg";

export default function RingkasanBuku({
  judul,
  pengarang,
  bab,
  topik1,
  isi1,
  topik2,
  isi2,
  topik3,
  isi3,
  topik4,
  isi4,
  topik5,
  isi5,
  topik6,
  isi6,
  topik7,
  isi7,
  topik8,
  isi8,
  topik9,
  isi9,
  topik10,
  isi10,
  penutup,
  buku,
  buku2,
  judulrek1,
  ringkasan,
  judulrek2,
  ringkasan2,
  selamat,
  next1,
  next2,
  kembali,
  showButton = true,
  showSelamat = true,
  showkonten = true,
  showkonten2 = true,
  showkonten3 = true,
  showkonten4 = true,
  showkonten5 = true,
}) {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <Link to={kembali}>
        <button className="w-[96px] h-5 flex gap-1 lg:w-[149px] lg:gap-3">
          <div className="w-4 h-4 my-auto">
            <Icon name="arrow-left" />
          </div>
          <h1 className="font-bold text-sm my-auto lg:text-base">Kembali</h1>
        </button>
      </Link>

      {/*konten*/}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
        <div className="w-[318px] lg:w-[962px] shadow-lg mx-auto p-5 flex flex-col gap-2 rounded-lg">
          <h1 className="text-center text-xl font-bold lg:text-4xl">
            Ringkasan E-book {judul}
          </h1>
          <p className="text-center text-xs lg:text-base">Karya {pengarang}</p>
          <h2 className="text-sm font-bold text-center lg:text-2xl">
            Ringkasan BAB {bab}
          </h2>
          <div className="flex justify-center gap-5 lg:gap-7"></div>
          <div className="pt-3 lg:pt-4 flex flex-col gap-3">
            <h1 className="text-base font-bold lg:text-xl">{topik1}</h1>
            <p className="text-xs lg:text-base">{isi1}</p>
            <h1 className="text-base font-bold lg:text-xl">{topik2}</h1>
            <p className="text-xs lg:text-base">{isi2}</p>
            <h1 className="text-base font-bold lg:text-xl">{topik3}</h1>
            <p className="text-xs lg:text-base">{isi3}</p>
            <h1 className="text-base font-bold lg:text-xl">{topik4}</h1>
            <p className="text-xs lg:text-base">{isi4}</p>
            <h1 className="text-base font-bold lg:text-xl">{topik5}</h1>
            <p className="text-xs lg:text-base">{isi5}</p>
            {showkonten && (
              <div>
                <h1 className="text-base font-bold lg:text-xl">{topik6}</h1>
                <p className="text-xs lg:text-base">{isi6}</p>
              </div>
            )}
            {showkonten2 && (
              <div>
                <h1 className="text-base font-bold lg:text-xl">{topik7}</h1>
                <p className="text-xs lg:text-base">{isi7}</p>
              </div>
            )}
            {showkonten3 && (
              <div>
                <h1 className="text-base font-bold lg:text-xl">{topik8}</h1>
                <p className="text-xs lg:text-base">{isi8}</p>
              </div>
            )}
            {showkonten4 && (
              <div>
                <h1 className="text-base font-bold lg:text-xl">{topik9}</h1>
                <p className="text-xs lg:text-base">{isi9}</p>
              </div>
            )}
            {showkonten5 && (
              <div>
                <h1 className="text-base font-bold lg:text-xl">{topik10}</h1>
                <p className="text-xs lg:text-base">{isi10}</p>
              </div>
            )}

            <p className="text-xs lg:text-base">{penutup}</p>
          </div>

          {showSelamat && (
            <div className="flex gap-1 justify-center pt-5 items-center">
              <img src={conventy} className="w-5 h5 lg:w-[50px] lg:h-[50px] " />
              <h2 className="text-xs lg:text-xl font-bold text-center">
                HORE KAMU TELAH SELESAI MEMBACA
                <br />
                <span className="text-secondary">{selamat}</span>
              </h2>
              <img src={conventy} className="w-5 h-5 lg:w-[50px] lg:h-[50px]" />
            </div>
          )}
          {showButton && (
            <Link to="/Filosofi-Teras-2">
              <button className="flex mx-auto justify-center mt-5 bg-secondary text-white items-center px-2 py-1 rounded-xl hover:bg-sixth text-xs w-[161px] lg:text-lg lg:w-[500px] lg:py-3 lg:font-semibold lg:rounded-[28px] text-center no-underline">
                Lanjut ke Bab Berikutnya
              </button>
            </Link>
          )}
        </div>

        {/*rekomendasi buku*/}
        <div className="w-[318px]  lg:h-[390px] shadow-lg mx-auto p-5 flex flex-col gap-2 lg:gap-5 rounded-lg">
          <h1 className="text-base font-bold">Kamu Akan Menyukai Ini</h1>
          <Link to={next1}>
            <div className="flex gap-3">
              <img
                src={buku}
                alt="buku"
                width={86}
                height={123}
                className="rounded-md shadow-md"
              />
              <div className="my-auto">
                <h1 className="text-base">{judulrek1}</h1>
                <p className="text-[10px]">{ringkasan}</p>
              </div>
            </div>
          </Link>
          <Link to={next2}>
            <div className="flex gap-3">
              <img
                src={buku2}
                alt="buku"
                width={86}
                height={123}
                className="rounded-md shadow-md"
              />
              <div className="my-auto">
                <h1 className="text-base">{judulrek2}</h1>
                <p className="text-[10px]">{ringkasan2}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
