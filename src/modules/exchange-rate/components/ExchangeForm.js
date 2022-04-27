import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, TextField } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState } from "react";

export default function ExchangeForm({ koef, checkCurrency }) {
  const [firstTextValue, setFirstTextValue] = useState(0);
  const [secondTextValue, setSecondTextValue] = useState(0);

  const [currencySelect1, setCurrencySelect1] = useState("UAH");
  const [currencySelect2, setCurrencySelect2] = useState("UAH");

  const handleChangeSelect1 = (event) => {
    setCurrencySelect1(event.target.value);
    // checkCurrency(currencySelect1, currencySelect2);
    setFirstTextValue(0);
    setSecondTextValue(0);
  };
  function handleChangeText1(e) {
    setFirstTextValue(e.target.value);
    // checkCurrency(currencySelect1, currencySelect2);
    setSecondTextValue((e.target.value / koef).toFixed(2));
  }

  function handleChangeText2(e) {
    setSecondTextValue(e.target.value);
    //  checkCurrency(currencySelect1, currencySelect2);
    setFirstTextValue((e.target.value * koef).toFixed(2));
  }

  const handleChangeSelect2 = (event) => {
    setCurrencySelect2(event.target.value);
    checkCurrency(currencySelect1, currencySelect2);
    setFirstTextValue(0);
    setSecondTextValue(0);
  };

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "UAH",
      label: "₴",
    },
  ];

  checkCurrency(currencySelect1, currencySelect2);
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, mt: 3, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="first"
            select
            label="Select"
            value={currencySelect1}
            onChange={handleChangeSelect1}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="number"
            value={firstTextValue}
            onChange={handleChangeText1}
            variant="outlined"
          />
        </div>
        <CurrencyExchangeIcon sx={{ ml: 24 }} />
        <div>
          <TextField
            id="first"
            select
            label="Select"
            value={currencySelect2}
            onChange={handleChangeSelect2}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="number"
            value={secondTextValue}
            onChange={handleChangeText2}
            variant="outlined"
          />
        </div>
      </Box>
    </>
  );
}
