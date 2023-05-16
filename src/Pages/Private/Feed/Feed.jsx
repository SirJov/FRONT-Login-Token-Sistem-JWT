import { useContext } from "react";
import FeedBody from "../../../Components/Body/PrivateRoutes/FeedBody/FeedBody";
import ContextFeed from "../../../Context/ContextFeed";

export default function Feed() {
  const [feedData, SetFeedData] = useContext(ContextFeed);
  return (
    <>
      <ContextFeed.Provider value={[feedData, SetFeedData]}>
        <FeedBody />
      </ContextFeed.Provider>
    </>
  );
}
