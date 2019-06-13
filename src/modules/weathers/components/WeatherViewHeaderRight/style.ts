import { createStyles, makeStyles } from "@material-ui/core";
import { rem } from "polished";

export const useStyles = makeStyles(() =>
  createStyles({
    searchIconButton: {},
    searchIcon: {
      fontSize: rem(30),
      color: '#FFFFFF',
    }
  })
);
