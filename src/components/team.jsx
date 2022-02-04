import React from "react";
import TeamItem from "./team-item";

function Team() {
  const teamsDb = [
    {
      url: "./images/spirlendr.png",
      name: "SpiralEndr",
      position: "The god of the Server",
    },
    {
      url: "./images/LightningCube.png",
      name: "LightningCube7",
      position: "Map Builder",
    },
    {
      url: "./images/remiah17.png",
      name: "Remiah17",
      position: "Web Developer",
    },
    {
      url: "./images/likingfromftr.png",
      name: "VikingfromFtr",
      position: "Map Maker",
    },
    {
      url: "./images/dinofromftr.png",
      name: "DinofromFtr",
      position: "Map Tester",
    },
    {
      url: "./images/ooffoo.png",
      name: "OOFFOO",
      position: "Idea Giver",
    },
    {
      url: "./images/qwozyy.png",
      name: "qwozyy",
      position: "Map Tester",
    },
  ];

  return (
    <div className="App-header">
      <h1>Teams</h1>
      <div className="minigame-container">
        {teamsDb.map((tm, index) => {
          return (
            <TeamItem
              imgUrl={tm.url}
              title={tm.name}
              description={tm.position}
              key={index}
            />
          );
        })}
      </div>

      <img src="./images/CL.jpg" className="App-logo" alt="logo" />
      <p>Mobilus server for Minecraft.</p>
    </div>
  );
}

export default Team;
