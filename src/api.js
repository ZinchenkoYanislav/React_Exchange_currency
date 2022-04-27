import axios from "axios";

const API_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/";
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
