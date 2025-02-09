import axios from "axios";
import { envVars } from "../config/env";

export const tmdb = axios.create({
  baseURL: envVars.TMDB_API,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${envVars.TMDB_API_KEY}`,
  },
});