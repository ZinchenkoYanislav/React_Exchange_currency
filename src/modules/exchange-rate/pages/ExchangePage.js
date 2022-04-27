import React from "react";
import ExchangeForm from "../components/ExchangeForm";
import ExchangeHeader from "../components/ExchangeHeader";
import UseExchangeRate from "../hooks/UseExchangeRate";

export default function ExchangePage() {
  const { exchangeRate } = UseExchangeRate();

  function getKoef(value1, value2) {
    let koef = 0;
    if (value1 === "UAH" && value2 === "UAH") {
      koef = 1;
    } else if (value1 === "UAH") {
      const rate1 = 1;
      const rate2 = exchangeRate.filter((item) => item.cc === value2)[0].rate;
      koef = rate1 / rate2;
    } else if (value2 === "UAH") {
      const rate2 = 1;
      const rate1 = exchangeRate.filter((item) => item.cc === value1)[0].rate;
      koef = rate1 / rate2;
    } else if (!value1 || !value2) {
      koef = 0;
    } else {
      const rate1 = exchangeRate.filter((item) => item.cc === value1)[0].rate;
      const rate2 = exchangeRate.filter((item) => item.cc === value2)[0].rate;
      koef = rate1 / rate2;
    }
    return koef;
  }

  return (
    <div>
      <ExchangeHeader />
      <ExchangeForm getKoef={getKoef} />
    </div>
  );
}
