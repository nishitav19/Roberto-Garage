import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import lounge from './images/lounge.jpg'

const useStyles = makeStyles({
    root: {
        minWidth: 555,
        display: 'inline-block'
    }
});

const About = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Container maxWidth="sm">
                <Grid item xs={12}>
                    <Grid container justify="center" style={{ margin: '60px 0 60px 0' }}>
                        <Paper elevation={3}>
                            <Typography variant="h4" align="center" style={{ marginTop: '60px' }}>
                                About
                            </Typography>
                            <Typography variant="body1" align="justify" style={{ margin: '50px' }}>
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
                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        height="250"
                        style={ImgStyle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lounge
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
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
