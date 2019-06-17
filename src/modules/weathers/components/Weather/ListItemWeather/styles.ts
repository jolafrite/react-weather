import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    weatherIconContainer: {
      fontSize: rem(80),
      lineHeight: 0,
      marginRight: rem(20),
    },
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
