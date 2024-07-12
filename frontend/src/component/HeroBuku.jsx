import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon/Icon";
import gambar from "../assets/image/membaca.svg";

export default function HeroBuku({ angka }) {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <Link to="/ChallengeBacaBuku">
        <button className="w-[96px] h-5 flex gap-1 lg:w-[149px] lg:gap-3">
          <div className="w-4 h-4 my-auto">
            <Icon name="arrow-left" />
          </div>
          <h1 className="font-bold text-sm my-auto lg:text-base">Kembali</h1>
        </button>
      </Link>
      <div className="text-center mt-4 flex flex-col justify-center items-center lg:mt-9">
        <h1 className="text-lg font-bold lg:text-[40px]">
          Buku {angka} : Melakukan Aktifitas Membaca Buku
        </h1>
        <p className="text-base font-semibold mt-4 lg:text-xl lg:w-[680px] lg:mt-9">
          Membaca adalah salah satu aktivitas yang mudah dan bermanfaat yang
          dapat membantu Anda mengatasi stres.
        </p>
        <img
          src={gambar}
          alt="Image"
          className="w-[297px] h-[231px] lg:w-[400px] lg:h-[328px]"
        />
      </div>
    </div>
  );
}
