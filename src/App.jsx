import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddMeetUp from "./pages/AddMeetUp";
import AllMeetUps from "./pages/AllMeetUps";
import FavouriteMeetUps from "./pages/FavouriteMeetUps";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllMeetUps />} />
          <Route path="/add" element={<AddMeetUp />} />
          <Route path="/favorites" element={<FavouriteMeetUps />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
