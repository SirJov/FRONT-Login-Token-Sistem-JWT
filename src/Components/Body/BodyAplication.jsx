import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Feed from "../../Pages/Private/Feed/Feed";
import Profile from "../../Pages/Private/Profile/Profile";
import OtherProfiles from "../../Pages/Private/OtherProfiles/OtherProfiles";

import "./BodyAplication.css";

export default function BodyAplication() {
  return (
    <section className="BodyAplication">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Feed" element={<Feed />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/OtherProfiles" element={<OtherProfiles />} />
      </Routes>
    </section>
  );
}
 