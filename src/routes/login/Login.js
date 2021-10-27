import React, { useEffect, useState } from "react";

import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useHistory } from "react-router-dom";

import api from "../../api";

import "./styles.css";
import { ADD_USER } from "../../api/constants";

const Login = () => {
  const [userLoginCredentials, setUserLoginCredentials] = useState({
    user_id: "",
    password: "",
  });
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoginAttemptFailed, setIsLoginAttemptFailed] = useState(false);
  const history = useHistory();

  const handleEyeIconClick = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleButtonClick = async () => {
    if (
      userLoginCredentials.user_id === "admin123" &&
      userLoginCredentials.password === "admin123"
    ) {
      setIsLoginAttemptFailed(false);
      history.push("/home");
    } else {
      setIsLoginAttemptFailed(true);
    }
  };

  const handlePasswordChange = ({ target }) => {
    setUserLoginCredentials((prevState) => ({
      ...prevState,
      password: target.value,
    }));
  };

  const handleUserIdChange = ({ target }) => {
    setUserLoginCredentials((prevState) => ({
      ...prevState,
      user_id: target.value,
    }));
  };

  useEffect(() => {
    setIsLoginButtonDisabled(
      userLoginCredentials.user_id !== "" &&
        userLoginCredentials.password !== ""
        ? false
        : true
    );
  }, [userLoginCredentials]);

  return (
    <>
      <div className="MainContainer LeftImageContainer"></div>
      <div className="MainContainer LoginComponentContainer">
        <div className="LoginCenterComponent">
          <h2>Welcome to Project Name</h2>
          <p>Project Desription Here.</p>

          <TextField
            style={{ width: "75%", marginTop: 20 }}
            required
            id="outlined-basic"
            label="Employee Id"
            variant="outlined"
            onChange={handleUserIdChange}
            error={isLoginAttemptFailed}
            helperText={
              isLoginAttemptFailed ? "Id doen't exist on the database!!" : ""
            }
          />
          <TextField
            style={{ width: "75%", marginTop: 20 }}
            required
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={isPasswordVisible ? "text" : "password"}
            onChange={handlePasswordChange}
            error={isLoginAttemptFailed}
            helperText={
              isLoginAttemptFailed ? "Id doen't exist on the database!!" : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleEyeIconClick}>
                    {isPasswordVisible ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            style={{ width: "75%", marginTop: 20, fontSize: 20 }}
            variant="contained"
            disabled={isLoginButtonDisabled}
            onClick={handleButtonClick}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
