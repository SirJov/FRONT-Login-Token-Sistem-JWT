import { useEffect, useState } from "react";

import { SelectImgProfile } from "./imgProfileConfig";

import "./ProfileHeader.css";

export default function ProfileHeader() {
  const [imgProfileState, setImgProfileState] = useState("user_default");
  const [userNameProfile, setUserNameProfile] = useState("");

  let userString = localStorage.getItem("userData");
  const userObj = JSON.parse(userString);

  useEffect(() => {
    setUserNameProfile(userObj.user);
    setImgProfileState(userObj.imgProfile);
  }, []);

  useEffect(
    () => {
      setUserNameProfile(userObj.user);
      setImgProfileState(userObj.imgProfile);
    },
    [imgProfileState],
    [setUserNameProfile]
  );

  return (
    <div className="ProfileHeader">
      <img src={SelectImgProfile(imgProfileState)} />
      <p>{userNameProfile}</p>
    </div>
  );
}
