import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import axios from "axios";

const Artikelterbaru = () => {
  const [terbaru, setTerbaru] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPageMobile = 3;
  const itemsPerPageLg = 6;
  const itemsPerPage =
    window.innerWidth >= 640 ? itemsPerPageLg : itemsPerPageMobile;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles"); // Ganti URL dengan URL API Anda
      setTerbaru(response.data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = terbaru.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(terbaru.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <div>
        <h1 className="text-base font-medium my-2 lg:text-3xl">
          Artikel Terbaru
        </h1>
      </div>
      <div
        className={`grid ${
          window.innerWidth >= 640
            ? "lg:grid-cols-3 lg:grid-rows-2"
            : "grid-cols-1"
        } gap-5`}
      >
        {currentItems.map((data) => (
          <Link
            to={`/Artikeledu/${data.uuid}`}
            key={data.uuid}
            className="no-underline"
          >
            <div className="w-[320px] h-[290px] bg-fifth rounded-lg">
              <div>
                <img
                  src={data.url}
                  className="rounded-t-lg w-full h-[174px] object-cover"
                  alt={data.title}
                />
              </div>
              <div className="m-2">
                <h3 className="text-xs font-light">
                  {new Date(data.date).toISOString().substring(0, 10)}
                </h3>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-xs font-medium line-clamp-2">
                  {data.content}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-primary w-full h-1 mt-6 rounded-md"></div>
      <div className="mt-5 flex justify-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={terbaru.length}
          paginate={paginate}
        />
      </div>
      <div className="flex justify-between text-xs lg:text-xl font-bold h-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex flex-row gap-1 my-auto disabled:opacity-50"
        >
          <GrFormPreviousLink className="size-4 lg:size-7" />
          <h1>Sebelumnya</h1>
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(terbaru.length / itemsPerPage)}
          className="flex flex-row gap-1 my-auto disabled:opacity-50"
        >
          <h1>Selanjutnya</h1>
          <GrFormNextLink className="size-4 lg:size-7" />
        </button>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex flex-row gap-2">
      <ul className="pagination flex gap-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="page-link text-base font-semibold lg:text-xl"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Artikelterbaru;
