import { TextField, Button } from "@mui/material";

import { DesktopDatePicker } from "@mui/lab";
import moment from "moment";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { ADD_USER } from "../../api/constants";

import { registerUsersServices } from "../../api/services/registerUser";

const RegisterUser = () => {
  const [newUserDetails, setNewUserDetails] = useState({
    first_name: "",
    last_name: "",
    age: "",
    birthday: "",
  });

  const handleBirthDayChange = (birthDay) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      birthday: moment(birthDay).format("MM/DD/YYYY"),
    }));
  };

  const handleFirstNameChange = ({ target }) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      first_name: target.value,
    }));
  };

  const handleLastNameChange = ({ target }) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      last_name: target.value,
    }));
  };

  const handleAgeChange = ({ target }) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      age: target.value,
    }));
  };

  const handleButtonClick = async () => {
    console.log("DETAILS: ", newUserDetails);

    const response = await registerUsersServices.add_new_user(newUserDetails);

    console.log("Resposnse: ", response);
  };

  useEffect(() => {
    console.log("New user details: ", newUserDetails);
  }, [newUserDetails]);

  return (
    <>
      <TextField
        style={{ width: "75%", marginTop: 20 }}
        required
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        onChange={handleFirstNameChange}
      />
      <TextField
        style={{ width: "75%", marginTop: 20 }}
        required
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        onChange={handleLastNameChange}
      />
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          width: "75%",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          style={{ marginTop: 20 }}
          required
          id="outlined-basic"
          label="Age"
          variant="outlined"
          onChange={handleAgeChange}
          inputProps={{ maxLength: 3 }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Birthday"
            inputFormat="MM/dd/yyyy"
            value={newUserDetails.birthday}
            onChange={handleBirthDayChange}
            renderInput={(params) => <TextField {...params} error={false} />}
          />
        </LocalizationProvider>

        <Button
          style={{ width: "75%", marginTop: 20, fontSize: 20 }}
          variant="contained"
          onClick={handleButtonClick}
        >
          Add New User
        </Button>
      </div>
    </>
  );
};

export default RegisterUser;
