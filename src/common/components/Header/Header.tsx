import React, { useCallback, ReactNode, memo } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Toolbar, Link } from "@material-ui/core";
import { useStyles } from "./style";
import { AppBar } from "../atoms";

export interface IHeaderProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

const Header: React.FC<IHeaderProps> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { leftSlot, rightSlot } = props;

  const goToHome = useCallback(() => dispatch(push("/", { prev: true })), [
    dispatch
  ]);

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftSlot}>{leftSlot}</div>

        <div className={classes.brand}>
          <Link
            className={classes.brandName}
            variant="h6"
            underline="none"
            color="inherit"
            onClick={goToHome}
          >
            Weather App
          </Link>
        </div>

        <div className={classes.rightSlot}>{rightSlot}</div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
