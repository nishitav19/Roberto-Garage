import React, { Fragment } from 'react'
import Footer from './layout/Footer'
import { Box, Container, Typography, Hidden } from '@material-ui/core'
import bg2 from './images/bg2.jpg'
import Navbar from './layout/Navbar'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const Confirmation = () => {
    return (
        <Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Box style={mainImgStyle}>
                    <Container style={{ paddingTop: '300px' }}>
                        <Hidden xsDown>
                            <Container style={{
                                backgroundColor: 'whitesmoke',
                                width: '80%',
                                height: '8%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '25px',
                                boxShadow: '10px 10px',
                            }}>
                                <Typography variant="h4" align="center" style={{ padding: '20px' }}>
                                    We'll send you the confirmation details to your email soon!
                                </Typography>
                            </Container>
                        </Hidden>
                        <Hidden smUp>
                            <Container style={{
                                backgroundColor: 'whitesmoke',
                                width: '100%',
                                height: '8%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '25px',
                                boxShadow: '10px 10px',
                            }}>
                                <Typography variant="h4" align="center" style={{ padding: '20px' }}>
                                    We'll send you the confirmation details to your email soon!
                                </Typography>
                            </Container>
                        </Hidden>
                    </Container>
                </Box>
            </ThemeProvider>
            <Footer />
        </Fragment>
    )
}

const mainImgStyle = {
    background: 'url(' + bg2 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px',
}

export default Confirmation
