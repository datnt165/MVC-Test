import React, { useState, useEffect } from "react";
// import { writeJsonFile } from "write-json-file";
// import * as fs from 'fs';

const Register = () => {
  const [stateNotification, setStateNotification] = useState("");
  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirm: "",
  });
  const [accounts, setAccounts] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    if (details.username === "") {
      setStateNotification("Empty Username Field!");
      return;
    }

    if (details.password === "") {
      setStateNotification("Empty Password Field!");
      return;
    }

    if (details.confirm === "") {
      setStateNotification("Empty Confirm Password Field!");
      return;
    }

    if (details.confirm !== details.password) {
      setStateNotification("Confirm Password is not the same as Password!");
      return;
    }

    let res = accounts.filter((account) => {
      return (
        account.username === details.username &&
        account.password === details.password
      );
    });

    if (res.length !== 0) {
      setStateNotification(
        "Your username has been chosen, please try for other!"
      );
      return;
    }
    // var fs = window.require.js;
    // console.log(fs)
    var newAccounts = {
      username: details.username,
      password: details.password,
    };
    accounts.push(newAccounts);
    setAccounts(accounts);
    // var json = JSON.stringify(accounts);
    // fs.writeFile('accounts.json', json);
    // var blob = new Blob([json], {type: "application/json"});
    // var FileSaver = require('file-saver');
    // FileSaver.saveAs(blob, "accounts.json");
    // .then(() => {
    //   console.log("Complete!");
    //   setStateNotification("Your account has been created successfully!");
    //   window.location.href = "/login";
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const getAccounts = () => {
    fetch("accounts.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setAccounts(myJson);
      });
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <form className="form" onSubmit={submitHandler}>
          <div className="form-inner">
            <div className="form-group">
              <h2 className="title-form">Register</h2>
            </div>
            <div className="form-group">
              <div className="state-notification">{stateNotification}</div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-group-input"
                placeholder="Your username.."
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-group-input"
                placeholder="Your password.."
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Confirm Password </label>
              <input
                type="confirm"
                name="confirm"
                id="confirm"
                className="form-group-input"
                placeholder="Your confirm password.."
                onChange={(e) =>
                  setDetails({ ...details, confirm: e.target.value })
                }
                value={details.confirm}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Register"
                className="form-group-input submit-button"
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
