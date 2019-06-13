import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      cursor: 'default',
    },
    card: {
      width: 800,
      maxHeight: '100%',
      maxWidth: '100%',
    },
    notFound: {
      margin: 0,
      padding: rem(15),
    },
    error: {
      margin: 0,
      padding: rem(15),
      backgroundColor: theme.palette.error.main,
    }
  })
);
