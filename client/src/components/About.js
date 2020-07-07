import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import lounge from './images/lounge.jpg'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'inline-block',
        margin: '10px 0 60px 0'
    },
})

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

theme.typography.body1 = {
    fontSize: '14px',
    '@media (min-width:600px)': {
        fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    }
}

const About = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Container maxWidth="sm">
                    <Grid item xs={12} data-aos="fade-up">
                        <Grid container justify="center" style={{ margin: '60px 0 60px 0' }}>
                            <Paper elevation={3}>
                                <Typography variant="h4" align="center" style={{ marginTop: '60px' }}>
                                    About
                                </Typography>
                                <Typography variant="body1" align="justify" style={{ margin: '50px', fontWeight: 300 }}>
                                    Roberto & Co. is established by experts in the automotive industry
                                    to deliver flawless repair and maintenance of your vintage car. Our state
                                    of the art facility is located in 500 Terry Francois Street, San Francisco,
                                    CA 94158. We have ample space for car parking and the finest customer lounge with
                                    free Wi-Fi. We only use superior quality, German-based paints and authentic
                                    products for part replacement. We at Roberto & Co. aim at making your experience -
                                    hassle free and time efficient.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Card className={classes.root} data-aos="fade-up" style={{ marginBottom: '160px' }}>
                        <CardMedia
                            component="img"
                            height="320"
                            style={ImgStyle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lounge
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </Fragment>
    )
}

const ImgStyle = {
    background: 'url(' + lounge + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250'
}

export default About
