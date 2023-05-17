import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../Context/ContextFeed";
import ContextUser from "../../../../../Context/ContextUser";
import "./PostsFeed.css";
import { SelectImgProfile } from "../../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig";
import ComentsPost from "./ComentsPost/ComentsPost";

export default function PostsFeed() {
  const [feedData, SetFeedData] = useContext(ContextFeed);
  const [UserData, SetUserData] = useContext(ContextUser);

  const ComponentCards = feedData.map((iten) => {
    const dataComments = iten.comments;
    return (
      <div key={iten._id} className="CardsPostFeed">
        <div className="headerPostFeed">
          <div>
            <img src={SelectImgProfile(iten.imgAuthor)} />
            <p className="teste">{iten.userAuthor}</p>
          </div>

          <button>X</button>
        </div>
        <div className="bodyPostFeed">
          <p>{iten.body}</p>
        </div>
        <div>
          <div className="AreaLikes">
            <p>👌</p> <p>{iten.likesNumber}</p>
          </div>
        </div>
        <ComentsPost dataComments={dataComments} />
      </div>
    );
  });

  return <>{ComponentCards}</>;
}
