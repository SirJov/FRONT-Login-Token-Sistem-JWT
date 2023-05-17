import { useContext, useEffect, useState } from "react";
import ContextFeed from "../../../../../../Context/ContextFeed";
import ContextUser from "../../../../../../Context/ContextUser";
import "./ComentsPost.css";
import { SelectImgProfile } from "../../../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig";

export default function ComentsPost({ dataComments }) {
  if (dataComments) {
    const ComentsPost = dataComments.map((i) => {
      return (
        <div key={i._id} className="CardCommentsPost">
          <div className="headerCommentsPost">
            <div>
              <img
                className="imgAuthorComment"
                src={SelectImgProfile(i.imgAuthorComment)}
              />
              <p className="userAuthorComment">{i.userAuthorComment}</p>
            </div>
            <button>X</button>
          </div>
          <div>
            <p className="bodyComment">{i.bodyComment}</p>
          </div>
        </div>
      );
    });

    return <div className="ComentsPost">{ComentsPost}</div>;
  }
}
