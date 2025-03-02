import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";



function NewTransactions() {
  return (
    <Box className="flex flex-col">
      <Typography className="p-2" variant="h5">
        New Transaction
      </Typography>
      <TextField className="p-1.5 gap-y-2" label="Enter expense" />
      <TextField className="p-1.5 gap-y-2 " label="Enter amount" />
      <Button className="mt-10" variant="contained">
        
        submit
      </Button>
    </Box>
  );
}

export default NewTransactions;
