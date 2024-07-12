import React from "react";
import GambarHero from "../assets/image/hero.png";

export default function Hero() {
  return (
    <div className="bg-fourt p-5 lg:px-20 lg:py-12 lg:flex text-primary font-Montserrat">
      <div className="order-1 lg:order-2 w-full">
        <img src={GambarHero} alt="Hero" width={636} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1 lg:my-auto lg:w-[1090px]">
        <h1 className="text-xl lg:text-4xl font-bold">
          Mengembalikan Senyum Bahagiamu dengan Solusi yang Terbaik
        </h1>
        <p className="text-xs lg:text-xl">
          Selamat datang di Calmy Heal, Tempat solusi untuk managament stres
          kamu, Calmy Heal menyediakan challenge aktifitas sesuai hobi kamu yang
          dapat menyelesaikan permasalahan stres.
        </p>
        <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px] text-center no-underline">
          Mulai Challenge
        </button>
      </div>
    </div>
  );
}
