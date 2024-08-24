import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
  useScrollTrigger,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '../Link';
import { useRouter } from 'next/router';
import { routes } from '../../data/routes';

const ToolbarMargin = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.toolbar};

    @media (max-width: ${theme.breakpoints.values.md}px) {
    }

    @media (max-width: ${theme.breakpoints.values.xs}px) {
    }
  `}
`;

const DrawerIconContainer = styled(IconButton)`
  margin-left: auto;
  padding: 0;

  &:hover {
    background-color: #fff;
  }
`;

const DrawerIcon = styled(MenuIcon)`
  height: 50px;
  width: 50px;
  color: #000;

  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
  }
`;

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 0 6em;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 1.25em;
  font-family: 'Raleway';
  font-weight: 500;
  color: #000;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme?.palette?.background?.default};
`;

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [iOS, setIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    }
  }, []);

  const path = routes;

  const tabs = (
    <Grid container justifyContent="center" spacing={4}>
      {path.map(({ name, link }) => (
        <Grid item key={link}>
          <Link href={link}>
            <StyledTypography
              style={{
                fontWeight: router.pathname === link ? 'bold' : 'normal',
                borderBottom: router.pathname === link ? '1px solid #3178C6' : 'none',
              }}
            >
              {name}
            </StyledTypography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );

  const drawer = (
    <>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
      >
        <ToolbarMargin />
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
                  <StyledTypography
                    style={{
                      color: router.pathname === link ? '#3178C6E2' : '#000',
                      fontWeight: router.pathname === link ? 'bold' : 'normal',
                      textAlign: 'center',
                    }}
                  >
                    {name}
                  </StyledTypography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </StyledSwipeableDrawer>
      <DrawerIconContainer
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <DrawerIcon />
      </DrawerIconContainer>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <StyledAppBar>
          <Toolbar
            disableGutters
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              width: '100%',
              height: '80px',
              padding: '24px',
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
              </Grid>
            </Link>
            <Hidden mdDown>
              {tabs}
            </Hidden>
            <Hidden lgUp>
              {drawer}
            </Hidden>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;