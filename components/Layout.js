import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  LinearProgress,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Computer Mart</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Computer Mart</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}>
            <div className={classes.growright}>
                <NextLink href="/cart" passHref>
                    <Link>Cart</Link>
                </NextLink>
                <NextLink href="/login" passHref>
                    <Link>Login</Link>
                </NextLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights Reserved. Computer Mart</Typography>
      </footer>
    </div>
  );
}
