import { createMuiTheme } from "@material-ui/core";

const rawTheme = createMuiTheme({

});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: "linear-gradient(0deg,rgba(150,98,162,1) 0%,rgba(96,76,143,1) 100%)"
    }
  }
};

export default theme;
