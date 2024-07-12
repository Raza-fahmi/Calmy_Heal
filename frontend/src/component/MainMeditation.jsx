import React from "react";
import fokus1 from "../assets/image/fokusutama1.png";
import fokus2 from "../assets/image/fokusutama2.png";
import fokus3 from "../assets/image/fokusutama3.png";
import fokus4 from "../assets/image/fokusutama4.png";
import stres1 from "../assets/image/stresutama1.png";
import stres2 from "../assets/image/stresutama2.png";
import stres3 from "../assets/image/stresutama3.png";
import stres4 from "../assets/image/stresutama4.png";
import tidur1 from "../assets/image/tidurutama1.png";
import tidur2 from "../assets/image/tidurutama2.png";
import tidur3 from "../assets/image/tidurutama3.png";
import tidur4 from "../assets/image/tidurutama4.png";
import mood1 from "../assets/image/moodutama1.png";
import mood2 from "../assets/image/moodutama2.png";
import mood3 from "../assets/image/moodutama3.png";
import mood4 from "../assets/image/moodutama4.png";
import { Link } from "react-router-dom";

const fokus = [
  {
    id: 1,
    judul: "Tingkatkan Fokus",
    kategori: "Focus Stories",
    gambar: fokus1,
    link: "/Meditasi-Fokus-1",
  },
  {
    id: 2,
    judul: "Pikiran Tenang",
    kategori: "Music",
    gambar: fokus2,
    link: "/Meditasi-Fokus-2",
  },
  {
    id: 3,
    judul: "Konsentrasi Mendalam",
    kategori: "Meditation",
    gambar: fokus3,
    link: "/Meditasi-Fokus-3",
  },
];
const stres = [
  {
    id: 1,
    judul: "Menenangkan Pikiran",
    kategori: "Focus Stories",
    gambar: stres1,
    link: "/Meditasi-Stres-1",
  },
  {
    id: 2,
    judul: "Ketenangan",
    kategori: "Music",
    gambar: stres2,
    link: "/Meditasi-Stres-2",
  },
  {
    id: 3,
    judul: "Bernapas Relaksasi",
    kategori: "Meditation",
    gambar: stres3,
    link: "/Meditasi-Stres-3",
  },
];
const tidur = [
  {
    id: 1,
    judul: "Pengatar Tidur",
    kategori: "Focus Stories",
    gambar: tidur1,
    link: "/Meditasi-Tidur-1",
  },
  {
    id: 2,
    judul: "Keseimbangan Batin",
    kategori: "Music",
    gambar: tidur2,
    link: "/Meditasi-Tidur-2",
  },
  {
    id: 3,
    judul: "Tidur Nyenyak",
    kategori: "Meditation",
    gambar: tidur3,
    link: "/Meditasi-Tidur-3",
  },
];
const mood = [
  {
    id: 1,
    judul: "Energi Positif",
    kategori: "Focus Stories",
    gambar: mood1,
    link: "/Meditasi-Mood-1",
  },
  {
    id: 2,
    judul: "Good Mood",
    kategori: "Music",
    gambar: mood2,
    link: "/Meditasi-Mood-2",
  },
  {
    id: 3,
    judul: "Meningkatkan Mood",
    kategori: "Meditation",
    gambar: mood3,
    link: "/Meditasi-Mood-3",
  },
];

export default function MainMeditation() {
  return (
    <div className="lg:flex">
      <div className="aside hidden lg:block bg-third lg:w-[382px] h-screen px-7 py-12 sticky top-0">
        <a className="flex gap-3 cursor-pointer" href="#fokus">
          <img src={fokus4} alt="image" />
          <h1 className="text-2xl font-semibold my-auto">Fokus</h1>
        </a>
        <a className="flex gap-3 cursor-pointer mt-5" href="#stres">
          <img src={stres4} alt="image" />
          <h1 className="text-2xl font-semibold my-auto">Stress</h1>
        </a>
        <a className="flex gap-3 cursor-pointer mt-5" href="#tidur">
          <img src={tidur4} alt="image" />
          <h1 className="text-2xl font-semibold my-auto">Tidur</h1>
        </a>
        <a className="flex gap-3 cursor-pointer mt-5" href="#mood">
          <img src={mood4} alt="image" />
          <h1 className="text-2xl font-semibold my-auto">Suasana Hati</h1>
        </a>
      </div>
      <div className="flex flex-col w-full">
        {/* Fokus */}
        <div
          id="fokus"
          className="bg-fourt text-primary font-Montserrat p-5 lg:px-16 lg:py-12"
        >
          <h1 className="text-3xl lg:text-4xl">Fokus</h1>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
            {fokus.map((data) => (
              <Link to={data.link} key={data.id}>
                <div className="bg-fifth w-[275px] h-[233px] rounded-md cursor-pointer shadow-md mx-auto">
                  <img src={data.gambar} alt={data.judul} />
                  <div className="ml-3 mt-3">
                    <h1 className="text-xl font-bold">{data.judul}</h1>
                    <p className="text-sm">{data.kategori}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Stress */}
        <div
          id="stres"
          className="bg-fourt text-primary font-Montserrat p-5 lg:px-16 lg:py-12"
        >
          <h1 className="text-3xl lg:text-4xl">Stress</h1>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
            {stres.map((data) => (
              <Link to={data.link} key={data.id}>
                <div className="bg-fifth w-[275px] h-[233px] rounded-md cursor-pointer shadow-md mx-auto">
                  <img src={data.gambar} alt={data.judul} />
                  <div className="ml-3 mt-3">
                    <h1 className="text-xl font-bold">{data.judul}</h1>
                    <p className="text-sm">{data.kategori}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Tidur */}
        <div
          id="tidur"
          className="bg-fourt text-primary font-Montserrat p-5 lg:px-16 lg:py-12"
        >
          <h1 className="text-3xl lg:text-4xl">Tidur</h1>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
            {tidur.map((data) => (
              <Link to={data.link} key={data.id}>
                <div className="bg-fifth w-[275px] h-[233px] rounded-md cursor-pointer shadow-md mx-auto">
                  <img src={data.gambar} alt={data.judul} />
                  <div className="ml-3 mt-3">
                    <h1 className="text-xl font-bold">{data.judul}</h1>
                    <p className="text-sm">{data.kategori}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Suasana Hati */}
        <div
          id="mood"
          className="bg-fourt text-primary font-Montserrat p-5 lg:px-16 lg:py-12"
        >
          <h1 className="text-3xl lg:text-4xl">Suasana Hati</h1>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
            {mood.map((data) => (
              <Link to={data.link} key={data.id}>
                <div className="bg-fifth w-[275px] h-[233px] rounded-md cursor-pointer shadow-md mx-auto">
                  <img src={data.gambar} alt={data.judul} />
                  <div className="ml-3 mt-3">
                    <h1 className="text-xl font-bold">{data.judul}</h1>
                    <p className="text-sm">{data.kategori}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
