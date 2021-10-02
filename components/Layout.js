import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  createMuiTheme,
  Link,
  Toolbar,
  ThemeProvider,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: "normal"
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#FF9900',
      },
      secondary: {
        main: '#515151',
      }, 
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Computer Mart` : 'Computer Mart'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  );
}
