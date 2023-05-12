import "./ProfileHeader.css";

export default function ProfileHeader() {
  let userString = localStorage.getItem("userData");
  let userObj = JSON.parse(userString);

  return (
    <div className="ProfileHeader">
      <img />
      <p>{userObj.user}</p>
    </div>
  );
}
