import axios from "axios";

// Creates a pre-configured instance of axios
const instance = axios.create({
  // Sets the base URL for The Movie Database API
  baseURL: "https://api.themoviedb.org/3/",
});

// Exports the configured instance
export default instance;
