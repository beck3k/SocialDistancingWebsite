import React from 'react';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

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

const Resources = () => {
    return (
        <MuiThemeProvider theme={theme}>
        <React.Fragment>
            <Navbar />
            <br /><br />
            <Box width={1} display="flex" style={{marginLeft: "24px"}} flexDirection="column">
                <Grid container spacing={1} >
                    <Grid container item xs={4} spacing={3}>
                        <Typography variant="h3" style={{borderBottom: "solid 5px #7ac1e8"}}>
                            Mental Health
                        </Typography>
                    </Grid>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "12px", marginLeft: "10px"}}>
                        <Typography variant="h3" style={{borderBottom: "solid 5px #7ae8a6"}}>
                            Social Distancing Tips
                        </Typography>
                    </Grid>
                    <Grid container item xs={4} spacing={3} >
                        <Typography variant="h3" style={{borderBottom: "solid 5px #9be679"}}>
                            Domestic Violence
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "48px"}}>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1} style={{backgroundColor: "#7ac1e8"}}>
                        <Box fontWeight="fontWeightBold" fontSize="24px" display="flex" justifyContent="center" alignItems="center">
                            During time of great change and mass panic, a distruption in mental heath is normal
                        </Box>
                        </Paper>
                    </Grid>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1}  style={{backgroundColor: "#7ae8a6"}}>
                        <Box fontWeight="fontWeightBold" fontSize="24px" display="flex" justifyContent="center" alignItems="center">
                            One of the best things you can do to help flatten the curve is to practice social distancing
                        </Box>
                        
                        </Paper>
                    </Grid>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1} style={{backgroundColor: "#9be679"}}>
                        <Box fontWeight="fontWeightBold" fontSize="24px" display="flex" justifyContent="center" alignItems="center">
                            Due to the virus, travel restrictions and quarantines are being imposed, leading to those being abused possibly being stuck with their abuser.
                        </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "48px"}}>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1}>
                        <Button href="http://www.nami-wci.org">Resources and more information on how to help</Button>
                        </Paper>
                    </Grid>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1}>
                        <Button href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">Chekc out this article on tips and tricks of staying social during this time</Button>
                        </Paper>
                    </Grid>
                    <Grid container item xs={4} spacing={3} style={{marginRight: "10px"}}>
                        <Paper elevation={1}>
                        <Button href="https://www.futureswithoutviolence.org/get-updates-information-covid-19/">Check here to see what to do and how to help</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
        </MuiThemeProvider>
    );
};

export default Resources;