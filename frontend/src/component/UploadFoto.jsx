import React, { useState } from "react";
import Icon from "../assets/icon/Icon";

export default function UploadFoto() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // Logika untuk mengirim gambar ke backend dapat ditambahkan di sini
      // contoh: const formData = new FormData(); formData.append('image', file);
    }
  };

  return (
    <div className="bg-white text-primary font-Montserrat py-3 flex flex-col gap-3">
      <h1 className="mb-3 block text-base font-bold text-[#07074D]">
        Upload Foto Menarik Dari Kegiatan Kamu
      </h1>
      <div className="bg-eighth flex justify-center items-center h-[180px] lg:h-[398px] rounded-md flex-col gap-3">
        <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="object-cover w-full h-full rounded-md"
            />
          ) : (
            <Icon name="kamera" />
          )}
        </div>
        <label className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:h-[50px] lg:py-3 lg:font-semibold lg:rounded-2xl text-center no-underline cursor-pointer">
          {image ? "Ganti Gambar" : "Tambahkan"}
          <input type="file" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>
    </div>
  );
}
