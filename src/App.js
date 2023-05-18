import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import BodyAplication from "./Components/Body/BodyAplication";
import ContextToken from "./Context/ContextToken";
import ContextUser from "./Context/ContextUser";
import ContextError from "./Context/ContextError";

function App() {
  const [TokenUser, SetTokenUser] = useState();
  const [UserData, SetUserData] = useState();
  const [ErrorData, SetUErrorData] = useState();

  useEffect(() => {
    let userString = localStorage.getItem("userData");
    const userObj = JSON.parse(userString);

    if (userObj) {
      SetUserData(userObj);
    }

    const token = localStorage.getItem("token");
    if (token) {
      SetTokenUser(token);
    }
    return;
  }, []);

  return (
    <section className="App">
      <ContextError.Provider value={[ErrorData, SetUErrorData]}>
        <ContextToken.Provider value={[TokenUser, SetTokenUser]}>
          <ContextUser.Provider value={[UserData, SetUserData]}>
            <BrowserRouter>
              <Header />
              <BodyAplication />
            </BrowserRouter>
          </ContextUser.Provider>
        </ContextToken.Provider>
      </ContextError.Provider>
    </section>
  );
}

export default App;
