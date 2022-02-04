import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import MiniGamesBody from "./components/minigames-body";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar className="navbar" />
      <MiniGamesBody />
    </div>
  );
}

export default App;
