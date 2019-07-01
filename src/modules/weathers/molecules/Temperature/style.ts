import { makeStyles, createStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(
  createStyles({
    root: {
      '&.large': {
        '& .text__celcius': {
          fontSize: rem(40),
          lineHeight: rem(42),
        },
        '& .text__separator': {
          fontSize: rem(40),
          lineHeight: rem(40),
        },
        '& .text__fahrenheit': {
          fontSize: rem(38),
          lineHeight: rem(40),
        },
      }
    }
  })
);
