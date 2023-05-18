import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../../Context/ContextFeed";
import ContextToken from "../../../../../../Context/ContextToken";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./InputsFeed.css";

export default function InputsFeed() {
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [feedData, SetFeedData] = useContext(ContextFeed);

  const [Data, setData] = useState();
  const [textArea, setTextArea] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let userString = localStorage.getItem("userData");
    let userObj = JSON.parse(userString);

    const dataPost = {
      _idAuthor: userObj.id,
      userAuthor: userObj.user,
      imgAuthor: userObj.imgProfile,
      body: textArea,
    };
    setData(dataPost);
  }, [textArea]);

  const InsertPostFeed = async () => {
    const token = tokenUser;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = await axios
      .post(
        "https://api-login-token-sistem-jwt.vercel.app/CreateFeed",
        Data,
        config
      )
      .then((response) => {
        return SetFeedData(response.data[1].obj);
      })
      .catch((error) => {
        console.log(error);
        const ErrorToken = error.response.data[0].error.name;

        if (ErrorToken == "JsonWebTokenError" || "TokenExpiredError") {
          localStorage.removeItem("userData");
          localStorage.removeItem("token");
          SetTokenUser(undefined);
          return navigate("/");
        }
      });
    return data;
  };

  
  return (
    <div className="InputsFeed">
      <textarea
        onChange={(ev) => {
          setTextArea(ev.target.value);
        }}
      />
      <button onClick={InsertPostFeed}>Postar</button>
    </div>
  );
}
