import { Stack, Typography } from "@mui/material";
import * as React from "react";
interface TitleProps {
  plan: string;
  remark: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ plan, remark }) => {
  return (
    <Stack alignItems="center">
      <Typography variant="h5" component="h2">
        {plan}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontStyle: "italic", fontSize: `.7rem` }}
        gutterBottom
        color="GrayText"
      >
        {remark}
      </Typography>
    </Stack>
  );
};

export default Title;
