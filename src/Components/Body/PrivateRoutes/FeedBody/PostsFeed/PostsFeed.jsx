import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../Context/ContextFeed";
import ContextUser from "../../../../../Context/ContextUser";
import "./PostsFeed.css";
import { SelectImgProfile } from "../../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig";
import ComentsPost from "./ComentsPost/ComentsPost";
import BtnDelete from "./ComentsPost/BtnDelete/BtnDelete";
import ImputComents from "./ImputComents/ImputComents";
import BtnLiked from "./BtnLiked/BtnLiked";

export default function PostsFeed() {
  const [feedData, SetFeedData] = useContext(ContextFeed);
  const [UserData, SetUserData] = useContext(ContextUser);

  const ComponentCards = feedData.map((iten) => {
    const dataComments = iten.comments;
    const Numberlikes = iten.likesNumber;
    return (
      <div key={iten._id} className="CardsPostFeed">
        <div className="headerPostFeed">
          <div>
            <img src={SelectImgProfile(iten.imgAuthor)} />
            <p className="teste">{iten.userAuthor}</p>
          </div>

          <BtnDelete id_card={iten._id} id_user={iten._idAuthor} />
        </div>
        <div className="bodyPostFeed">
          <p>{iten.body}</p>
        </div>
        <div>
          <div className="AreaLikes">
            <BtnLiked />
            <p>{Numberlikes.length}</p>
            <ImputComents _id={iten._id} />
          </div>
        </div>
        <ComentsPost dataComments={dataComments} id_postFeed={iten._id} />
      </div>
    );
  });

  return <>{ComponentCards}</>;
}
