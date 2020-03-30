import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import Navbar from "../components/Navbar";

const theme = createMuiTheme({
    typography: {
      fontFamily: "\"Alegreya\", serif",
      "fontWeightRegular": 900,
      fontWeight: "fontWeightBold"
    },
    palette: {
        primary: {
            main: '#7ae8a6',
        },
        secondary: {
            main: '#FFFFFF',
        }
    }
});

const Games = () => {
    return(
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
        <Navbar />
        <Box width={1} display="flex" flexDirection="column">
            <Typography variant="h3">Corona Time</Typography>
            {/* <Button color="primary" variant="contained" width={0.5} href="https://github.com/Winifi/CoronaTime">Github</Button> */}
            <iframe src="/CoronaTime/index.html" width="800px" height="800px" style={{border: 0}}></iframe>
        </Box>
    </React.Fragment>
    </MuiThemeProvider>
    );
}

export default Games;