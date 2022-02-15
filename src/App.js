import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import HomeBody from "./components/home-body";
import MiniGames from "./components/mini-games";
import Leaderboard from "./components/leaderboard";
import Rules from "./components/rules";
import Team from "./components/team";
import Store from "./components/store";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route path="/Mobilus/" element={<HomeBody />} />
          <Route path="/Mobilus/home" element={<HomeBody />} />
          <Route path="/Mobilus/minigames" element={<MiniGames />} />
          <Route path="/Mobilus/leaderboard" element={<Leaderboard />} />
          <Route path="/Mobilus/rules" element={<Rules />} />
          <Route path="/Mobilus/team" element={<Team />} />
          <Route path="/Mobilus/store" element={<Store />} />
          <Route path="/Mobilus/register" element={<Register />} />
          <Route path="/Mobilus/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
