import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-fourt font-Montserrat">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-4 sm:ml-64">
        <main className="p-5">
          {/* Konten utama aplikasi admin */}
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Admin Calmy Heal
          </h1>
          <p className="mt-4 text-gray-600">
            Selamat datang di dashboard admin Calmy Heal. Anda dapat mengelola
            berbagai fitur dan konten di sini.
          </p>
        </main>
      </div>
    </div>
  );
}
