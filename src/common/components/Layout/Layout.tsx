import React, { FC, ReactNode, memo } from "react";
import Header, { IHeaderProps } from "../Header";
import { useStyles } from "./style";

export interface ILayoutProps {
  children: ReactNode;
  header?: IHeaderProps;
}

const Layout: FC<ILayoutProps> = props => {
  const styles = useStyles();
  const { children, header } = props;

  return (
    <div className={styles.root}>
      <Header
        {...header}
      ></Header>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default memo(Layout);
