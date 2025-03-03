import React, { useState } from "react";
import "./App.css";
import { Typography, Box, styled } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";

const component = styled(Box)`
  display: flex;
`;
function App() {
  const [transaction, settransaction] = useState([]);

  return (
    <Box>
      <h1 className=" text-center  text-4xl  text-blue-950 ">
        Expense Tracker
      </h1>

      <component>
        <Box>
          <Balance transaction={transaction} />
          <ExpenseCard transaction={transaction} />
          <NewTransactions settransaction={settransaction} />
        </Box>
        <Box>
          <Transactions transaction={transaction} />
        </Box>
      </component>
    </Box>
  );
}

export default App;
