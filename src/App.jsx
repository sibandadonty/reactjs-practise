import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddMeetUp from "./pages/AddMeetUp";
import AllMeetUps from "./pages/AllMeetUps";
import FavouriteMeetUps from "./pages/FavouriteMeetUps";

function App() {
  return <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<AllMeetUps />} />
         <Route path="/add" element={<AddMeetUp />} />
         <Route path="/favorites" element={<FavouriteMeetUps />} />
       </Routes>
     </BrowserRouter>
  </div>;
}

export default App;
