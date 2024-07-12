import React from "react";
import artikel1 from "../assets/image/artikel 1.png";
import artikel2 from "../assets/image/artikel2.png";
import artikel3 from "../assets/image/artikel3.png";

const artikel = [
  {
    id: 1,
    judul: "Manajemen Stres Pada Mahasiswa",
    isi: "Stres merupakan suatu keadaan di mana sumber daya yang miliki oleh seseorang tidak dapat mendukung keinginan yang ingin dicapai",
    gambar: artikel1,
  },
  {
    id: 2,
    judul: "Penyebab Gangguan Stress Pada Remaja",
    isi: "Stres pada remaja disebabkan oleh beberapa hal, dan beberapa di antaranya seringkali kamu alami loh.",
    gambar: artikel2,
  },
  {
    id: 3,
    judul: "Manajemen Waktu Untuk Mengurangi Stres",
    isi: "Ini adalah era yang semakin memahami pentingnya kesehatan mental. Dalam sebuah masyarakat yang terus berkembang",
    gambar: artikel3,
  },
];

export default function Education() {
  return (
    <div className="bg-fourt font-Montserrat text-primary px-5 py-5 lg:px-32 lg:py-12">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-xl font-bold lg:text-[40px] ">Calmy Edu</h1>
        <p className="text-xs lg:text-xl">
          Ruang edukasi terkait permasalahan kesehatan anda dengan Calmy Edu
          Temukan informasi terkini dan terpercaya seputar management stress
          kamu
        </p>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-5 rounded-xl px-auto lg:flex-row">
          {artikel.map((data) => (
            <figure
              key={data.id}
              className="w-full h-[320px] lg:h-[400px] rounded-[20px] text-secondary bg-third hover:bg-secondary hover:text-fourt cursor-pointer  shadow-xl"
            >
              <figcaption>
                <div>
                  <img
                    src={data.gambar}
                    alt="artikel"
                    className="w-full h-[189px] object-cover rounded-t-[20px]"
                  />
                </div>
                <div className="mx-4 my-4 flex flex-col gap-2">
                  <h1 className="text-base lg:text-lg font-bold ">
                    {data.judul}
                  </h1>
                  <p className="text-xs lg:text-base font-semibold lg:font-medium">
                    {data.isi}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
          Lihat Semua
        </button>
      </div>
    </div>
  );
}
