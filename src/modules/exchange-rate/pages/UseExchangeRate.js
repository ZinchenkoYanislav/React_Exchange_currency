import { useEffect, useState } from "react";
import { fetchExchange } from "../services/exchangeService";

export default function UseExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    fetchExchange().then(({ data }) => setExchangeRate(data));
  }, []);

  return { exchangeRate };
}
