import { useEffect, useState } from "react";
import { fetchExchange } from "../services/exchangeService";

export default function useExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    fetchExchange().then(({ data }) => setExchangeRate(data));
  }, []);
  let USD = exchangeRate.filter((item) => item.cc === "USD");
  let EUR = exchangeRate.filter((item) => item.cc === "EUR");

  return { exchangeRate, USD, EUR };
}
