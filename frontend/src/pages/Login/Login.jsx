import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logofix.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      if (response.data.uuid) {
        // Simpan informasi pengguna di localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        // Periksa role dari response
        if (response.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setMsg("Failed to login");
      }
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
          <img src={logo} alt="" width={390} />
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white ">
        <p className="text-red-600">{msg}</p>
        <form onSubmit={Auth} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Masuk ke Akun Anda
          </h1>

          <label className="block text-md mb-2 my-3" htmlFor="email">
            E-mail
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
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            Kata Sandi
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <span className="text-sm ml-1">Ingat Saya</span>
            </div>
            <span className="text-sm ml-1 text-[#3431A2] hover:underline cursor-pointer">
              Lupa Kata Sandi?
            </span>
          </div>
          <button
            type="submit"
            className="block w-full bg-[#02607E] mt-4 py-2 rounded-2xl text-white font-semibold mb-6"
          >
            Masuk
          </button>
          <div>
            <span className="text-sm ml-4">Belum Punya Akun?</span>
            <Link to="/register">
              <span className="text-sm ml-1 text-[#3431A2] hover:text-blue-500 cursor-pointer">
                Buat Akun Sekarang!
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
