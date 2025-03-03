import { styled, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";



const Transaction = ({ transaction }) => {

  return (
    <ListItem
      className={`text-white ${
        transaction.amount > 0 ? "bg-green-500" : "bg-red-500"
      } mt-1.5`}
    >
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </ListItem>
  );
};

export default Transaction;
