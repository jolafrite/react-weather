import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";
import { amber } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      display: 'flex',
      cursor: 'inherit',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      padding: rem(70),
    },
    location: {
      color: theme.palette.grey[500],
    },
    city: {
      fontSize: rem(30),
      lineHeight: '1.2',
    },
    country: {
      fontSize: rem(30),
      lineHeight: '1.2',
    },
    weather: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    weatherIcon: {
      width: rem(100),
    },
    temp: {
      fontSize: rem(100),
      fontWeight: 'lighter',
      color: amber[800],
    },
    cover: {
      backgroundSize: 'cover',
      height: 500,
      width: '40%',
    },
    progress: {

    }
  })
);
