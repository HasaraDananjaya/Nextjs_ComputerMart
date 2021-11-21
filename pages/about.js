import { Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';

export default function About() {
  const classes = useStyles();
  return (
    <Layout title="Shipping">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Details about the company Here
        </Typography>
      </form>
    </Layout>
  );
}
