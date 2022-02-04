import React, { useState, useEffect } from "react";

function Header() {
  const [editionChecked, SetEditionChecked] = useState(false);
  const [isJava, SetToJava] = useState(false);

  const [newUser, SetNewUser] = useState({
    edition: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
            email: prevVal.email,
            password: prevVal.password,
            confirmPassword: prevVal.confirmPassword,
          };
        }
      } else if (name === "name") {
        return {
          edition: prevVal.edition,
          name: value,
          email: prevVal.email,
          password: prevVal.password,
          confirmPassword: prevVal.confirmPassword,
        };
      } else if (name === "email") {
        return {
          edition: prevVal.edition,
          name: prevVal.name,
          email: value,
          password: prevVal.password,
          confirmPassword: prevVal.confirmPassword,
        };
      } else if (name === "password") {
        return {
          edition: prevVal.edition,
          name: prevVal.name,
          email: prevVal.email,
          password: value,
          confirmPassword: prevVal.confirmPassword,
        };
      } else if (name === "confirmpassword") {
        return {
          edition: prevVal.edition,
          name: prevVal.name,
          email: prevVal.email,
          password: prevVal.password,
          confirmPassword: value,
        };
      }
    });
  }

  return (
    <div className="App-header">
      <div className="home-img-container">
        <h1>Register</h1>
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

            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              value={newUser.email}
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

            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="form-input"
              value={newUser.confirmPassword}
              onChange={HandleInputChange}
              required
            />

            <input type="submit" value="Register" className="form-button" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;
