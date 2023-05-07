import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Private from "../../Pages/Private/Private";

import "./BodyAplication.css";

export default function BodyAplication() {
  return (
    <section className="BodyAplication">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Feed" element={<Private />} />
      </Routes>
    </section>
  );
}
