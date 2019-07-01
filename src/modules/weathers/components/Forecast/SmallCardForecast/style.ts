import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
      padding: rem(15),
    },
    period: {
      fontSize: rem(12),
    },
    temp: {
      fontSize: rem(15),
      fontWeight: 'bold',
    },
    weatherIconContainer: {
      fontSize: rem(40),
      height: rem(40),
    },
    tempsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    tempMinMaxWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    tempMaxWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    tempMinWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
);
