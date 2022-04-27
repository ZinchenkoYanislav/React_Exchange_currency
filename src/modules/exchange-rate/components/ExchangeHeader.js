import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import useDollar from "../hooks/useDollar";
import useEuro from "../hooks/useEuro";

export default function ExchangeHeader() {
  const { dollarRate } = useDollar();
  const dollar = parseFloat(dollarRate).toFixed(2);
  const { euroRate } = useEuro();
  const euro = parseFloat(euroRate).toFixed(2);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            Exchange
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 10, mr: 4, display: { md: "flex" } }}
          >
            USD = {dollar} UAH
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 10, mr: 4, display: { md: "flex" } }}
          >
            EUR = {euro} UAH
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
