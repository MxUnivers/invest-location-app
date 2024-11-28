// src/components/Home.js
import React, { useEffect } from "react";
import ProfileBarner from "../components/profile/ProfileBarner";
import ProfileDescription from "../components/profile/ProfileDescription";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, fetchUsersAll } from "../actions/request/UserRequest";
import { useParams } from "react-router-dom";
import { getAndCheckLocalStorage } from "../config/localvalueFuction";
import { localStorageKeys } from "../config/localvalue";

function ProfilePage() {

 

  return (
    <div className="home">
      <ProfileBarner/>
      <ProfileDescription/>
    </div>
  );
}

export default ProfilePage;
