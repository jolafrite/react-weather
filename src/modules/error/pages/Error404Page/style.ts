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
      minWidth: 275,
      padding: rem(10),
    },
    title: {
      textTransform: 'uppercase',
      marginBottom: rem(20),
      fontSize: rem(20),
      fontWeight: 'bold',
    },
    content: {

    },
    goToHomeLink: {
      display: 'flex',
      cursor: 'pointer',
      fontWeight: 'bolder',
      alignItems: 'center',
    }
  })
);
