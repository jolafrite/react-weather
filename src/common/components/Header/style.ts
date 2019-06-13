import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    appBar: {
      background: 'transparent',
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    leftSlot: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    brand: {
      display: 'flex',
      cursor: 'pointer',
    },
    brandName: {
      fontSize: rem(28),
      fontWeight: 'bold',
    },
    rightSlot: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
);
