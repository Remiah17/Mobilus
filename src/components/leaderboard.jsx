import React, { useState, useEffect } from "react";
import LeaderItem from "./leaderboard-person-item";

function Leaderboard() {
  const [leaderboardPersons, SetLeaderboardPersons] = useState([]);

  const leaderboardDb = [
    {
      place: 1,
      name: "TomMameng",
      score: 2678325,
    },
    {
      place: 2,
      name: "Spiralendr",
      score: 2678324,
    },
    {
      place: 3,
      name: "LightningCube7",
      score: 1678325,
    },
    {
      place: 4,
      name: "likingfromftr",
      score: 1678225,
    },
    {
      place: 5,
      name: "dinofromftr",
      score: 1668455,
    },
    {
      place: 6,
      name: "ooffooff",
      score: 953892,
    },
    {
      place: 7,
      name: "Zarkien18",
      score: 795437,
    },
  ];

  useEffect(() => {
    SetLeaderboardPersons(leaderboardDb);
  }, []);

  return (
    <div className="App-header">
      <div className="home-img-container">
        <h1 className="leaderboard-title">Leaderboards</h1>
        <ul className="leaderboard-list-container">
          {leaderboardPersons.map((per, index) => {
            return (
              <LeaderItem place={per.place} name={per.name} score={per.score} />
            );
          })}
        </ul>
      </div>

      <img src="./images/CL.jpg" className="App-logo" alt="logo" />
      <p>Mobilus server for Minecraft.</p>
    </div>
  );
}

export default Leaderboard;
