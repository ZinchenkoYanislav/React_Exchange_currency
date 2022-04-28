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
            sx={{ mr: 2, display:  {xs: 'none' , sm: "none", md:"flex"}   }}

          >
            Exchange
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: {xs:'none', sm: 10}, mr: 1, display: { md: "flex" }, fontSize: {xs: 11, sm: 20}}}
          >
            USD = {dollar} UAH
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: {xs:'none', sm: 10}, mr: 1, display: { md: "flex" }, fontSize: {xs: 11, sm: 20}}}
          >
            EUR = {euro} UAH
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
