import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthAndAccountContext";

const UploadDocs = () => {
  const location = useLocation();
  const { addAccount } = UserAuth();
  const navigate = useNavigate();
  const [alertStyle, setAlertStyle] = useState({ display: "none" });
  const [address, setAddress] = useState("");
  const [licence, setLicence] = useState("");

  // useEffect(() => {
  //   console.log(`${location.state.name}`);
  // }, []);

  const verifyi = (e) => {
    e.preventDefault();
    console.log(`in verify.`);
    const account = location.state;
    console.log(`${account.name}`);
    account.address = address;
    account.licence = licence;
    addAccount(account);
    setAlertStyle({ margin: "0px" });
    setTimeout(() => {
      alert("You are now verified redirecting to login page");
      navigate("/");
    }, 5000);
  };

  return (
    <>
      <div
        class="alert alert-warning"
        id="alert"
        style={alertStyle}
        role="alert"
      >
        wait your information is being verified...
      </div>

      <div class="container">
        <form onSubmit={verifyi}>
          Enter Your Office address <br />
          <input
            onChange={(e) => {
              e.preventDefault();
              setAddress(e.target.value);
            }}
            value={address}
          />
          <br />
          Enter licence id <br />
          <input
            onChange={(e) => {
              e.preventDefault();
              setLicence(e.target.value);
            }}
            value={licence}
          />
          <br />
          <button type="submit" class="btn btn-primary">
            Verify
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadDocs;
