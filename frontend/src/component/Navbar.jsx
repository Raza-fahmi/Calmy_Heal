import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo-mobile.png";
import DefaultAvatar from "../assets/image/default-avatar.jpg"; // Default foto pengguna

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk mengatur dropdown foto pengguna

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      document.body.style.paddingTop = "64px";
    } else {
      document.body.style.paddingTop = "0";
    }
  }, [isScrolled]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      // Check if user has photo, otherwise set default avatar
      const userWithAvatar = {
        ...userData,
        photo: userData.photo || DefaultAvatar,
      };
      setUser(userWithAvatar);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${
        isScrolled ? "fixed top-0 w-full z-50" : "relative"
      } bg-primary px-5 lg:px-12 py-4 flex justify-between lg:items-center transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-wrap gap-2">
        <img
          className="w-[50px] h-[36px] lg:w-[66px] lg:h-[47px]"
          src={Logo}
          alt="Logo"
        />
        <h1 className="text-fourt font-Montserrat font-bold text-[24px] lg:hidden">
          Calmy Heal
        </h1>
      </div>
      <div className="hidden lg:flex gap-4 lg:gap-12 lg:items-center text-fourt">
        <Link
          to="/"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Beranda
        </Link>
        <Link
          to="/Calmy-Challenge"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Calmy Challenge
        </Link>
        <Link
          to="/Calmy-Edu"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Calmy Edu
        </Link>
        <Link
          to="/Calmy-Meditation"
          className="hover:underline underline-offset-3  font-Montserrat"
        >
          Calmy Meditation
        </Link>
        <Link
          to="/Tentang-Calmy"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Tentang Calmy
        </Link>
      </div>
      {user ? (
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <img
              onClick={toggleDropdown}
              src={user.photo} // Gunakan foto pengguna atau foto default jika tidak ada
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-third rounded-md shadow-lg py-1 w-48 z-10">
                <Link
                  to="/Ubah-Sandi"
                  className="block px-4 py-2 text-sm hover:bg-seventh"
                >
                  {user.email}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-seventh"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
          <span className="text-white font-semibold">{user.name}</span>
        </div>
      ) : (
        <Link to="/Login">
          <button className="hidden lg:block bg-fourt text-secondary font-semibold px-4 py-2 rounded-[20px] lg:w-[162px] lg:h-[49px] shadow-md">
            Masuk
          </button>
        </Link>
      )}

      {/**Hamburger */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen && "open"
        } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-50 py-2`}
      >
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-fourt rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-fourt rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-fourt rounded-full"></span>
      </div>
      <div
        className={`flex flex-col absolute top-[64px] left-0 right-0 p-5 gap-6 bg-third border-t lg:hidden border-baseBlack/20 ${
          isOpen ? "translate-y-0" : "-translate-y-[130%]"
        } transition-all duration-500 ease-in-out`}
      >
        <Link
          to="/"
          className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Beranda
        </Link>
        <Link
          to="/Calmy-Challenge"
          className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Challenge
        </Link>
        <Link
          to="/Calmy-Edu"
          className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Edu
        </Link>
        <Link
          to="/Calmy-Meditation"
          className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Meditation
        </Link>
        <Link
          to="/Tentang-Calmy"
          className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Tentang Calmy
        </Link>
        {user ? (
          <button>
            <Link
              to="/Profile"
              className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Pengaturan Akun
            </Link>
            <Link
              to="/Notifikasi"
              className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Notifikasi
            </Link>
            <Link
              to="/Ubah-Sandi"
              className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Ubah Kata Sandi
            </Link>
            <button
              className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200 text-left w-full`}
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Keluar
            </button>
          </button>
        ) : (
          <Link
            to="/Login"
            className={`text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
