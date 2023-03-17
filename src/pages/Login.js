import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BANK_URL, HOME_URL, REGISTER_URL } from "../constants/rout_urls";
import { UserAuth } from "../context/AuthAndAccountContext";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = UserAuth();

  const login = () => {
    if (authenticate({ name, password })) {
      alert("You are now loged in.");
      navigate(`${BANK_URL}${HOME_URL}`);
    } else alert("Bad credentials!");
  };

  return (
    <>
      <div class="container">
        <form onSubmit={login}>
          Name/Company name:{" "}
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
            value={name}
          />
          <br />
          password:{" "}
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            value={password}
          />
          <br />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <br />
          <a onClick={(e) => navigate(REGISTER_URL)}>new to the bank?</a>
        </form>
      </div>
    </>
  );
};

export default Login;
