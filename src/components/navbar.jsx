import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function MenuAppBar() {
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const handleChange = (event) => {
    let currentaccount = event.target.value;
    console.log("account set to " + event.target.value);
    if (currentaccount === "Register") {
      window.location.href = "/register";
    } else if (currentaccount === "Login") {
      window.location.href = "/login";
    }
  };

  return (
    <div className="navbar">
      <a href="/Mobilus/home" className="navbar-button">
        <HomeIcon fontSize="small" />
      </a>

      <a href="/Mobilus/minigames" className="navbar-button">
        Mini-games
      </a>
      <a href="/Mobilus/leaderboard" className="navbar-button">
        Leaderboards
      </a>
      <a href="/Mobilus/rules" className="navbar-button">
        Rules
      </a>
      <a href="/Mobilus/team" className="navbar-button">
        Team
      </a>
      <a href="/Mobilus/store" className="navbar-button">
        Store
      </a>
      <select
        name="accounts"
        id="accounts"
        className="account-button"
        onChange={handleChange}
      >
        <option value="Account">Account</option>
        <option value="Login" href="/Mobilus/login">
          Login
        </option>
        <option value="Register" href="/Mobilus/register">
          Register
        </option>
      </select>
    </div>
  );
}
