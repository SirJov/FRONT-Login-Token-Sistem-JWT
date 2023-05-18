import { useContext, useEffect, useState } from "react";
import FeedBody from "../../../Components/Body/PrivateRoutes/FeedBody/FeedBody";
import ContextFeed from "../../../Context/ContextFeed";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ContextUser from "../../../Context/ContextUser";
import ContextError from "../../../Context/ContextError";

export default function Feed() {
  const navigate = useNavigate();
  const [tokenUser, SetTokenUser] = useContext(ContextUser);
  const [feedData, SetFeedData] = useState(Array);
  const [ErrorData, SetUErrorData] = useContext(ContextError);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    async function DataFeed() {
      await axios
        .get("https://api-login-token-sistem-jwt.vercel.app/FeedGet", config)
        .then((response) => {
          return SetFeedData(response.data[1].obj);
        })

        .catch((error) => {
          const ErrorToken = error.response.data[0].error.name;

          if (ErrorToken == "JsonWebTokenError" || "TokenExpiredError") {
            SetUErrorData(ErrorToken);
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            SetTokenUser(undefined);
            return navigate("/");
          } else {
            return console.log(error);
          }
        });
    }
    DataFeed();
  }, []);
  return (
    <>
      <ContextFeed.Provider value={[feedData, SetFeedData]}>
        <FeedBody />
      </ContextFeed.Provider>
    </>
  );
}
