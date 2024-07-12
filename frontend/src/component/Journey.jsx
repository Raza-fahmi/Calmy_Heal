import React from "react";
import tentang3 from "../assets/image/tentang3.svg";

export default function Journey() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py12 flex flex-col gap-5 lg:flex-row lg:gap-8">
      <img
        src={tentang3}
        className="lg:w-[516px] lg:h-[569px] order-1 lg:order-2"
      />
      <div className="order-2 lg:order-1 lg:w-[557px] lg:my-auto">
        <h1 className="text-2xl font-bold lg:text-[40px]">
          Perjalanan kami dimulali dari
        </h1>
        <p className="text-xs lg:text-xl my-1 lg:mt-4">
          Kami perjalanan kami dimulai dari permasalahan remaja mengenai
          kesehatan mental seperti quarter life krisis dan kecemasan, kami ingin
          berupaya membantu mereka untuk #memulaiperjalanankesehatanmental agar
          bisa terus bertumbuh dan berkembang
        </p>
      </div>
    </div>
  );
}
