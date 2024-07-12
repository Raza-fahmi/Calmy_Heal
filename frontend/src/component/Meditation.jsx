import React from "react";
import GambarMeditasi from "../assets/image/gambar hero.png";

export default function Meditation() {
  return (
    <div className="bg-fourt font-Montserrat text-primary px-5 py-5 lg:px-20 lg:py-12">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-xl font-bold lg:text-4xl">Calmy Meditation</h1>
        <p className="text-xs lg:text-xl">
          Ruang meditasi dilengkapi dengan strategi koping mekanisme yang
          membantu kamu dalam mengelola stress
        </p>
      </div>
      <div className="lg:flex lg:gap-14">
        <div className="w-full flex justify-center items-center mt-6">
          <img src={GambarMeditasi} alt="Meditation" width={605} />
        </div>
        <div className="flex flex-col gap-4 my-auto">
          <h1 className="text-lg font-bold mt-6 lg:text-3xl">
            Mencari meditasi yang nyaman dan membantu mengelola stress ?
          </h1>
          <p className="text-xs lg:text-xl">
            Bersantailah secara mendalam dengan serangkaian pengalaman inovatif
            dan lengkapi rekomendasi harian pilihan Anda untuk terus
            mengembangkan latihan meditasi Anda
          </p>
          <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
            Mulai Meditasi
          </button>
        </div>
      </div>
    </div>
  );
}
