import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminArtikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles: ", error);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(`http://localhost:5000/articles/${articleId}`);
      loadArticles();
    } catch (error) {
      console.error("Error deleting article: ", error);
    }
  };

  return (
    <div className="px-5 py-10 sm:ml-64">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-primary">Kelola Artikel</h1>
        <Link to="/admin-artikel/add">
          <button className="bg-primary text-white w-32 h-10 rounded-xl">
            Tambah Artikel
          </button>
        </Link>
      </div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700 text-center">
          <tr className="m-1">
            <th>No</th>
            <th>Judul</th>
            <th>Nama Penulis</th>
            <th>Tanggal</th>
            <th>Foto</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 text-center">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <tr key={article.uuid}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.date}</td>
                <td>
                  <img
                    src={article.url}
                    alt="Article"
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td>{article.content}</td>
                <td className="flex flex-col gap-1">
                  <Link
                    to={`/admin-artikel/edit/${article.uuid}`}
                    className="bg-green-800 rounded-sm text-white text-center px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteArticle(article.uuid)}
                    className="bg-red-500 rounded-sm text-white text-center px-2 py-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No articles found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminArtikel;
