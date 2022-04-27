import { useEffect, useState } from "react";
import { fetchExchange } from "../services/exchangeService";

export default function useExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    fetchExchange().then(({ data }) => setExchangeRate(data));
  }, []);

  return { exchangeRate };
}
