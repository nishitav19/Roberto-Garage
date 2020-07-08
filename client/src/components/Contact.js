import React, { Fragment } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { Paper, Box, Container, Typography, Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: red[400],
        }
    }
})

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Navbar />
                <Paper style={{ height: '140vh', paddingTop: '120px' }}>
                    <Container maxWidth="xs">
                        <Box component="div">
                            <Paper elevation={3} style={{ backgroundColor: '#212121', padding: '30px' }}>

                                <Typography variant="h4" align="center" style={{ color: 'whitesmoke', paddingTop: '15px' }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="body2" align="center" style={{ color: 'whitesmoke', paddingTop: '10px' }}>
                                    We're here for you!
                                </Typography>
                                <Grid container spacing={2} style={{ marginTop: '25px', color: 'whitesmoke' }}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>
                                            ADDRESS
                                       </Typography>
                                        <Typography variant="body2">
                                            500 Terry Francois Street, San Francisco, CA 94158
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>
                                            OPENING HOURS
                                        </Typography>
                                        <Typography variant="body2">
                                            Mon - Fri: 7am - 10pm
                                            Saturday: 8am - 10pm
                                            Sunday: 8am - 11pm
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <form noValidate autoComplete="off" style={formStyle}>
                                    <TextField required id="standard-required" label="Name" defaultValue="" style={{ marginTop: '20px' }} />
                                    <TextField required id="standard-required" label="Email" defaultValue="" style={{ marginTop: '10px' }} />
                                    <TextField required id="standard-required" label="Message" defaultValue="" multiline="true" rowsMax="4" style={{ marginTop: '10px' }} />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{ marginTop: '30px' }} >
                                        Send
                                </Button>
                                </form>
                            </Paper>
                        </Box>
                    </Container>
                </Paper>
                <Footer />
            </Fragment>
        </ThemeProvider >
    )
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
}

export default Contact