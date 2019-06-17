import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: rem(200),
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
    weatherIconContainer: {
      fontSize: rem(40),
      height: rem(40),
    },
    tempMinMaxWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    },
    tempMaxWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tempMax: {
      fontSize: rem(12),
    },
    tempMinWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tempMin: {
      fontSize: rem(12),
    }
  })
);
