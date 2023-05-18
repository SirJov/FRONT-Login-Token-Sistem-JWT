import { useContext } from "react";
import ContextToken from "../../../../../../../Context/ContextToken";
import ContextUser from "../../../../../../../Context/ContextUser";
import ContextFeed from "../../../../../../../Context/ContextFeed";
import "./BtnDelete.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BtnDelete({ id_card, id_postFeed, id_user }) {
  const [UserData, SetUserData] = useContext(ContextUser);
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [feedData, SetFeedData] = useContext(ContextFeed);

  const navigate = useNavigate();

  function QueryOptions() {
    if (id_postFeed === undefined) {
      const Res = {
        url: "https://api-login-token-sistem-jwt.vercel.app/DeletePostedFeed",
        id: { _id: id_card },
      };
      return Res;
    }
    if (id_postFeed) {
      const Res = {
        url: "https://api-login-token-sistem-jwt.vercel.app/DeleteCommentFeed",
        id: {
          _idPost: id_postFeed,
          _idComment: id_card,
        },
      };
      return Res;
    }
  }

  const DeleteCard = async () => {
    const token = tokenUser;

    const config = {
      data: QueryOptions().id,
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = await axios
      .delete(QueryOptions().url, config)
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
  };

  let userString = localStorage.getItem("userData");
  const userObj = JSON.parse(userString);

  if (id_user === userObj.id) {
    return <button onClick={DeleteCard}>X</button>;
  } else {
    return;
  }
}
