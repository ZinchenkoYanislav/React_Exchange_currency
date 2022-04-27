import React from "react";
import { useState } from "react";
import ExchangeForm from "../components/ExchangeForm";
import ExchangeHeader from "../components/ExchangeHeader";
import useDollar from "../hooks/useDollar";
import useEuro from "../hooks/useEuro";

export default function ExchangePage() {
  const [koef, setKoef] = useState(0);

  const { dollarRate } = useDollar();
  const { euroRate } = useEuro();

  function checkCurrency(value1, value2) {
    if (value1 === "UAH" && value2 === "USD") {
      setKoef(dollarRate);
    } else if (value1 === "UAH" && value2 === "EUR") {
      setKoef(euroRate);
    } else if (value1 === "USD" && value2 === "UAH") {
      setKoef(1 / dollarRate);
    } else if (value1 === "USD" && value2 === "EUR") {
      setKoef(1.05);
    } else if (value1 === "EUR" && value2 === "UAH") {
      setKoef(1 / euroRate);
    } else if (value1 === "EUR" && value2 === "USD") {
      setKoef(0.95);
    } else {
      setKoef(1);
    }
  }

  return (
    <div>
      <ExchangeHeader />
      <ExchangeForm koef={koef} checkCurrency={checkCurrency} />
    </div>
  );
}
