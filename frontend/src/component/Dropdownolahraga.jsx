import React, { useState } from "react";
import PropTypes from "prop-types";

const activityList = [
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
  "Aktivitas Jalan Kaki",
  "Aktivitas Yoga",
  "Aktivitas Lari",
  "Aktivitas Renang",
  "Aktivitas Bersepeda",
];

const DropdownCard = ({ day, isActive, isCompleted, onClick, className }) => {
  const getLink = (activity) => {
    switch (activity) {
      case "Aktivitas Jalan Kaki":
        return "/Artikelolahragajalankaki";
      case "Aktivitas Yoga":
        return "/Artikelolahragayoga";
      case "Aktivitas Lari":
        return "/Artikelolahragalari";
      case "Aktivitas Renang":
        return "/Artikelolahragarenang";
      case "Aktivitas Bersepeda":
        return "/Artikelolahragabersepeda";
      default:
        return "#";
    }
  };

  const activity = activityList[day - 1];
  const link = getLink(activity);

  return (
    <div
      className={`relative ${
        isActive ? "flex flex-col items-start" : "flex items-center"
      } 
        w-full max-w-xs p-4 rounded-lg bg-[#4FA7A9] cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="font-body-large-semibold tracking-wide text-white text-center w-full flex items-center justify-between font-Montserrat">
        {!isActive && (
          <svg
            fill="#ffffff"
            height="16px"
            width="16px"
            viewBox="-6.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <title>dropdown</title>
              <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
            </g>
          </svg>
        )}
        {isCompleted && <span className="ml-2 text-green-500">✔️</span>}
        {isActive && (
          <a
            href={link}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 mr-4 mt-5 "
          >
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 476.213 476.213"
              xmlSpace="preserve"
            >
              <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 " />
            </svg>
          </a>
        )}
        <div className="font-body-large-semibold text-center w-full mt-2 ">{`Hari ${day}`}</div>
      </div>
      {isActive && (
        <div className="flex flex-col w-full max-w-xs p-4 mt-2 bg-[#C4EAE8] rounded-lg border border-solid  font-Montserrat">
          <div className="font-medium text-gray-700 text-base ">{activity}</div>
        </div>
      )}
    </div>
  );
};

DropdownCard.propTypes = {
  day: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const App = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(Array(30).fill(false));

  return (
    <div className="min-h-screen p-6 bg-[#F9FAF9]">
      <h1 className="text-3xl font-bold mb-8 font-Montserrat">
        Mulai Hari untuk Melakukan Aktifitas Olahraga
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20">
        {Array.from({ length: 30 }, (_, i) => (
          <DropdownCard
            key={i}
            day={i + 1}
            isActive={activeDay === i + 1}
            isCompleted={completedDays[i]}
            onClick={() => setActiveDay(activeDay === i + 1 ? null : i + 1)}
          />
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
};

export default App;
