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
          <Route path="/" element={<HomeBody />} />
          <Route path="/home" element={<HomeBody />} />
          <Route path="/minigames" element={<MiniGames />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/team" element={<Team />} />
          <Route path="/store" element={<Store />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
