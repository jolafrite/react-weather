import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      height: '100vh',
      minWidth: 0,
      width: '100vw',
      margin: 0,
      padding: 0,
      background: "linear-gradient(0deg, rgba(150, 98, 162, 1) 0%, rgba(96, 76, 143 ,1) 100%)",
    },
    container: {
      maxHeight: '100%',
      maxWidth: '100%',
      flex: '1 1',
      flexDirection: 'column',
      padding: '12px 48px',
      overflowY: 'auto',

      [theme.breakpoints.down('sm')]: {
        padding: '24px 6px'
      },
    }
  })
);

