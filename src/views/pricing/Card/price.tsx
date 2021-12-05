import { Stack, Typography } from "@mui/material";
import * as React from "react";
import discount from "../../../util/discount";
interface PriceProps {
  price: number;
}

const Price: React.FunctionComponent<PriceProps> = ({ price }) => {
  return (
    <React.Fragment>
      <Stack alignItems="center">
        <Typography variant="h5" component="h2">
          ${discount(15)(price)}/yr
        </Typography>
        <Typography
          variant="body2"
          component="h2"
          sx={{ textDecoration: "line-through" }}
        >
          ${price}/yr
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default Price;
