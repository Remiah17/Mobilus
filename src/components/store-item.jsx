import React from "react";

function storeItem(prams) {
  return (
    <div className="store-item">
      <img src={prams.imgUrl} className="store-img" alt="minigame-img" />
      <h1 className="store-title">{prams.title}</h1>
      <p className="store-description">{prams.description}</p>
      <button className="store-buy-button">{prams.price}</button>
    </div>
  );
}

export default storeItem;
