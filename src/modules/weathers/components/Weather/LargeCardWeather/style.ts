import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'inherit',
    },
    cover: {
      backgroundSize: 'cover',
      height: 500,
      '&:after': {
        display: 'block',
        position: 'relative',
        height: 500,
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
      marginTop: -500,
      padding: 0,
      margin: 0,
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 500,
      padding: rem(40),
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
    },
    today_is: {
      fontSize: rem(22),
      lineHeight: rem(22),
    },
    weather: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tempsContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    weatherIconContainer: {
      fontSize: rem(150),
      height: rem(150),
    },
    temp: {
      fontSize: rem(50),
      lineHeight: rem(50),
      fontWeight: 'lighter',
    },
    description: {
    },
    tempMinMaxContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    tempMaxContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    headerBottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    tempMax: {
      fontSize: rem(12),
    },
    tempMinContainer: {
      display: 'flex',
      flexDirection: 'row',
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
