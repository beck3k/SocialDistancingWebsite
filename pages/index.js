import Head from 'next/head'
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import { Typography, MuiThemeProvider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
})

const Home = () => (
  <MuiThemeProvider theme={theme}>
  <div className="container">
    <Head>
      <title>COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <React.Fragment>
    <Navbar />
    </React.Fragment>

    <ThemeProvider theme={theme} >
      <Box style={{backgroundColor: "#A3E3A6"}} width={1}>
        <Container maxWidth={1} width={1} fixed style={{paddingBottom: "45px"}}>
          <Grid container spacing={1}>
            <Grid container item xs={4} spacing={1}>
              <img src="/icon.png" width="100%"/>
            </Grid>
            <Grid container item xs={8} spacing={3} style={{padding: '48px'}}>
              <Box display="flex" flexDirection="column" justifyContent="center" style={{marginLeft: '52px'}}>
                <Typography variant="h4" color="secondary">Help stop the spread of Covid-19 by encouraging social distancing</Typography>
                {/* <Button color="">Get Started</Button> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box width={1}>
          <Grid container space={1} style={{marginTop: "12px"}}>
            <Grid container item xs={6} spacing={3} style={{backgroundColor: "#B3E07B", paddingTop: "35px", paddingBottom: "95px"}}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width={1}>
                <Typography variant="h3" color="secondary">
                  Mission Statement
                </Typography>
                <img src="/target.png" />
              </Box>
            </Grid>
            <Grid container item xs={6} spacing={3}>
              <Box display="flex" justifyContent="center" alignItems="center" style={{marginLeft: "35px"}} fontWeight="fontWeightBold" fontSize={30}>                {/* <Typography> */}
                  Our mission is to promote social distancing through various social media platforsm to all demopgrahics with our main focus being Gen Z. We hope that communicating the importance of social distancing at a time like this wil make our communities healthier.
                {/* </Typography> */}
              </Box>
            </Grid>
          </Grid>
      </Box>
      <Box width={1}>
        <Grid container space={1} style={{marginTop: "12px"}}>
          <Grid container item xs={6} spacing={3} style={{paddingTop: "35px", paddingBottom: "95px"}}>
            <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeightBold" fontSize={30}>
              Make memes! Help spread the word by making your own memes that encourage social distancing. Post your memes on Instagram, Twitter, or Facebook with #sdcv19. All of the memes will be features in our Meme Gallery and the two best memes will receive stickers from us each month. Visit our Instagram page for more info!
            </Box>
          </Grid>
          <Grid container item xs={6} spacing={3} style={{backgroundColor: "#93BEE6", marginTop: "0px", marginLeft:"12px"}}>
            <Box display="flex" width={1} justifyContent="center" alignItems="center" flexDirection="column">
              <Typography variant="h3" color="secondary">What You Can do</Typography>
              <img src="/outreach.png"></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    

    <style jsx global>{`
      body,html {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `}</style>
  </div>
  </MuiThemeProvider>
)

export default Home
