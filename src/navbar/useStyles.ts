import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
