import { Paper, Box, Divider, Button } from "@mui/material";
import * as React from "react";
import Features from "./features";
import Price from "./price";
import Title from "./title";
interface CardProps {
  plan: string;
  remark: string;
  price: number;
  features: {
    name: string;
    access: boolean;
  }[];
  active?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  plan,
  remark,
  price,
  features,
  active,
}) => {
  return (
    <Paper sx={{ p: 2 }} elevation={active ? 5 : 1}>
      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Title plan={plan} remark={remark} />
        <Price price={price} />
      </Box>
      <Divider />
      <Features features={features} />
      <Button
        sx={{ my: 2, textTransform: "capitalize" }}
        fullWidth
        variant={active ? "contained" : "outlined"}
      >
        {active ? "Let's Go" : "Get Started"}
      </Button>
    </Paper>
  );
};

export default Card;
