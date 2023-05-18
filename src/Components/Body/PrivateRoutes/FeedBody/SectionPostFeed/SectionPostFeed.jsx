import axios from "axios";
import "./SectionPostFeed.css";
import ContextToken from "../../../../../Context/ContextToken";
import ContextFeed from "../../../../../Context/ContextFeed";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputsFeed from "./InputsFeed/InputsFeed";

export default function SectionPostFeed() {
  const [tokenUser, SetTokenUser] = useContext(ContextToken);
  const [feedData, SetFeedData] = useContext(ContextFeed);
  const navigate = useNavigate();

  const GetFeed = async () => {
    const token = tokenUser;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = await axios
      .get("https://api-login-token-sistem-jwt.vercel.app/FeedGet", config)
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

  return (
    <div className="SectionPostFeed">
      <div className="FuncionalitComponentsPostFeed">
        <p>Nova Postagem</p>
        <InputsFeed />
        <div className="BtnTopRefrech">
          <button>
            <a href="#Topo">⇧</a>
          </button>
          <button onClick={GetFeed}>↻</button>
        </div>
      </div>
    </div>
  );
}
