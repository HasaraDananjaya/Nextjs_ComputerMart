import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import { Typography } from '@material-ui/core';

export default function Shipping() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const classes = useStyles();

  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }
  return (
    <Layout title="Shipping">
      <form className={classes.form}>
        <Typography component="h1" variant="h1" align="center">
          Delivery Details Here
        </Typography>
      </form>
    </Layout>
  );
}
