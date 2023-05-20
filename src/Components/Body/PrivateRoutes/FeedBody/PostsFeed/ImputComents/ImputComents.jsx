import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../../Context/ContextFeed";
import ContextUser from "../../../../../../Context/ContextUser";
import ContextToken from "../../../../../../Context/ContextToken";
import ContextError from "../../../../../../Context/ContextError";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ImputComents.css";

export default function ImputComents({ _id }) {
  const [UserData, SetUserData] = useContext(ContextUser);
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [feedData, SetFeedData] = useContext(ContextFeed);
  const [ErrorData, SetUErrorData] = useContext(ContextError);

  const [Data, setData] = useState();
  const [textArea, setTextArea] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const dataPost = {
      _id: _id,
      _idAuthorComment: UserData.id,
      userAuthorComment: UserData.user,
      imgAuthorComment: UserData.imgProfile,
      bodyComment: textArea,
    };
    setData(dataPost);
  }, [textArea]);

  const InsertComment = async () => {
    const token = tokenUser;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = await axios
      .put(
        "https://api-login-token-sistem-jwt.vercel.app/CreateCommentFeed",
        Data,
        config
      )
      .then((response) => {
        return SetFeedData(response.data[1].obj);
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
          return error;
        }
      });
    setTextArea("");
    return data;
  };

  return (
    <div className="ImputComents">
      <textarea
        onChange={(ev) => {
          setTextArea(ev.target.value);
        }}
        placeholder="Add comentario"
        value={textArea}
      ></textarea>
      <button onClick={InsertComment}>Comentar</button>
    </div>
  );
}
