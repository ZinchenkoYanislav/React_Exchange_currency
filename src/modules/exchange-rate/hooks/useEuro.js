import { useEffect, useState } from "react";
import { fetchExchange } from "../services/exchangeService";

export default function useEuro() {
  const [euroRate, setEuroRate] = useState([]);
  useEffect(() => {
    fetchExchange().then(({ data }) =>
      setEuroRate(data.filter((item) => item.cc === "EUR")[0].rate)
    );
  }, []);

  return { euroRate };
}
