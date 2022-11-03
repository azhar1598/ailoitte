import { callAPI } from "./apiHandler";

export const getData = (payload) =>
  callAPI("GET", `http://localhost:3001/data`);
