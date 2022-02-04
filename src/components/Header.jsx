import React, { useEffect, useState } from "react";

function Header() {
  const [usercount, SetUserCount] = useState(0);
  const [over, setOver] = useState(false);

  //database
  const playercount = 50000;

  useEffect(() => {
    SetUserCount(playercount);
  }, []);

  function preventDragHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="header-container">
      <img
        src={over ? "./images/logo-blue.png" : "./images/logo.png"}
        alt="mobilous-logo"
        className="mobilous-logo"
        onDragStart={preventDragHandler}
        onMouseOver={() => {
          setOver(!over);
        }}
        onMouseOut={() => {
          setOver(!over);
        }}
      />
      <div className="right-header-container">
        <p className="join-text">Join {usercount}+ PLAYERS ONLINE</p>
        <button className="play-now-button">
          <a href="/playnow">PLAY NOW!</a>
        </button>
        <p className="join-text">
          SERVER IP: <a href="/playnow">PLAY.MOBILOUS.MC</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
