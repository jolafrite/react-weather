import React, { FC, memo } from "react";
import { CircularProgress, Card } from "@material-ui/core";
import Layout from "../Layout";
import { useStyles } from "./style";

export interface ILoadingViewProps {}

const LoadingView: FC<ILoadingViewProps> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CircularProgress
            size=""
            className={classes.progress}
          />
        </Card>
      </div>
    </Layout>
  )
};

export default memo(LoadingView);
