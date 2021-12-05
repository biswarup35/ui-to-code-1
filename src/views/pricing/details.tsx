import * as React from "react";
import { Typography } from "@mui/material";
interface DetailsProps {
  title: string;
  description: string;
}

const Details: React.FunctionComponent<DetailsProps> = ({
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <Typography
        sx={{ my: 5, fontWeight: "bold" }}
        align="center"
        variant="h4"
        component="h2"
      >
        {title}
      </Typography>
      <Typography align="center" color="GrayText">
        {description}
      </Typography>
    </React.Fragment>
  );
};

export default Details;
