import { Box, Card, CardContent, Typography } from "@mui/material";

const ExpenseCard = ({ transaction }) => {
  const amount = transaction.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);
  const expense = (
    amount
      .filter((item) => item < 0)
      .reduce((amount, item) => (amount += item), 0) * -1
  ).toFixed(2);

  return (
    <Box className="flex">
      <Card className="flex-1/2 p-2">
        <CardContent>
          <Typography>Income</Typography>
          <Typography className="text-green-600">{income}</Typography>
        </CardContent>
      </Card>

      <Card className="flex-1/2 p-2">
        <CardContent>
          <Typography>Expense</Typography>
          <Typography className="text-red-700 ">{expense}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExpenseCard;
