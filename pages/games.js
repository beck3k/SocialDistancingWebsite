import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Navbar from "../components/Navbar";

const Games = () => {
    return(<React.Fragment>
        <Navbar />
        <Box width={1} display="flex" flexDirection="column">
            <Typography variant="h3">Corona Time</Typography>
            {/* <Button color="primary" variant="contained" width={0.5} href="https://github.com/Winifi/CoronaTime">Github</Button> */}
            <iframe src="/CoronaTime/index.html" width="800px" height="800px" style={{border: 0}}></iframe>
        </Box>
    </React.Fragment>);
}

export default Games;