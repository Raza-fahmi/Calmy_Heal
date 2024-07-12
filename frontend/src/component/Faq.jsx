import React from "react";
import faq from "../assets/image/faq.png";
import Accordion from "./atom/Accordion";

export default function Faq() {
  return (
    <div className="bg-fourt text-primary px-5 py-5 justify-center lg:px-20 lg:py-12 font-Montserrat">
      <div className="">
        <h1 className="text-base font-bold text-center lg:text-[40px]">
          FAQ's
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className=" mx-auto order-1 lg:order-2">
          <img
            src={faq}
            alt="Faq"
            className="w-[270px] my-6 lg:w-[548px] lg:h-auto"
          />
        </div>
        <div className="p-4 w-[320px] rounded-lg order-2 lg:order-1 lg:w-[602px] my-auto text-xs lg:text-xl">
          <Accordion
            title="Bagaimana cara melakukan Calmy Challange?  "
            answer="Untuk melakukan Calmy Challenge,  
            anda perlu masuk ke dalam halaman Calmy Challenge, 
            Kemudian memilih kategori yang diinginkan. 
            Setelah itu lakukan kegiatan aktifitasnya secara rutin 
            dan jangan lupa catat progress kegiatan harianmu."
          />
          <Accordion
            title="Bagaimana cara melakukan Calmy Meditation?"
            answer="Untuk melakukan Calmy Meditation,  
            anda perlu masuk ke dalam halaman Calmy Meditation, 
            Kemudian Memilih Kategori permasalahan dialami. 
            Setelah itu mulai mengerjakan quizz, dan terakhir pilih 
            jenis video yang diinginkan untuk mengatasi permasalahanmu."
          />
          <Accordion
            title="Apakah Manfaat Calmy Edu dalam Permasalahan
            Managament Stres?"
            answer="Manfaat Calmy Edu,
             Memberikan anda edukasi terkait 
             management stress  dan agar dapat mencegah permasalahan stres."
          />
          <Accordion
            title="Ada Berapa Kategori Calmy Meditation?"
            answer="Calmy Meditation memiliki empat kategori, yaitu stres, fokus, tidur, dan mood."
          />
        </div>
      </div>

      {/*acordion*/}
    </div>
  );
}
