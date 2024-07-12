import React, { useState, useEffect } from "react";
import iconleft1 from "../assets/image/kiri.png";
import Popup from "./Popup";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditBaca = () => {
  const { id } = useParams(); // Get reading ID from URL
  const [note, setNote] = useState("");
  const [readingId, setReadingId] = useState(id); // Set reading ID from URL

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchReading = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reading/${id}`);
        setNote(response.data.note);
      } catch (error) {
        console.error("Error fetching reading:", error);
      }
    };

    fetchReading();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:5000/reading/${readingId}`,
        { note },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.msg);
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Error updating reading:", error);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setNote(""); // Clear the note after a successful submission
  };

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 py-12">
      <Link to="/RekapBuku">
        <button
          type="button"
          className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form mb-5"
        >
          <img src={iconleft1} alt="IconLeft" className="mr-2" />
          Kembali
        </button>
      </Link>
      <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
        <h1 className="text-4xl font-bold">Edit Catatan Membaca</h1>
      </div>
      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 justify-center lg:flex-row">
            <div className="text-base lg:text-xl order-2 lg:order-1 lg:w-[1080px]">
              <textarea
                className="bg-[#69B6B7] text-fourt h-80 w-full px-1 align-top rounded-lg"
                style={{
                  resize: "none",
                  overflowY: "auto",
                  paddingTop: "01rem",
                  paddingRight: "0.5rem",
                }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <div className="flex justify-end mt-5 mb-2">
                <button
                  type="submit"
                  className="bg-[#04364A] hover:bg-sixth text-fourt px-2 py-1 rounded-lg w-[135px] lg:text-lg lg:w-[162px] lg:py-3 lg:font-semibold lg:rounded-lg text-center no-underline"
                >
                  Simpan
                </button>
                <Popup
                  isVisible={isPopupVisible}
                  onClose={handleClosePopup}
                  to="/rekap-buku"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBaca;
