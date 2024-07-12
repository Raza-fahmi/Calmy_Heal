import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminOlahraga = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async () => {
    try {
      const response = await axios.get("http://localhost:5000/exercise");
      setExercises(response.data);
    } catch (error) {
      console.error("Error fetching exercises: ", error);
    }
  };

  const deleteExercise = async (exerciseId) => {
    try {
      await axios.delete(`http://localhost:5000/exercise/${exerciseId}`);
      loadExercises();
    } catch (error) {
      console.error("Error deleting exercise: ", error);
    }
  };

  return (
    <div className="px-5 py-10 sm:ml-64">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-primary">Kelola Olahraga</h1>
        <Link to="/admin-olahraga/add">
          <button className="bg-primary text-white w-32 h-10 rounded-xl">
            Tambah Olahraga
          </button>
        </Link>
      </div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700 text-center">
          <tr className="m-1">
            <th>No</th>
            <th>Note</th>
            <th>Foto</th>
            <th>Tanggal</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 text-center">
          {exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <tr key={exercise.uuid}>
                <td>{index + 1}</td>
                <td>{exercise.note}</td>
                <td>
                  <img
                    src={exercise.url}
                    alt="Exercise"
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td>{exercise.date}</td>
                <td>{exercise.userId}</td>
                <td className="flex flex-col gap-1">
                  <Link
                    to={`/EditJurnalOlahraga/${exercise.uuid}`}
                    className="bg-green-800 rounded-sm text-white text-center px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteExercise(exercise.uuid)}
                    className="bg-red-500 rounded-sm text-white text-center px-2 py-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No exercises found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOlahraga;
