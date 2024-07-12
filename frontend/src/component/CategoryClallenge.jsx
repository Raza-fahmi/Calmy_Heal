import React from "react";
import { Link } from "react-router-dom";
import kategori1 from "../assets/image/kategorichallenge1.png";
import kategori2 from "../assets/image/kategorichallenge2.png";
import iconleft1 from "../assets/image/kiri.png";

export default function CategoryChallenge() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12 min-h-screen items-center  flex-col justify-center">
      <Link to="/Calmy-Challenge" className="self-start mb-4">
        <button
          type="button"
          className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form"
        >
          <img src={iconleft1} alt="IconLeft" className="mr-2" />
          Kembali
        </button>
      </Link>
      <h1 className="text-2xl font-bold mb-10 mt-8 self-start">
        Pilih Aktifitas Yang Kamu Inginkan
      </h1>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-28 justify-center">
        <div className="bg-third w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] rounded-xl hover:bg-secondary hover:text-fourt flex flex-col items-center justify-center">
          <Link to="/ChallengeOlahraga">
            <div className="w-[224px] h-[234px] lg:w-[264px] lg:h-[276px] mx-auto">
              <img src={kategori1} className="rounded-xl" />
            </div>
          </Link>
          <h1 className="font-bold text-xl text-center mt-6">Olahraga</h1>
        </div>

        <div className="bg-third w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] rounded-xl hover:bg-secondary hover:text-fourt flex flex-col items-center justify-center">
          <Link to="/ChallengeBacaBuku">
            <div className="w-[224px] h-[234px] lg:w-[264px] lg:h-[276px] mx-auto">
              <img src={kategori2} className="rounded-xl" />
            </div>
            <h1 className="font-bold text-xl text-center mt-6">Membaca Buku</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
