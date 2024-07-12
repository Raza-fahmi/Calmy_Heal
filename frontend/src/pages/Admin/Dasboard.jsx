import React, { useEffect, useState } from "react";
import Admin from "../../component/Admin";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      if (user.role === "admin") {
        setIsAdmin(true);
      } else {
        navigate("/not-authorized");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <div>Anda tidak memiliki akses ke halaman ini.</div>;
  }

  return (
    <div>
      <Admin />
    </div>
  );
}
