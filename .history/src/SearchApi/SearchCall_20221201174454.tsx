import axios from "axios";

export default axios.create({
  baseURL:
    "https://wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=",
});
