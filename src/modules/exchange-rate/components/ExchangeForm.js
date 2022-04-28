import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, TextField } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState } from "react";

export default function ExchangeForm({ getKoef }) {
  const [firstTextValue, setFirstTextValue] = useState("");
  const [secondTextValue, setSecondTextValue] = useState("");

  const [currencySelect1, setCurrencySelect1] = useState("");
  const [currencySelect2, setCurrencySelect2] = useState("");

  const handleChangeSelect1 = (event) => {
    setCurrencySelect1(event.target.value);

    setFirstTextValue('');
    setSecondTextValue('');
  };

  function handleChangeText1(e) {
    setFirstTextValue(e.target.value);

    let koef = getKoef(currencySelect1, currencySelect2);
    setSecondTextValue((e.target.value * koef).toFixed(2));
  }

  function handleChangeText2(e) {
    setSecondTextValue(e.target.value);

    let koef = getKoef(currencySelect2, currencySelect1);
    setFirstTextValue((e.target.value * koef).toFixed(2));
  }

  const handleChangeSelect2 = (event) => {
    setCurrencySelect2(event.target.value);

    setFirstTextValue('');
    setSecondTextValue('');
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
            placeholder={0}
          />
        </div>
        <CurrencyExchangeIcon sx={{ ml: 24 }} />
        <div>
          <TextField
            id="second"
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
            placeholder={0}
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
