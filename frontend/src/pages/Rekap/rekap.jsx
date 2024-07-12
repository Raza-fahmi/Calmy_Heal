import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import Edit from "../../assets/image/edit.png";

function Rekap() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/exercise");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Menghitung indeks data untuk halaman saat ini
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Menghitung jumlah halaman
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Navbar />
      <div className="container md:mx-auto px-10 p-20 ">
        <h1 className="text-2xl font-bold mb-4 ">
          Rekap Jurnal Aktifitas Olahraga
        </h1>
        <div className="table-fixed p-8 shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white ">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No</th>
                  <th className="py-2 px-4 border-b">Tanggal</th>
                  <th className="py-2 px-4 border-b">Foto Harian</th>
                  <th className="py-2 px-4 border-b">
                    Hasil catatan kemajuan harian
                  </th>
                  <th className="py-2 px-4 border-b">Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((entry, index) => (
                  <tr key={entry.id}>
                    <td className="py-2 px-4 border-b text-center">
                      {indexOfFirstData + index + 1}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={entry.url}
                        alt={`Foto harian ${entry.id}`}
                        className="w-16 h-16"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{entry.note}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <Link to={`/EditJurnalOlahraga/${entry.uuid}`}>
                        <button className="text-blue-500 hover:text-blue-700">
                          <img src={Edit} alt="edit" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4">
            <span>
              Showing {indexOfFirstData + 1} to{" "}
              {Math.min(indexOfLastData, data.length)} of {data.length} entries
            </span>
            <div>
              <button
                onClick={() => paginate(currentPage - 1)}
                className={`px-4 py-2 border rounded-l ${
                  currentPage === 1
                    ? "bg-gray-300"
                    : "bg-[#C5EBE9] text-[#176B87]"
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border ${
                    number === currentPage
                      ? "bg-[#04364A] text-[#F9FAF9]"
                      : "bg-[#C5EBE9] text-[#176B87]"
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                className={`px-4 py-2 border rounded-r ${
                  currentPage === pageNumbers.length
                    ? "bg-gray-300"
                    : "bg-[#C5EBE9] text-[#176B87]"
                }`}
                disabled={currentPage === pageNumbers.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Rekap;
