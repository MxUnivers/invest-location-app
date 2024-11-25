// src/components/Home.js
import React from "react";
import ProfileBarner from "../components/profile/ProfileBarner";
import ProfileDescription from "../components/profile/ProfileDescription";

function ProfilePage() {
  return (
    <div className="home">
      <ProfileBarner/>
      <ProfileDescription/>
    </div>
  );
}

export default ProfilePage;
