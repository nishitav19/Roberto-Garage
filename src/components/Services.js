import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './layout/Footer'
import { Card, Box, CardContent, Container, CardMedia, Typography } from '@material-ui/core'
import leather from './images/leather.jpg'
import repair from './images/repair.jpg'
import paint from './images/paint.jpg'
import grid1 from './images/grid1.jpg'
import grid2 from './images/grid2.jpg'
import grid3 from './images/grid3.jpg'
import grid4 from './images/grid4.jpg'
import grid5 from './images/grid5.jpg'
import grid6 from './images/grid6.jpg'
import Navbar from './layout/Navbar'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        align: 'center',
        marginTop: '30px'
    }
});

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

function Services() {

    const classes = useStyles()

    return (
        <Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Box>
                    <Container maxWidth="sm">
                        <Typography variant="h4" align="center" style={{ marginTop: '100px' }}>
                            Services
                        </Typography>
                        <Card className={classes.root} data-aos="fade-up">
                            <CardMedia
                                component="img"
                                height="250"
                                style={Img1Style}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Upholstery
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.root} data-aos="fade-up">
                            <CardMedia
                                component="img"
                                height="250"
                                style={Img2Style}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Repairs
                               </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    General Repairs,
                                    Specialist Repairs
                                    & Vintage Parts
                               </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.root} data-aos="fade-up">
                            <CardMedia
                                component="img"
                                height="250"
                                style={Img3Style}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Paint
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Spray paint, Custom Stencilling & Variety of Custom Made Artwork
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                    <Typography variant="h4" align="center" style={{ marginTop: '100px' }}>
                        Our Work
                        </Typography>
                    <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                        A collection of cars we've renovated with passion
                        </Typography>
                </Box>
                <Container maxWidth="md">
                    <div style={{ marginTop: '50px', marginBottom: '160px' }}>
                        <div data-aos="fade-up" style={{ marginLeft: '15%' }}>
                            <img src={grid2} alt="" style={gridImg} />
                            <img src={grid3} alt="" style={gridImg} />
                            <img src={grid4} alt="" style={gridImg} />
                            <img src={grid5} alt="" style={gridImg} />
                            <img src={grid1} alt="" style={gridImg} />
                            <img src={grid6} alt="" style={gridImg} />
                        </div>
                    </div>
                </Container>
            </ThemeProvider>
            <Footer />
        </Fragment>
    );
}

const gridImg = {
    width: '40%',
    marginRight: '5px'
}

const Img1Style = {
    background: 'url(' + leather + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const Img2Style = {
    background: 'url(' + repair + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const Img3Style = {
    background: 'url(' + paint + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

export default Services