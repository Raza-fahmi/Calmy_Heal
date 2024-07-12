import React from "react";
import kategori1 from "../assets/image/kategori1.png";
import kategori2 from "../assets/image/kategori2.png";
import kategori3 from "../assets/image/kategori3.png";
import kategori4 from "../assets/image/kategori4.png";
import { Link } from "react-router-dom";

export default function PilihKategorimeditasi() {
  return (
    <div className="bg-fourt font-Montserrat text-primary p-5 lg:px-[171px] lg:py12">
      <div>
        <h1 className="text-2xl font-bold text-center">Pilih Kategori</h1>
      </div>
      <div className="flex flex-col gap-6 my-4 lg:my-16 lg:grid lg:grid-cols-2 lg:gap-20 lg:justify-center">
        <Link to="/Detail-Stres">
          <div className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth hover:text-white mx-auto">
            <div className="w-full max-w-[264px] h-[211px] mx-auto pt-6">
              <img
                src={kategori1}
                className="rounded-lg h-[211px] w-full object-cover"
              />
            </div>
            <div className="pt-6">
              <h1 className="text-lg font-bold text-center mt-6">Stres</h1>
            </div>
          </div>
        </Link>
        <Link to="/Detail-Fokus">
          <div className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth hover:text-white mx-auto">
            <div className="w-full max-w-[264px] h-[211px] mx-auto pt-6">
              <img
                src={kategori2}
                className="rounded-lg h-[211px] w-full object-cover"
              />
            </div>
            <div className="pt-6">
              <h1 className="text-lg font-bold text-center mt-6">Fokus</h1>
            </div>
          </div>
        </Link>
        <Link to="/Detail-Tidur">
          <div className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth hover:text-white mx-auto">
            <div className="w-full max-w-[264px] h-[211px] mx-auto pt-6">
              <img
                src={kategori3}
                className="rounded-lg h-[211px] w-full object-cover"
              />
            </div>
            <div className="pt-6">
              <h1 className="text-lg font-bold text-center mt-6">Tidur</h1>
            </div>
          </div>
        </Link>
        <Link to="/Detail-Suasana-Hati">
          <div className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth hover:text-white mx-auto">
            <div className="w-full max-w-[264px] h-[211px] mx-auto pt-6">
              <img
                src={kategori4}
                className="rounded-lg h-[211px] w-full object-cover"
              />
            </div>
            <div className="pt-6">
              <h1 className="text-lg font-bold text-center mt-6">Mood </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
