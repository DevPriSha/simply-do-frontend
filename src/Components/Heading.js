import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const headingFont = createTheme({
  typography: {
    fontFamily: ["Times new roman", "serif"].join(","),
  },
});

export default function Heading() {
  return (
    <div>
      <ThemeProvider theme={headingFont}></ThemeProvider>

      <Typography variant="h1">Simply Do.</Typography>

      <Typography variant="subtitle1" p={2} textAlign="right">
        -A simple to-do list app by Priya Sharma.
      </Typography>
    </div>
  );
}
