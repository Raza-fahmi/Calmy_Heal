import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ArtikelEdit = () => {
  const [title, setTitle] = useState("");
  const [foto, setFoto] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [header1, setHeader1] = useState("");
  const [header2, setHeader2] = useState("");
  const [header3, setHeader3] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getArticleById();
  }, []);

  const getArticleById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/articles/${id}`);
      const {
        title,
        author,
        content,
        foto,
        header1,
        header2,
        header3,
        content1,
        content2,
        content3,
        content4,
      } = response.data;
      setTitle(title);
      setAuthor(author);
      setContent(content);
      setHeader1(header1);
      setHeader2(header2);
      setHeader3(header3);
      setContent1(content1);
      setContent2(content2);
      setContent3(content3);
      setContent4(content4);
      setFoto(foto);
      setPreview(`http://localhost:5000/images/${foto}`);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", foto);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("header1", header1);
    formData.append("header2", header2);
    formData.append("header3", header3);
    formData.append("content1", content1);
    formData.append("content2", content2);
    formData.append("content3", content3);
    formData.append("content4", content4);

    try {
      await axios.patch(`http://localhost:5000/articles/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Article updated successfully");
      navigate("/admin-artikel");
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="px-5 py-10 lg:px-32 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8">Edit Artikel</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Judul Artikel
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Judul Artikel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Nama Penulis
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Nama Penulis"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Isi Artikel
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Isi Artikel"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Header 1
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Header 1"
              value={header1}
              onChange={(e) => setHeader1(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Content 1
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Content 1"
              value={content1}
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Header 2
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Header 2"
              value={header2}
              onChange={(e) => setHeader2(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Content 2
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Content 2"
              value={content2}
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Header 3
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Header 3"
              value={header3}
              onChange={(e) => setHeader3(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Content 3
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Content 3"
              value={content3}
              onChange={(e) => setContent3(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Content 4
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Content 4"
              value={content4}
              onChange={(e) => setContent4(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Gambar
            </label>
            <input
              type="file"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={handleFileChange}
            />
          </div>
          {preview && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Preview
              </label>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtikelEdit;
