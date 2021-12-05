import * as React from "react";
import { Typography, Box, Switch, Chip } from "@mui/material";
interface PlanToggleProps {}

const PlanToggle: React.FunctionComponent<PlanToggleProps> = () => {
  return (
    <Box display="flex" sx={{ alignItems: "center", gap: 3 }}>
      <Typography variant="body2">Monthly</Typography>
      <Switch defaultChecked />
      <Typography variant="body2">
        Yearly <Chip sx={{ borderRadius: 2 }} size="small" label="%15 off" />
      </Typography>
    </Box>
  );
};

export default PlanToggle;
