import { Box, Typography, styled } from "@mui/material";
import React from "react";

const BalenceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;
function Balance({ transaction }) {
  const amount = transaction.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0);
  return (
    <Box className="text-center mt-2">
      <BalenceText> Balence :₹{total}</BalenceText>
    </Box>
  );
}

export default Balance;
