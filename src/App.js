import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import BodyAplication from "./Components/Body/BodyAplication";
import Footer from "./Components/Footer/Footer";
import ContextToken from "./Context/ContextToken";

function App() {
  const [TokenUser, SetTokenUser] = useState();
  
  return (
    <section className="App">
      <ContextToken.Provider value={[TokenUser, SetTokenUser]}>
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
