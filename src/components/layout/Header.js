import Link from '../Link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';

import { routes } from '../../data/routes';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('md')]: {
      marginBottom: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '72px',
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    padding: 0,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: '#000',
    [theme.breakpoints.down('xs')]: {
      height: '40px',
      width: '40px',
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    padding: '0 6em',
  },
  link: {
    fontSize: '1.25em',
    fontFamily: 'Cardo',
    color: '#000',
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);

  const path = routes;

  // iOS check moved to useEffect for consistency
  const [iOS, setIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    }
  }, []);

  const tabs = (
    <Grid container justifyContent="center" spacing={4}>
      {path.map(({ name, link }) => (
        <Grid item key={link}>
          <Link href={link}>
            <Typography
              className={classes.link}
              style={{
                fontWeight: router.pathname === link ? 'bold' : 'normal',
                borderBottom: router.pathname === link ? '1px solid #3178C6' : 'none',
              }}
            >
              {name}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {path.map(({ name, link }) => (
            <ListItem
              key={link}
              divider
              button
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>
                <Link href={link}>
                  <Typography
                    style={{
                      fontFamily: 'Cardo, serif',
                      color: router.pathname === link ? '#3178C6E2' : '#000',
                      fontWeight: router.pathname === link ? 'bold' : 'normal',
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar
            disableGutters
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              width: '100%',
              height: '80px',
              padding: matches ? '24px' : '48px',
            }}
          >
            <Link href="/">
              <Grid container wrap="nowrap" spacing={1} alignItems="flex-end">
                <Grid item>
                  <img
                    src='/images/27-logo.svg'
                    alt='Joy Agustian'
                    width='auto'
                    height='48'
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="p">Joy Agustian</Typography>
                </Grid>
              </Grid>
            </Link>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
