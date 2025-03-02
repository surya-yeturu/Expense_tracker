import { Box, Typography, styled } from "@mui/material";
import React from "react";

const BalenceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;
function Balance() {
  return (
    <Box>
      <BalenceText > Balence :100</BalenceText>
    </Box>
  );
}

export default Balance;
