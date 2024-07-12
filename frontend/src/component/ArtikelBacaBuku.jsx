import React from "react";
import { Link } from "react-router-dom";
import GambarMembacaBuku from "../assets/image/membacabuku1.png";
import iconleft1 from "../assets/image/kiri.png";

export default function ArtikelBacaBuku() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <Link to="/Kategori-Tantangan">
          <button
            type="button"
            className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form mb-5"
          >
            <img src={iconleft1} alt="IconLeft" className="mr-2" />
            Kembali
          </button>
        </Link>
        <img src={GambarMembacaBuku} alt="GambarMembacaBuku" />
      </div>
      <div className="lg:w-1/2 lg:my-auto flex flex-col">
        <h1 className="text-2xl font-bold lg:text-4xl">Membaca Buku</h1>
        <p className="text-sm mt-2 lg:mt-7 mb-6 lg:text-base">
          Calmy Challenge Membaca Buku adalah program tantangan literasi yang
          didesain untuk mendorong Anda mencapai tujuan membaca Anda. Dengan
          bergabung dalam tantangan ini, Anda akan mendapatkan motivasi untuk
          membaca secara teratur dan meraih pencapaian nyata dalam literasi dan
          pengetahuan.
        </p>
        <div className="flex justify-end">
          <Link to="/rekap-buku">
            <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
              Lihat Rekap
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
