import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  createTheme,
  Link,
  Toolbar,
  ThemeProvider,
  Typography,
  CssBaseline,
  Switch,
  Badge,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createTheme({
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
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF9900',
      },
      secondary: {
        main: '#515151',
      },
    },
  });
  const classes = useStyles();

  const darkModeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'NO' : 'OFF');
  };
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
                <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
                <NextLink href="/cart" passHref>
                  <Link>
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="primary"
                        badgeContent={cart.cartItems.length}
                      >
                        Cart
                      </Badge>
                    ) : (
                      'Cart'
                    )}
                  </Link>
                </NextLink>
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Link>About</Link>
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
