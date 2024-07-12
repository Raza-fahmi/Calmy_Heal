import React from "react";
import tentang2 from "../assets/image/tentang2.svg";

export default function VisiMisi() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-lg lg:text-[40px]">
          Mulai <br className="lg:hidden" />
          #perjalanankesehatanmental <br className="lg:hidden" /> kamu disini
        </h1>
        <p className="text-base font-light lg:text-xl">
          Mindmatter memberikan edukasi mengenai kesehatan mental dan
          memfasilitasi tempat cerita yang membantu kamu berproses, memahami dan
          mengembangkan diri.
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:gap-10">
        <div>
          <img src={tentang2} alt="Visi Misi" className="lg:w-[605px] " />
        </div>
        <div className="flex flex-col gap-2 lg:gap-3 lg:w-[536px]">
          <h2 className="text-lg font-bold lg:text-xl">
            Calmy Heal berkomitmen menyediakan platform kesehatan mental yang
            mudah diakses
          </h2>
          <h1 className="text-2xl font-bold text-center lg:text-3xl">Visi</h1>
          <p className="text-base lg:text-xl">
            Menjadi mitra tepercaya bagi individu dalam perjalanan kesehatan
            mental yang lebih baik, dengan menyediakan akses mudah dan
            terjangkau pada layanan kesehatan mental serta informasi edukatif
            yang relevan
          </p>
          <h1 className="text-2xl font-bold text-center lg:text-3xl">Misi</h1>
          <p className="text-base lg:text-xl">
            Memberikan layanan kesehatan mental holistik melalui konseling
            online, interaksi dengan ahli dan komunitas, sumber daya edukatif,
            dan kebijakan privasi yang jelas.
          </p>
        </div>
      </div>
    </div>
  );
}
