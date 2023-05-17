import "./FeedBody.css";
import SectionPostFeed from "./SectionPostFeed/SectionPostFeed";
import PostsFeed from "./PostsFeed/PostsFeed";

import ContextFeed from "../../../../Context/ContextFeed";
import { useContext, useEffect } from "react";

export default function FeedBody() {
  const [feedData, SetFeedData] = useContext(ContextFeed);

  return (
    <div className="FeedBody">
      <SectionPostFeed />
      <div className="FeedBodyColum">
        <PostsFeed />
      </div>
    </div>
  );
}
