import axios from "axios";

export default axios.create({
  baseURL:
    "https://translation.googleapis.com/language/translate/v2?q=TESTO_DA_CERCARE&target=LINGUA_DA_CERCARE&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
});
