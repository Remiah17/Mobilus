import axios from "axios";

const ping = axios.create({
  withCredentials: false,
  baseURL: "https://status.mojang.com/check", //green-noIssue yellow-someIssue red-serviceUnavailable
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

const minecraftProfile = axios.create({
  withCredentials: false,
  baseURL: "https://api.mojang.com/users/profiles/minecraft",
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

export default ping;
export var profile = minecraftProfile;
