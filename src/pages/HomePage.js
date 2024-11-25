// src/components/Home.js
import React from "react";
import CategoryHome from "../components/home/CategoryHome";
import CategoryMore from "../components/home/CategoryMore";
import ProfileMapList from "../components/home/ProfileMapList";
import ProfileListHome from "../components/home/ProfileListHome";
import CounterHome from "../components/home/CounterHome";
import TestimonialHome from "../components/home/TestimonialHome";

function Home() {
    return (
        <>
            <ProfileMapList />
            <ProfileListHome />
            <CounterHome />
            <CategoryHome />
            <TestimonialHome />
        </>
    );
}

export default Home;
