// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import LayoutWeb from "./layout/LayoutWeb";
import { routing } from "./config/routing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={""} element={<LayoutWeb/>}>
          <Route path="" element={<HomePage />} />
          <Route path={`${routing.search}`} element={<SearchPage />} />
          <Route path={`${routing.profile_view}`} element={<ProfilePage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
