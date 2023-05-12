import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import BodyAplication from "./Components/Body/BodyAplication";
import Footer from "./Components/Footer/Footer";
import ContextToken from "./Context/ContextToken";

function App() {
  const [TokenUser, SetTokenUser] = useState();
  const [UserData, SetUserData] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      SetTokenUser(token);
    }
    return;
  }, []);

  return (
    <section className="App">
      <ContextToken.Provider
        value={([TokenUser, SetTokenUser], [UserData, SetUserData])}
      >
        <BrowserRouter>
          <Header />
          <BodyAplication />
        </BrowserRouter>
      </ContextToken.Provider>
      <Footer />
    </section>
  );
}

export default App;
