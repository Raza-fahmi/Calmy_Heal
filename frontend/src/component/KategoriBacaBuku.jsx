import React from "react";
import { Link } from "react-router-dom";
import minggu1 from "../assets/image/minggu1.png";
import minggu2 from "../assets/image/minggu2.png";
import minggu3 from "../assets/image/minggu3.png";
import minggu4 from "../assets/image/minggu4.png";

export default function KategoriBacaBuku() {
  const weeks = [
    { src: minggu1, label: "Minggu 1", link: "/Buku-1 " },
    { src: minggu2, label: "Minggu 2", link: "/Buku-2 " },
    { src: minggu3, label: "Minggu 3", link: "/Buku-3 " },
    { src: minggu4, label: "Minggu 4", link: "/Buku-4 " },
  ];

  return (
    <div className="bg-fourt font-Montserrat text-primary p-5 lg:px-[171px] lg:py-12">
      <div className="flex flex-col gap-6 my-4 lg:my-16 lg:grid lg:grid-cols-2 lg:gap-20 lg:justify-center">
        {weeks.map((week, index) => (
          <Link
            to={week.link}
            key={index}
            className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth mx-auto border-2 border-transparent"
          >
            <div className="w-full max-w-[264px] h-[211px] mx-auto mt-6">
              <img
                src={week.src}
                className="rounded-lg h-[211px] w-full object-cover"
                alt={week.label}
              />
            </div>
            <h1 className="text-lg font-bold text-center mt-6">{week.label}</h1>
          </Link>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex  font-Montserrat">
          <li>
            <a className=" relative block rounded bg-transparent px-3 py-1.5 text-lg font-semi-bold bg-[#04364A] hover:bg-sixth text-[#FFFFFF] transition-all duration-300 dark:text-neutral-400">
              Kembali
            </a>
          </li>
        </ul>

        <ul className="list-style-none flex justify-end font-Montserrat mb-5">
          <li>
            <a className=" relative block rounded px-3 py-1.5 text-lg font-semi-bold bg-[#C5EBE9] hover:bg-sixth text-[#176B87] transition-all duration-300 dark:text-neutral-400">
              Previous
            </a>
          </li>
          <li aria-current="page">
            <a
              className="relative block bg-primary-100 px-3 py-1.5 text-lg font-semi-bold bg-[#04364A] hover:bg-sixth font-medium text-[#FFFFFF] transition-all duration-300"
              href="#!"
            >
              1
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li>
            <a
              className="relative block rounded  px-3 py-1.5 text-lg font-semi-bold bg-[#C5EBE9] text-[#176B87] transition-all duration-300 hover:bg-sixth"
              href="#!"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
