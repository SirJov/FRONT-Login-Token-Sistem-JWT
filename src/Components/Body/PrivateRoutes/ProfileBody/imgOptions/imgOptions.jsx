import { useContext, useEffect, useState } from "react";
import "./imgOptions.css";
import axios from "axios";

import ContextUser from "../../../../../Context/ContextUser";
import ContextToken from "../../../../../Context/ContextToken";
import ContextError from "../../../../../Context/ContextError";

import { useNavigate } from "react-router-dom";

const {
  ArrayImgs,
} = require("../../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig");

export default function ImgOptions({
  imgSelected,
  SetImgSelected,
  newUserName,
}) {
  const [UserData, SetUserData] = useContext(ContextUser);
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [ErrorData, SetUErrorData] = useContext(ContextError);
  const [dataPut, setDataPut] = useState({});
  const navigate = useNavigate();

  let userString = localStorage.getItem("userData");
  const userObj = JSON.parse(userString);

  useEffect(() => {
    if (!newUserName || newUserName === " ") {
      setDataPut({
        email: userObj.email,
        user: userObj.user,
        imgProfile: imgSelected,
      });
    } else {
      setDataPut({
        email: userObj.email,
        user: newUserName,
        imgProfile: imgSelected,
      });
    }
  }, [imgSelected, newUserName]);

  //useEffect(() => {
  //  console.log(dataPut);
  //}, [dataPut]);

  const putProfile = async () => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    await axios
      .put(
        "https://api-login-token-sistem-jwt.vercel.app/PutUser",
        dataPut,
        config
      )
      .then((response) => {
        if (response.data[1]) {
          SetUserData(response.data[1]);
          localStorage.setItem("userData", JSON.stringify(response.data[1]));
          navigate(`/${response.data[1].user}/Profile`);
        }
      })
      .catch((error) => {
        const ErrorToken = error.response.data[0].error.name;

        if (ErrorToken == "JsonWebTokenError" || "TokenExpiredError") {
          SetUErrorData(ErrorData);
          localStorage.removeItem("userData");
          localStorage.removeItem("token");
          SetTokenUser(undefined);
          return navigate("/");
        } else {
          return console.log({ error: error, msg: "put imgOptions" });
        }
      });
  };

  function imgUserSelected(iten) {
    SetImgSelected(iten);
  }

  return (
    <div className="ImgOptions">
      <div className="ImgOptionsIcon">
        {ArrayImgs.map((iten) => {
          return (
            <img
              src={iten.img}
              key={iten.nameImg}
              onClick={(ev) => {
                imgUserSelected(iten.nameImg);
              }}
            />
          );
        })}
      </div>
      <div className="ImgOptionsImput">
        <button onClick={putProfile}>Salvar</button>
      </div>
    </div>
  );
}
