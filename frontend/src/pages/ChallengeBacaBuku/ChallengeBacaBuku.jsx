// ChallengeBacaBuku.js

import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ArtikelBacaBuku from "../../component/ArtikelBacaBuku";
import KategoriBacaBuku from "../../component/KategoriBacaBuku";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

export default function ChallengeBacaBuku() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe())
      .then(() => {
        // Lakukan sesuatu setelah login berhasil, jika diperlukan
      })
      .catch(() => {
        history.replace("/login");
      });
  }, [dispatch, history]);

  return (
    <div>
      <Navbar />
      <ArtikelBacaBuku />
      <KategoriBacaBuku />
      <Footer />
    </div>
  );
}
