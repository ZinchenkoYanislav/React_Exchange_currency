import { useEffect, useState } from "react";
import { fetchExchange } from "../services/exchangeService";

export default function useDollar() {
  const [dollarRate, setDollarRate] = useState([]);
  useEffect(() => {
    fetchExchange().then(({ data }) =>
      setDollarRate(data.filter((item) => item.cc === "USD")[0].rate)
    );
  }, []);

  return { dollarRate };
}
