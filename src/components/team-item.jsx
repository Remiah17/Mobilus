import React from "react";

function teamItem(prams) {
  return (
    <div className="minigame-item">
      <img src={prams.imgUrl} className="team-img" alt="minigame-img" />
      <h1 className="minigame-title">{prams.title}</h1>
      <p className="minigame-description">{prams.description}</p>
    </div>
  );
}

export default teamItem;
