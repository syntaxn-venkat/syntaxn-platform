import axios from "axios";

const api = axios.create({
  baseURL: "YOUR_HASURA_ENDPOINT",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;