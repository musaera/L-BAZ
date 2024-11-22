import React from "react";
import NavBar from "./NavBar"; // Pastikan jalur file NavBar sesuai
import ProfileDevelopers from "./ProfileDevelopers"; // Pastikan jalur file ProfileDevelopers sesuai

const Developer = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Our Developers</h1>
        <p className="mt-2 text-lg px-3">
          Anggota-anggota dari Kelompok 2 dengan Project Manajemen Perpustakaan
        </p>
      </header>

      {/* Profiles */}
      <main className="py-8">
        <ProfileDevelopers />
      </main>
    </div>
  );
};

export default Developer;
