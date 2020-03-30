import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7ae8a6',
        },
        secondary: {
            main: '#FFFFFF',
        }
    }
});

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
            <ElevationScroll {...props}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title} color="secondary">
            Social? Distancing
          </Typography>
          <Button color="secondary" href="/">Memes</Button>
          <Button color="secondary" href="/games">Games</Button>
          <Button color="secondary" href="/resources">More Resources</Button>
          <Button color="secondary">Contact</Button>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar />
      </ThemeProvider>
    </div>
  );
}
