import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminMembaca = () => {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    loadReadings();
  }, []);

  const loadReadings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reading");
      setReadings(response.data);
    } catch (error) {
      console.error("Error fetching readings: ", error);
    }
  };

  const deleteReading = async (readingId) => {
    try {
      await axios.delete(`http://localhost:5000/reading/${readingId}`);
      loadReadings();
    } catch (error) {
      console.error("Error deleting reading: ", error);
    }
  };

  return (
    <div className="px-5 py-10 sm:ml-64">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-primary">Kelola Membaca</h1>
        <Link to="/admin-membaca/add">
          <button className="bg-primary text-white w-32 h-10 rounded-xl">
            Tambah Membaca
          </button>
        </Link>
      </div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700 text-center">
          <tr className="m-1">
            <th>No</th>
            <th>Note</th>
            <th>Tanggal</th>
            <th>User ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 text-center">
          {readings.length > 0 ? (
            readings.map((reading, index) => (
              <tr key={reading.uuid}>
                <td>{index + 1}</td>
                <td>{reading.note}</td>
                <td>{reading.date}</td>
                <td>{reading.userId}</td>
                <td className="flex flex-col gap-1">
                  <Link
                    to={`/EditJurnalBuku/${reading.uuid}`}
                    className="bg-green-800 rounded-sm text-white text-center px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteReading(reading.uuid)}
                    className="bg-red-500 rounded-sm text-white text-center px-2 py-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No readings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMembaca;
