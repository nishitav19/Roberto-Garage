import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import grid7 from './images/grid7.jpg'
import grid8 from './images/grid8.jpg'
import Navbar from './layout/Navbar'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'inline-block',
        margin: '55px 30px 55px 30px'
    }
});

function Services() {

    const classes = useStyles()

    return (
        <Fragment>
            <Navbar />
            <Container>
                <Box>
                    <Typography variant="h4" align="center" style={{ marginTop: '60px' }}>
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

                    <Typography variant="h4" align="center" style={{ marginTop: '60px' }}>
                        Our Work
                        </Typography>
                    <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                        A collection of cars we've renovated with passion
                        </Typography>
                </Box>
                <div style={{ marginTop: '50px', marginBottom: '60px' }}>
                    <div data-aos="fade-up" style={{ marginLeft: '15%' }}>
                        <img src={grid2} alt="" style={gridImg} />
                        <img src={grid3} alt="" style={gridImg} />
                        <img src={grid4} alt="" style={gridImg} />
                        <img src={grid5} alt="" style={gridImg} />
                        <img src={grid1} alt="" style={gridImg} />
                        <img src={grid6} alt="" style={gridImg} />
                        <img src={grid7} alt="" style={gridImg} />
                        <img src={grid8} alt="" style={gridImg} />
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

const gridImg = {
    width: '20%',
    marginRight: '5px'
}

const Img1Style = {
    background: 'url(' + leather + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250'
}

const Img2Style = {
    background: 'url(' + repair + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250'
}

const Img3Style = {
    background: 'url(' + paint + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250'
}

export default Services