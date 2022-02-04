import React from "react";

function minigameItem(prams) {
  return (
    <div className="minigame-item">
      <img src={prams.imgUrl} className="minigame-img" alt="minigame-img" />
      <h1 className="minigame-title">{prams.title}</h1>
      <p className="minigame-description">{prams.description}</p>
    </div>
  );
}

export default minigameItem;
