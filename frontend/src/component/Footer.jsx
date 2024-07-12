import React from "react";
import logo from "../assets/image/Logo-mobile.png";
import Icon from "../assets/icon/Icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-secondary font-Montserrat px-5 py-5 text-fourt lg:px-20 lg:py-12">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-3 lg:w-[311px]">
          <div className="flex flex-row gap-3">
            <img
              className="w-[50px] h-[36px] lg:w-[66px] lg:h-[47px]"
              src={logo}
              alt="Logo"
            />
            <h1 className="font-Montserrat font-bold text-[24px] lg:my-auto">
              Calmy Heal
            </h1>
          </div>
          <div>
            <p className="text-xs font-light lg:text-base">
              Anda telah mencapai akhir, tetapi ini bukanlah akhirnya! Ingatlah,
              Anda tidak sendirian. Teruslah berusaha, dan utamakan
              kesejahteraan mental Anda.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs lg:text-base lg:w-[150px]">
          <h1 className="font-bold">Menu</h1>
          <Link
            to="/"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Beranda
          </Link>
          <Link
            to="/Calmy-Challenge"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Calmy Challenge
          </Link>
          <Link
            to="/Calmy-Edu"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Calmy Edu
          </Link>
          <Link
            to="/Calmy-Meditation"
            className="hover:underline underline-offset-3  font-Montserrat"
          >
            Calmy Meditation
          </Link>
          <Link
            to="/Tentang-Calmy"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Tentang Calmy
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-xs lg:text-base lg:w-[150px]">
          <h1 className="font-bold">Layanan</h1>
          <Link
            to="/Calmy-Challenge"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Calmy Challenge
          </Link>
          <Link
            to="/Calmy-Edu"
            className="hover:underline underline-offset-3 font-Montserrat"
          >
            Calmy Edu
          </Link>
          <Link
            to="/Calmy-Meditation"
            className="hover:underline underline-offset-3  font-Montserrat"
          >
            Calmy Meditation
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-xs lg:text-base lg:w-[150px]">
          <h1 className="font-bold">Link</h1>
          <Link to="/Kebijakan-Privasi">
            <h2 className="font-extralight cursor-pointer">
              Kebijakan Privasi
            </h2>
          </Link>
          <Link to="/Syarat-dan-Ketentuan">
            <h2 className="font-extralight cursor-pointer">Panduan</h2>
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-xs lg:text-base lg:w-[210px]">
          <h1 className="font-bold">Sosial Media</h1>
          <div className="flex space-x-2">
            <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] cursor-pointer bg-seventh-25 rounded-full flex items-center justify-center">
              <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]">
                <Icon name="youtube" />
              </div>
            </div>
            <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] cursor-pointer bg-seventh-25 rounded-full flex items-center justify-center">
              <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]">
                <Icon name="facebook" />
              </div>
            </div>
            <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] cursor-pointer bg-seventh-25 rounded-full flex items-center justify-center">
              <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]">
                <Icon name="instagram" />
              </div>
            </div>
            <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] cursor-pointer bg-seventh-25 rounded-full flex items-center justify-center">
              <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]">
                <Icon name="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
