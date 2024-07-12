import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon/Icon";

export default function KontenMeditasi({
  videoUrl,
  meditasi,
  judul,
  keterangan,
  durasi,
  kategori,
}) {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <Link to="/Meditasi-Utama">
        <button className="w-[96px] h-5 flex gap-1 lg:w-[149px] lg:gap-3">
          <div className="w-4 h-4 my-auto">
            <Icon name="arrow-left" />
          </div>
          <h1 className="font-bold text-sm my-auto lg:text-base">Kembali</h1>
        </button>
      </Link>

      <div className="flex flex-col lg:flex-row gap-2 my-16">
        <div className="order-1 lg:order-2 lg:w-[752px]">
          <iframe
            title="YouTube Video"
            width="100%"
            height="400"
            src={`${videoUrl}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="order-2 lg:order-1 my-auto flex flex-col gap-6 lg:w-[490px]">
          <h1 className="text-base font-bold text-[28px] ">
            Meditasi Untuk {meditasi}
          </h1>
          <h1 className="text-lg font-bold lg:text-[40px]">{judul}</h1>
          <p className="text-xs lg:text-xl">{keterangan}</p>
          <div className="flex justify-center gap-7 lg:justify-between mx-2">
            <div className="gap-3 flex flex-row">
              <div className="w-5 h-5 lg:w-6 lg:h-6">
                <Icon name="jam" />
              </div>
              <h3 className="text-xs font-bold text-center lg:text-xl">
                Durasi: {durasi}
              </h3>
            </div>
            <div className="gap-3 flex flex-row">
              <div className="w-4 h-4 lg:w-5 lg:h-5">
                <Icon name="kategori" />
              </div>
              <h3 className="text-xs font-bold text-center lg:text-xl">
                {kategori}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
