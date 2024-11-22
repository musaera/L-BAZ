import React from 'react';
import { Link } from 'react-router-dom';

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
          {/* Apply Bootstrap and Tailwind CSS classes to make the image responsive */}
          <img
            className="w-64 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            src="/src/assets/logo.png"
            alt="Library Management System"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
