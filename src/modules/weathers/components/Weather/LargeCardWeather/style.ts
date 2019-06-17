import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'inherit',
      padding: 0,
      margin: 0,
    },
    cover: {
      backgroundSize: 'cover',
      height: 400,
      '&:after': {
        display: 'block',
        position: 'relative',
        height: 400,
        width: '100%',
        content: '\'\'',
        background: 'linear-gradient(rgba(96, 76, 143, 0.5), rgba(96, 76, 143, 0.5))',
      }
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      flex: 1,
      marginTop: -400,
      padding: 0,
      margin: 0,
    },
    header: {
      height: 400,
      padding: rem(70),
    },
    location: {
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
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
      textShadow: '0 1px 0 #000000',
    },
    weatherIcon: {
      width: rem(100),
    },
    temp: {
      fontSize: rem(90),
      fontWeight: 'lighter',
      color: '#FFFFFF',
    },
    description: {
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
    },
    tempMinMaxWrapper: {
      display: 'flex',
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
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
    },
    wind: {
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
      fontSize: rem(12),
    },
    childrenContainer: {
      padding: rem(40),
    },
    progress: {

    }
  })
);
