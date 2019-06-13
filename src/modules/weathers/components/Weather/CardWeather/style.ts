import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    card: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'inherit',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${rem(24)} 0`,
    },
    location: {
      display: 'flex',
      flexDirection: 'row',
    },
    city: {
      fontSize: rem(12),
      marginRight: rem(2),
    },
    country: {
      fontSize: rem(12),
    },
    temp: {
      fontSize: rem(30),
      fontWeight: 'bold',
    },
    weatherIcon: {
      backgroundSize: 'contain',
      width: rem(90),
    },
    progress: {

    }
  })
);
