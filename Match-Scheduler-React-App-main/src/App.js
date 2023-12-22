import "./App.css";
// import { useState } from "react";
import Header from "./components/Header";
// import Dropdown from "./components/Dropdown";
import Home from "./screens/Home";
import FriendlyMatch from "./screens/FriendlyMatch";
import TournamentMatch from "./screens/TournamentMatch";
import TeamVsTeam from "./screens/TeamVsTeam";
import { Routes, Route } from "react-router-dom";
import TableScreen from "./screens/TableScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friendly" element={<FriendlyMatch />} />
        <Route path="/tournament" element={<TournamentMatch />} />
        <Route path="/teamVsteam" element={<TeamVsTeam />} />
        <Route path="/tablescreen" element={<TableScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
