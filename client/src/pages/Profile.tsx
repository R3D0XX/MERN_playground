import React, { useEffect, useState } from "react";
import { User } from "../types/CustomTypes";

const Profile = () => {
  const getProfile = async () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  return (
    <div>
      {/* <h2>{user ? user.username : ""} Profile</h2>
      <button onClick={getProfile}>Get Profile</button>
      {user && <img src={user.userImage} style={{ width: "220px" }} />} */}
    </div>
  );
};

export default Profile;
