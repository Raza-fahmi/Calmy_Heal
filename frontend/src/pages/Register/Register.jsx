import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/image/logofix.png";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Fungsi untuk menangani registrasi
  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: "user", // Menyertakan default role 'user'
      });
      navigate("/login"); // Mengarahkan ke halaman login setelah berhasil registrasi
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="h-screen md:flex font-Montserrat">
      <div
        className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden"
        style={{
          background:
            "linear-gradient(to top right, #02607E 0%, #48A8AD 50%, #66C7C2 100%)",
        }}
      >
        <div>
          <img src={logo} alt="Logo" width={390} />
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white ">
        <p className="text-red-600">{msg}</p>
        <form onSubmit={register} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Daftar Akun Sekarang
          </h1>

          <label className="block text-md mb-2 my-3" htmlFor="namaLengkap">
            Nama Lengkap
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4 w-full">
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="Nama Lengkap"
              id="namaLengkap"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="password">
            Kata Sandi
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="confpassword">
            Konfirmasi Kata Sandi
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="confpassword"
              id="confpassword"
              placeholder=""
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                name="rememberme"
                style={{
                  accentColor: "#02607E",
                }}
              />
              <span className="text-sm ml-1">Ingat saya</span>
            </div>
            <span className="text-sm ml-1 text-[#3431A2] hover:underline cursor-pointer">
              Lupa Kata Sandi?
            </span>
          </div>

          <button
            type="submit"
            className="block w-full bg-[#02607E] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Daftar
          </button>
          <div>
            <span className="text-sm ml-8"> Sudah Punya Akun?</span>
            <Link to="/login">
              <span className="text-sm ml-2 text-[#3431A2] hover:text-blue-500 cursor-pointer">
                Masuk Sekarang
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
