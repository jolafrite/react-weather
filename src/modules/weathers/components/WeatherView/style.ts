import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(
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
      maxHeight: '100%',
      maxWidth: '100%',
    }
  })
);
