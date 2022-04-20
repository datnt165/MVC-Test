import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/login.css";
//do something...

function Login() {
  const [stateNotification, setStateNotification] = useState("");
  const [details, setDetails] = useState({ username: "", password: "" });
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

    let res = accounts.filter((account) => {
      return (
        account.username === details.username &&
        account.password === details.password
      );
    });

    if (res.length === 0) {
      setStateNotification("Username or Passord is not correct!");
      return;
    }
    if (res.length !== 1) {
      setStateNotification("Something is wrong, please try again!");
      return;
    }
    setStateNotification("Login Successful!");
    window.location.href = "/";
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
              <h2 className="title-form">Login</h2>
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
              <div className="register-ref">
                Do not have a account? register <a href="/register">here!</a>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Login"
                className="form-group-input submit-button"
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;

// class Login extends Component {
//   state = {};

//   constructor(){
//     super();

//   }

//   render() {
//     return (

//     );
//   }
// }

// export default Login;
