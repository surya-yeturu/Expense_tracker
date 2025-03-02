import React,{useState} from "react";
import "./App.css";
import { Typography, Box } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";


function App() {

  const [transaction, settransaction] = useState([
    {
      id: 1,
      text: "momos",
      amount: -20,
    },
    { id: 2, text: "momos", amount: -20 },
    { id: 3, text: "salery", amount: 2220 },
    { id: 4, text: "momos", amount: -20 }
  ]);
  return (
    <div>
      <Typography
        className=" mt-32
       text-[100px] text-blue-950 transform-3d"
      >
        Expense Tracker
      </Typography>

      <Box>
        <Box>
          <Balance />
          <ExpenseCard />
          <NewTransactions />
        </Box>
        <Box>
          <Transactions transaction={transaction}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
