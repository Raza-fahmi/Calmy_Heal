import React from "react";
import tentang1 from "../assets/image/tentang1.svg";

export default function GetToknow() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12 flex flex-col gap-6 lg:flex-row lg:gap-32">
      <div className="order-1 lg:order-2 ">
        <img src={tentang1} className="lg:w-[593px] lg:h-[420px]" />
      </div>
      <div className="flex flex-col gap-2 order-2 lg:order-1 lg:w-[490px] lg:gap-8 lg:my-auto">
        <h1 className="text-2xl font-bold lg:text-[40px]">
          Kenal lebih dekat dengan Calmy Heal
        </h1>
        <p className="text-base lg:text-xl">
          Calmy Heal adalah platform website untuk mencegah stres dengan
          fitur-fitur motivasi, seperti tantangan olahraga dan meditasi untuk
          meningkatkan kesehatan mental. Kami juga menyediakan konten edukatif
          tentang pencegahan stres.
        </p>
      </div>
    </div>
  );
}
