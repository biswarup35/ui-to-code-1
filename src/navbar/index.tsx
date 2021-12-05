import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import useStyles from "./useStyles";
import * as React from "react";
import Mobile from "./mobile";
import { useMediaQuery, Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const classes = useStyles();
  const smUP = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbar}>
            <Box>
              {!smUP && (
                <IconButton onClick={handleOpen}>
                  <MenuIcon />
                </IconButton>
              )}

              {smUP && <Typography>FirstByte</Typography>}
            </Box>
            {smUP && (
              <Stack direction="row" spacing={2}>
                <Button sx={{ color: "GrayText" }} className={classes.btn}>
                  Products
                </Button>
                <Button className={classes.btn}>Pricing</Button>
                <Button sx={{ color: "GrayText" }} className={classes.btn}>
                  About
                </Button>
                <Button sx={{ color: "GrayText" }} className={classes.btn}>
                  Blog
                </Button>
              </Stack>
            )}
            {!smUP && <Typography>FirstByte</Typography>}
            <Box>
              <Button
                sx={{ color: "GrayText" }}
                className={classes.btn}
                variant="outlined"
              >
                Login
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Mobile open={open} close={handleClose} />
    </React.Fragment>
  );
};

export default Navbar;
