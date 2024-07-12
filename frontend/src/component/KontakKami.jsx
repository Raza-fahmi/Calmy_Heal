import React from "react";
import kontak from "../assets/image/kontak.svg";

export default function KontakKami() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 py-12">
      <div>
        <h1 className="text-center font-bold text-2xl lg:text-4xl">
          Kontak Calmy
        </h1>
        <p className="text-xs text-center font-light lg:text-xl">
          Hubungi Calmy untuk kerjasama atau bertanya seputar kesehatan mental
          terutama dalam management stress
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4 justify-center lg:flex-row">
        <div className="mx-auto flex order-1 lg:order-2 w-[250px] h-[220px] lg:w-[542px] lg:h-[479px]">
          <img src={kontak} alt="image" />
        </div>
        <div className="text-base lg:text-xl  order-2 lg:order-1 lg:w-[541px] ">
          <h1>Nama Lengkap*</h1>
          <input
            type="text"
            className="border-b-2 border-primary w-full px-1"
          />
          <h1 className="mt-6">Email*</h1>
          <input
            type="text"
            className="border-b-2 border-primary w-full px-1"
          />
          <h1 className="mt-6">Isi Pesanmu Disini</h1>
          <textarea
            className="bg-secondary text-fourt h-52 w-full px-1 align-top rounded-lg"
            style={{
              resize: "none",
              overflowY: "auto",
              paddingTop: "0.5rem",
              paddingRight: "0.5rem",
            }}
          />
          <div className="flex justify-end mt-5 lg:justify-normal">
            <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-lg w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-lg text-center no-underline">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
