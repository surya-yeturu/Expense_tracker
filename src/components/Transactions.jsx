import React from "react";
import { Box, Divider, Typography, List } from "@mui/material";
import Transaction from "./Transaction";

const Transactions = ({ transaction }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Transaction History
      </Typography>
      <Divider />
      <List>
        {transaction.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
