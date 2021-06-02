import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import { useAuth0 } from "@auth0/auth0-react";

 const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const TopNav = () => {
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();

  return (
  <AppBar position="static">
    <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
    <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>

  </Toolbar>
</AppBar>
  );
}
