import React, { useState, useEffect } from "react";

function Login() {
  const [editionChecked, SetEditionChecked] = useState(false);
  const [isJava, SetToJava] = useState(false);

  const [newUser, SetNewUser] = useState({
    edition: "",
    name: "",
    password: "",
  });

  function HandleSubmit(e) {
    e.preventDefault();
    console.log(newUser);
  }

  function HandleInputChange(e) {
    const { value, name } = e.target;
    SetNewUser((prevVal) => {
      if (name === "edition") {
        if (value === "select") {
          SetEditionChecked(false);
          SetToJava(false);
        } else {
          SetEditionChecked(true);
          if (value === "java") {
            SetToJava(true);
          } else {
            SetToJava(false);
          }
          return {
            edition: value,
            name: prevVal.name,
            password: prevVal.password,
          };
        }
      } else if (name === "name") {
        return {
          edition: prevVal.edition,
          name: value,
          password: prevVal.password,
        };
      } else if (name === "password") {
        return {
          edition: prevVal.edition,
          name: prevVal.name,
          password: value,
        };
      }
    });
  }

  return (
    <div className="App-header">
      <div className="home-img-container">
        <h1>Login</h1>
        <label htmlFor="edition-select" className="form-label">
          Minecraft Edition:
        </label>
        <select
          id="edition-select"
          className="form-dropdown"
          defaultValue="select"
          name="edition"
          onChange={HandleInputChange}
        >
          <option value="select" className="form-dropdown-text">
            Select Edition
          </option>
          <option value="bedrock" className="form-dropdown-text">
            Bedrock Edition
          </option>
          <option value="java" className="form-dropdown-text">
            Java Edition
          </option>
        </select>
        {!editionChecked ? null : (
          <form className="form-container" onSubmit={HandleSubmit}>
            {isJava ? (
              <label htmlFor="name" className="form-label">
                Gamer Tag:
              </label>
            ) : (
              <label htmlFor="name" className="form-label">
                Minecraft Name:
              </label>
            )}
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              value={newUser.name}
              onChange={HandleInputChange}
              required
            />

            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
              value={newUser.password}
              onChange={HandleInputChange}
              required
            />

            <input type="submit" value="Login" className="form-button" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
