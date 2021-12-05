import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
interface FeaturesProps {
  features: {
    name: string;
    access: boolean;
  }[];
}

const Features: React.FunctionComponent<FeaturesProps> = ({ features }) => {
  return (
    <React.Fragment>
      <List component="ul">
        {features.map((feature) => (
          <ListItem key={feature.name} dense component="li">
            <ListItemIcon>
              {feature.access && <CheckCircleIcon color="primary" />}
              {!feature.access && <CancelIcon />}
            </ListItemIcon>
            <ListItemText primary={feature.name} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Features;
