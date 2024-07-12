import React from "react";
import { Link } from "react-router-dom";
import challenge from "../assets/image/challenge.png";

export default function Challenge() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12 flex flex-col gap-8 lg:flex-row min-h-screen w-full">
      <div className="order-1 lg:order-2 flex justify-center items-center w-full lg:w-1/2">
        <img src={challenge} alt="Challenge" className="max-w-full h-auto" />
      </div>
      <div className="order-2 lg:order-1 flex flex-col justify-center items-start w-full lg:w-1/2">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Ikut Challenge dari Calmy Challenge
        </h1>
        <p className="text-sm mt-2 lg:mt-7 mb-6 lg:text-base">
          <span className="font-bold">Calmy Challenge </span>adalah langkah
          pertama menuju hidup yang lebih tenang dan fokus pada kebahagiaan
          Anda. Ini adalah tantangan 28 hari yang akan membantu Anda
          mengembangkan rutinitas harian untuk meningkatkan kesehatan mental dan
          emosional Anda.
        </p>
        <Link to="/Kategori-Tantangan">
          <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
            Mulai Challenge
          </button>
        </Link>
      </div>
    </div>
  );
}
