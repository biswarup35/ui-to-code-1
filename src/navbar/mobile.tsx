import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
interface MobileProps {
  open: boolean;
  close: () => void;
}

const Mobile: React.FunctionComponent<MobileProps> = ({ open, close }) => {
  return (
    <React.Fragment>
      <Drawer open={open} onClose={close}>
        <List sx={{ width: 240 }}>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blog" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Mobile;
