import { ListItem, ListItemText } from "@mui/material";

const Transaction = ({transaction}) => {
  return (
    <ListItem>
        <ListItemText>{transaction.text}</ListItemText>
    </ListItem>
  );
};

export default Transaction;
