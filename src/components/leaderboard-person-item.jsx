import React from "react";

function personItem(prams) {
  return (
    <li className="leaderboard-person-list-item">
      <p className="leaderboard-person-list-text">{prams.place}</p>
      <p className="leaderboard-person-list-text">{prams.name}</p>
      <p className="leaderboard-person-list-text">{prams.score} points</p>
    </li>
  );
}

export default personItem;
