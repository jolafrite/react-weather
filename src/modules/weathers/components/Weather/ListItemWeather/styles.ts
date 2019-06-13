import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    weatherIcon: {},
    location: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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
  })
);
