import "./App.css";
import Header from "./Components/Header/Header";
import BodyAplication from "./Components/Body/BodyAplication";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <Header />
      <BodyAplication />
      <Footer />
    </section>
  );
}

export default App;
