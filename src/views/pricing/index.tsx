import { Container, Grid, Box } from "@mui/material";
import * as React from "react";
import PlanToggle from "./plan-toggle";
import Card from "./Card";
import Details from "./details";
import { table } from "../../../table";
interface PricingProps {}

const Pricing: React.FunctionComponent<PricingProps> = () => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Details
          title="Our Pricing Plan"
          description="We are industry-leading compnay that values honesty, intergerity, and
        efficiency. building quality products are caring."
        />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ my: 2 }} display="flex" justifyContent="center">
          <PlanToggle />
        </Box>
        <Grid
          sx={{ my: 2 }}
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {table.map((item) => (
            <Grid key={item.plan} item xs={10} sm={6} md={3}>
              <Card
                active={item.remark == "Recommended" ? true : false}
                plan={item.plan}
                remark={item.remark}
                price={item.price}
                features={item.features}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;
