import axios from "axios";

export default axios.create({
  baseURL: "http://it.wikipedia.org/w/api.php",
});
