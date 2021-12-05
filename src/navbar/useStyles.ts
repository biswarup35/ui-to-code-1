import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    textTransform: "capitalize",
    fontSize: `1rem`,
    fontWeight: 600,
  },
}));

export default useStyles;
