import React from "react";

export default function MeditasiUntuk({
  gambar,
  meditasi,
  penjelasan,
  reverse,
}) {
  return (
    <div
      className={`${
        reverse ? "bg-third" : "bg-fourt"
      } text-primary font-Montserrat p-5 flex flex-col gap-2 lg:flex-row lg:gap-44 lg:px-20 lg:py-32 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-[268px] h-[250px] lg:w-[374px] lg:h-[348px] mx-auto">
        <img src={gambar} alt={meditasi} />
      </div>
      <div className="lg:w-[550px] lg:my-auto">
        <h1 className="text-xl font-bold lg:text-[40px]">{meditasi}</h1>
        <p className="text-xs lg:text-xl lg:mt-4">{penjelasan}</p>
      </div>
    </div>
  );
}
