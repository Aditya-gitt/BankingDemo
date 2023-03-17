import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UPLOADDOCS_URL } from "../constants/rout_urls";
import { UserAuth } from "../context/AuthAndAccountContext";

const Register = () => {
  const { addAccount } = UserAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  const addNewAccount = () => {
    if (type === "current") {
      console.log(`hmm`);
      navigate(UPLOADDOCS_URL, {
        state: { name, type, password },
      });
    } else {
      addAccount({ name, type, password });
      alert("You are registered successfully.");
      navigate("/");
    }
  };

  return (
    <>
      <div class="container">
        <form onSubmit={addNewAccount}>
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
          Account type:
          {/* <input
            //put options here with savings and current
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setType(e.target.value);
            }}
            value={type}
          /> */}
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-lg example"
            onChange={(e) => {
              e.preventDefault();
              setType(e.target.value);
            }}
          >
            <option selected value="savings">
              savings
            </option>
            <option value="current">current</option>
          </select>
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
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
