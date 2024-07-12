import React from "react";
import Icon from "../assets/icon/Icon";
import { Link } from "react-router-dom";

export default function DisplayBuku({
  buku,
  gambar,
  ringkasan1,
  ringkasan2,
  link,
}) {
  return (
    <div>
      <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
        <h1 className="text-lg font-bold text-center mt-14 lg:text-4xl">
          Membaca Ringkasan Ebook {buku}
        </h1>
        <div className="flex flex-col mt-5 lg:flex-row gap-4 lg:gap-6">
          <div className="bg-fifth rounded-md shadow-md w-[205px] h-[169px] lg:w-[458px] lg:h-[377px] mx-auto flex justify-center items-center">
            <img
              src={gambar}
              className="w-[120px] h-[150px] lg:w-[220px] lg:h-[250px]"
            />
          </div>
          <ul className="space-y-2 lg:w-[795px] my-auto">
            <li className="flex items-start">
              <div className="w-5 h-5 flex-shrink-0">
                <Icon name="centang" />
              </div>
              <span className="ml-2 text-base lg:text-2xl">{ringkasan1}</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 flex-shrink-0">
                <Icon name="centang" />
              </div>
              <span className="ml-2 text-base lg:text-2xl">{ringkasan2}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-third h-[174px] flex flex-col mt-3 items-center justify-center lg:flex-row gap-6 lg:justify-between lg:px-20">
        <h1 className="text-lg font-bold lg:text-3xl">
          Baca ringkasan e-book disini
        </h1>
        <Link to={link}>
          <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px] text-center no-underline">
            Mulai Baca
          </button>
        </Link>
      </div>
    </div>
  );
}
