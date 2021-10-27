import api from "../../api";

import { ADD_USER, REGISTER_USER } from "../constants";

export const registerUsersServices = {
  add_new_user: (user_data) => {
    console.log("User data received by api: ", user_data);
    return api.post(REGISTER_USER, { ...user_data });
  },
};
