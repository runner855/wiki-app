import axios from "axios";

export default axios.create({
  baseURL: "https://it.wikipedia.org/w/",
});
