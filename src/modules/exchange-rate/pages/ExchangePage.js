import React from "react";
import { useState } from "react";
import ExchangeForm from "../components/ExchangeForm";
import useExchangeRate from "../hooks/useExchangeRate";

export default function ExchangePage() {
  const { USD, EUR } = useExchangeRate();
  const [koef, setKoef] = useState(0);

  function checkCurrency(value1, value2) {
    if (value1 === "UAH" && value2 === "USD") {
      setKoef(USD[0].rate);
    } else if (value1 === "UAH" && value2 === "EUR") {
      let rate = EUR[0].rate;
      setKoef(rate);
    } else if (value1 === "USD" && value2 === "UAH") {
      setKoef(1 / USD[0].rate);
    } else if (value1 === "USD" && value2 === "EUR") {
      setKoef(1.05);
    } else if (value1 === "EUR" && value2 === "UAH") {
      setKoef(1 / EUR[0].rate);
    } else if (value1 === "EUR" && value2 === "USD") {
      setKoef(0.95);
    } else {
      setKoef(1);
    }
  }

  return (
    <div>
      <ExchangeForm
      koef={koef}
        checkCurrency={checkCurrency}
      />
    </div>
  );
}
