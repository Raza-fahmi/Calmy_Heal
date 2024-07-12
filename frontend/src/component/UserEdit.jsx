import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [foto, setFoto] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      const { name, email, role, foto } = response.data;
      setName(name);
      setEmail(email);
      setRole(role);
      setFoto(foto);
      setPreview(`http://localhost:5000/images/${foto}`);
    } catch (error) {
      console.error("Error fetching user:", error);
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
    formData.append("name", name);
    formData.append("email", email);
    formData.append("role", role);
    formData.append("password", password);
    formData.append("confPassword", confPassword);

    try {
      await axios.patch(`http://localhost:5000/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("User updated successfully");
      navigate("/admin-users");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="px-5 py-10 lg:px-32 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8">Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Nama</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Peran
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Peran"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password (opsional)
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Konfirmasi Password (opsional)
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Konfirmasi Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Foto</label>
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

export default UserEdit;
