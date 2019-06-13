import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: rem(15),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
      flex: 1,
    },
    period: {
      fontSize: rem(12),
    },
    temp: {
      fontSize: rem(15),
      fontWeight: 'bold',
    },
  })
);
