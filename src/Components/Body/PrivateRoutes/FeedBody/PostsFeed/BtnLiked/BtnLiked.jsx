import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../../Context/ContextFeed";
import ContextToken from "../../../../../../Context/ContextToken";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./BtnLiked.css";

export default function BtnLiked({ Numberlikes, iten_id }) {
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [feedData, SetFeedData] = useContext(ContextFeed);

  let userString = localStorage.getItem("userData");
  let userObj = JSON.parse(userString);
  const navigate = useNavigate();

  const Exist = Numberlikes.indexOf(userObj.id);

  const LikedPostFeed =
    "https://api-login-token-sistem-jwt.vercel.app/LikedPostFeed";
  const DesLikedPostFeed =
    "https://api-login-token-sistem-jwt.vercel.app/DesLikedPostFeed";
  const token = tokenUser;

  async function PutLiked(url) {
    const params = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      _idPost: iten_id,
      _idAuthorLikedt: userObj.id,
    };

    const data = await axios
      .put(url, body, params)
      .then((response) => {
        return SetFeedData(response.data[1].obj);
      })
      .catch((error) => {
        const ErrorToken = error.response.data[0].error.name;

        if (ErrorToken == "JsonWebTokenError" || "TokenExpiredError") {
          localStorage.removeItem("userData");
          localStorage.removeItem("token");
          SetTokenUser(undefined);
          return navigate("/");
        }
      });
    return data;
  }

  if (Exist > -1) {
    return (
      <p
        onClick={() => {
          PutLiked(DesLikedPostFeed);
        }}
        className="btnIsLiked"
      >
        👌
      </p>
    );
  }
  if (Exist === -1) {
    return (
      <p
        onClick={() => {
          PutLiked(LikedPostFeed);
        }}
        className="btnNotLiked"
      >
        👌
      </p>
    );
  }
}
