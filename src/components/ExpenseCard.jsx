import { Box, Card, CardContent, Typography } from "@mui/material";



const ExpenseCard = () => {
  return (
    <Box className="flex">
      <Card className="flex-1/2 p-2">
        <CardContent>
          <Typography>Income</Typography>
          <Typography className="text-green-600">30</Typography>
        </CardContent>
      </Card>

      <Card className="flex-1/2 p-2">
        <CardContent>
          <Typography>Expense</Typography>
          <Typography className="text-red-700 ">15</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExpenseCard;
