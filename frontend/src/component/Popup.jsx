import React from "react";
import image from "../assets/image/centang.svg";
import { Link } from "react-router-dom";

const Popup = ({ isVisible, onClose, to }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-third text-primary font-Montserrat px-9 py-14 rounded-lg relative">
        <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>
          &times;
        </button>
        <div className="text-center">
          <img src={image} alt="Success" className="mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-4">Rekap Berhasil Dibuat</h1>
          <Link to={to}>
            <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px] text-center no-underline">
              Lihat Rekap
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
