import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Private from "../../Pages/Private/Private";

import "./BodyAplication.css";

export default function BodyAplication() {
  return (
    <div className="BodyAplication">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Feed" element={<Private />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
