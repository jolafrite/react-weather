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
      height: 700,
      '&:after': {
        display: 'block',
        position: 'relative',
        height: 700,
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
      marginTop: -700,
      padding: 0,
      margin: 0,
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 700,
      padding: rem(30),
      color: '#FFFFFF',
      textShadow: '0 1px 0 #000000',
    },
    headerTop: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerBottom: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    today_in: {
      fontSize: rem(34),
      lineHeight: rem(36),
      fontWeight: 'lighter',
    },
    today_date: {
      fontSize: rem(34),
      lineHeight: rem(34),
      fontWeight: 'lighter',
    },
    badge: {
      display: 'flex',
      height: rem(300),
      width: rem(300),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#735395',
      borderRadius: '50%',
      padding: rem(40),
    },
    weatherIcon: {
      fontSize: rem(120),
      height: rem(100),
      '& > i': {
        fontSize: rem(100),
        lineHeight: rem(90),
        verticalAlign: '19%',
      }
    },
    tempsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
    },
    tempContainer: {
      '& p': {
        fontWeight: 'bold',
      }
    },
    description: {
    },
    tempMinMaxContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tempMaxContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '& .temperature__temp-max': {
        '> *': {
          fontSize: rem(11),
        },
      },
    },
    tempMinContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
