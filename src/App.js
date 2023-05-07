import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import BodyAplication from "./Components/Body/BodyAplication";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />
        <BodyAplication />
      </BrowserRouter>
      <Footer />
    </section>
  );
}

export default App;
