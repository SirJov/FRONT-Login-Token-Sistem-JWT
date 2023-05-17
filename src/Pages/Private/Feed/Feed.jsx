import { useContext, useEffect, useState } from "react";
import FeedBody from "../../../Components/Body/PrivateRoutes/FeedBody/FeedBody";
import ContextFeed from "../../../Context/ContextFeed";
import axios from "axios";

export default function Feed() {
  const [feedData, SetFeedData] = useState(Array);

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
          return console.log(error);
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
