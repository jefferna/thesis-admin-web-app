import Axios from "axios";

import { BASE_URL } from "./constants";

const api = Axios.create({
  url: "BASE_URL",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
