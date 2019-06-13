import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    card: {
      padding: rem(10),
    },
    progress: {
      height: rem(50),
      width: rem(50),
    }
  })
);
