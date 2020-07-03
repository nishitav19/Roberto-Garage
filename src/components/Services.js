import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Box, Grid, CardContent, Container, CardMedia, Typography } from '@material-ui/core'
import leather from './images/leather.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'inline-block'
    }
});

function Services() {
    const classes = useStyles();

    return (
        <Box>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    height="250"
                    style={ImgStyle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Upholstery
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    height="250"
                    style={ImgStyle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Upholstery
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors
                </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

const ImgStyle = {
    background: 'url(' + leather + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250'
}

export default Services