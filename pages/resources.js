import React from 'react';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const Resources = () => {
    return (
        <React.Fragment>
            <Navbar />
            <br /><br />
            <Box width={1} display="flex" justifyContent="spaceBetween" style={{marginLeft: "24px"}}>
                <Grid container spacing={1}>
                    <Grid container item xs={4} spacing={3}>
                        <Typography variant="h3" >
                            Mental Health
                        </Typography>
                        <Box fontWeight="fontWeightBold" fontSize="24px" style={{backgroundColor: "#94BFE7"}}>
                            During time of great change and mass panic, a distruption in mental heath is normal
                        </Box>
                        <Button href="http://www.nami-wci.org">Resources and more information on how to help</Button>
                    </Grid>
                    <Grid container item xs={4} spacing={3}>
                        <Typography variant="h3" >
                            Social Distancing Tips
                        </Typography>
                        <Box fontWeight="fontWeightBold" fontSize="24px" style={{backgroundColor: "#94BFE7"}}>
                            One of the best things you can do to help flatten the curve is to practice social distancing
                        </Box>
                        <Button href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">Resources and more information on how to help</Button>
                    </Grid>
                    <Grid container item xs={4} spacing={3}>
                        <Typography variant="h3" >
                            Domestic Violence
                        </Typography>
                        <Box fontWeight="fontWeightBold" fontSize="24px" style={{backgroundColor: "#94BFE7"}}>
                            One of the best things you can do to help flatten the curve is to practice social distancing
                        </Box>
                        <Button href="https://www.futureswithoutviolence.org/get-updates-information-covid-19/">Resources and more information on how to help</Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default Resources;