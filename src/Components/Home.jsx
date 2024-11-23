import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col text-center">
          <h2 className="h2 mt-3">Selamat Datang di</h2>
          <h1 className="h1 mt-1 text-blue-600">L-BAZ</h1>
          <p className="p">
            Kelola Pembukuan Anda dengan mudah menggunakan LIBAZ
          </p>
          {/* Teks Berjalan */}
          <div className="overflow-hidden bg-blue-100 py-2 mt-4 mb-7">
            <div className="whitespace-nowrap animate-marquee text-blue-600 font-bold text-lg">
              "Jalani hidup dengan penuh semangat! Kesuksesan dimulai dari
              langkah kecil yang konsisten. Jangan pernah menyerah pada impian
              Anda!"
            </div>
          </div>
          {/* Gambar */}
          <img
            className="w-64 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-4"
            src="/src/assets/logo.png"
            alt="Library Management System"
          />
        </div>
      </div>
      {/* Tambahkan animasi marquee di Tailwind */}
      <style>
        {`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          @layer utilities {
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
