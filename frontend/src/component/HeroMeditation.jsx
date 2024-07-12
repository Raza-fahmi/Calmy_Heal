import React from "react";
import { Link } from "react-router-dom";

export default function HeroMeditation() {
  return (
    <div className="font-Montserrat bg-Meditation h-[600px] bg-center bg-cover lg:h-[700px]">
      <div className="text-center text-white px-5 py-48 lg:px-64 lg:pt-60 flex flex-col gap-5">
        <h1 className="text-2xl font-bold lg:text-[40px]">
          Meditasi Yang Sesuai Dengan Anda
        </h1>
        <p className="text-base font-semibold lg:text-2xl">
          Tingkatkan kualitas tidur, stres, dan banyak lagi.
        </p>
        <Link to="/Meditasi-Utama">
          <button className="bg-primary hover:bg-sixth text-fourt mx-auto py-2 rounded-xl w-[135px] text-sm lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
            Mulai Challenge
          </button>
        </Link>
      </div>
    </div>
  );
}
