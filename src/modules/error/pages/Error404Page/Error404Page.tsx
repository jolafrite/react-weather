import React, { FC, useCallback, memo } from "react";
import Layout from "../../../../common/components/Layout";
import { useStyles } from "./style";
import { Card, CardContent, CardActions, Link } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { KeyboardArrowLeft } from '@material-ui/icons';

export interface IError404PageProps {}

export const Error404Page: FC<IError404PageProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const goToHome = useCallback(
    () => dispatch(push('/', { prev: true }))
  , [dispatch]);

  return (
    <Layout>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              component="h1"
            >
              Page Not Found
            </Typography>

            <Typography
              className={classes.content}
              component="p"
            >
              Looks like you've followed a broken link or entered a URL
              that doesn't exist on this site.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              onClick={goToHome}
              className={classes.goToHomeLink}
            >
              <KeyboardArrowLeft />
              Back to home
            </Link>
          </CardActions>
        </Card>
      </div>
    </Layout>
  );
};

export default memo(Error404Page);
