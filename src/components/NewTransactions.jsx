import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

function NewTransactions({ settransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: amount,
    };

    

    settransaction((prevstate) => [transaction, ...prevstate]);
  };
  return (
    <Box className="flex flex-col">
      <Typography className="p-2" variant="h5">
        New Transaction
      </Typography>
      <TextField
        className="p-1.5 gap-y-2 mt-2"
        label="Enter expense"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <TextField
        className="p-1.5 gap-y-2 mt-2"
        label="Enter amount"
        sx={{ mt: 2 }}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <Button
        className="mt-10"
        variant="contained"
        onClick={() => addTransaction()}
      >
        Add Transaction
      </Button>
    </Box>
  );
}

export default NewTransactions;
