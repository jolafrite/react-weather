import React, { FC } from "react";
import clsx from "clsx";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@material-ui/core/AppBar";

export interface IAppBarProps extends MuiAppBarProps {
  className: string;
}

const AppBar: FC<IAppBarProps> = ({ className, ...rest }) => (
  <MuiAppBar className={clsx(className)} {...rest} />
);

export default AppBar;
