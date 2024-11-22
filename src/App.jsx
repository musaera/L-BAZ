import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import Edit from "./Components/Edit";
import Create from "./Components/Create";
import Developer from "./Components/Developer"; // Tambahkan import Developer

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#ffffff]">
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/details/:id" element={<Details />} />
              <Route path="/dashboard/:id/edit" element={<Edit />} />
              <Route path="/create" element={<Create />} />
              <Route path="/developer" element={<Developer />} />{" "}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
