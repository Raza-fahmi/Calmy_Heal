import React, { useRef } from "react";
import Icon from "../assets/icon/Icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import user1 from "../assets/image/user1.png";
import user2 from "../assets/image/user2.png";
import user3 from "../assets/image/user3.png";
import user4 from "../assets/image/user4.png";
import user5 from "../assets/image/user5.png";
import user6 from "../assets/image/user6.png";

const review = [
  {
    id: 1,
    name: "William",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Terimakasih sudah menjadi teman diskusi untuk masalah yang kuhadapi, dengan pembawaan yang simple dan mudah dipahami. jadi sangat membantu aku yang kaku saat bercerita tentang apa yang kualami. see yaa, kak!",
    image: user1,
  },
  {
    id: 2,
    name: "Nadira",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Terima Kasih Challenge-nya sangat membantu saya untuk tetap fokus dan disiplin. Meditasinya juga sangat bermanfaat, memberikan ketenangan dan membantu saya tidur lebih nyenyak. Sangat direkomendasikan bagi siapa saja yang ingin mengurangi stres",
    image: user2,
  },
  {
    id: 3,
    name: "Jono",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Saya suka bagaimana aplikasi ini menggabungkan challenge dan meditasi. Challenge-nya membuat saya termotivasi untuk tetap berada di jalur, dan meditasi membantu saya melepaskan stres setelah hari yang panjang. ",
    image: user3,
  },
  {
    id: 4,
    name: "Nathan",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Aplikasi ini adalah solusi sempurna untuk mengurangi stres! Challenge-nya menantang namun menyenangkan, dan meditasi yang ditawarkan sangat membantu untuk menenangkan pikiran saya. Saya merasa lebih tenang dan lebih bahagia sejak menggunakan aplikasi ini.",
    image: user4,
  },
  {
    id: 5,
    name: "Pevita",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Saya sangat menyukai aplikasi ini! Tantangan harian membantu saya tetap termotivasi dan bersemangat. Meditasinya sangat menenangkan, membuat saya merasa lebih rileks dan fokus. ",
    image: user5,
  },
  {
    id: 6,
    name: "Chelsea",
    star: <Icon name="bintang" />,
    rating: 5,
    comment:
      "Menggunakan aplikasi ini adalah salah satu keputusan terbaik yang pernah saya buat. Challenge-nya sangat menginspirasi dan membantu saya mencapai tujuan kecil setiap hari. Meditasinya luar biasa dan membuat saya merasa lebih damai. Stres saya berkurang signifikan",
    image: user6,
  },
];

const Testimoni = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-fourt font-Montserrat px-5 py-5 text-primary">
      <div className="text-center lg:flex lg:flex-col lg:gap-3">
        <h1 className="text-xl font-bold lg:text-[40px]">
          Apa Kata Pengguna Kami
        </h1>
        <p className="text-xs lg:text-lg">
          Berproses bersama Calmy Heal, sehingga kamu berhak untuk merasakan
          kebahagiaan seperti mereka
        </p>
      </div>
      <div className="carousel-container relative w-3/4 m-auto">
        <Slider ref={sliderRef} {...settings}>
          {review.map((data) => (
            <div
              key={data.id}
              className="w-[215px] h-auto lg:w-[500px] px-3 py-3 bg-third mt-10 rounded-xl  "
            >
              <div className="flex flex-col gap-3">
                <div>
                  <p className="line-clamp-3 text-xs lg:text-base ">
                    {data.comment}
                  </p>
                </div>
                <div className="flex flex-row gap-3 ">
                  <div className="">
                    <img src={data.image} width={50} height={50} alt="User" />
                  </div>
                  <div>
                    <div className="text-xs lg:text-base">{data.name}</div>
                    <div className="flex flex-row gap-2 lg:gap-1 text-xs items-center ">
                      <div className="w-4 h-4">{data.star} </div>
                      {data.rating}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="arrow-container absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center">
          <div
            className="left-arrow -ml-10 cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-third hover:bg-sixth rounded-md"
            onClick={previous}
          >
            <Icon name="left" className="lg:w-[55px] lg:h-auto" />
          </div>
          <div
            className="right-arrow -mr-10 cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-third hover:bg-sixth rounded-md"
            onClick={next}
          >
            <Icon name="right" className="lg:w-[55px] lg:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
