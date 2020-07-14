import React, { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { makeStyles } from '@material-ui/core/styles'
import consult from './images/consult.jpg'
import bg from './images/bg.jpg'
import { Box, Container, Typography, Button, Card, CardMedia, CardContent } from '@material-ui/core'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles({
    root: {
        width: '100%',
        align: 'center',
        flexDirection: 'row',
        margin: '30px 0 30px 0'
    }
});

const Dashboard = () => {

    const classes = useStyles()

    const [selectedDate, setSelectedDate] = useState(null)

    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "15px", marginLeft: "-60px", background: "#216ba5", color: "#fff" }}>
                <div className={className}>
                    <div style={{ position: "relative" }}>{children}</div>
                </div>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('done');
    }

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Box component="div" style={mainImgStyle}>
                    <Container maxWidth="xs" style={{ paddingBottom: '150px' }}>
                        <Typography variant="h4" align="center" style={{ paddingTop: '100px' }}>
                            Book Now
                        </Typography>
                        <Card className={classes.root}>
                            <CardMedia
                                component="img"
                                height="250"
                                style={Img1Style}
                            />
                            <CardContent style={{ backgroundColor: '#f5f5f5' }}>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    Consultation
                                </Typography>
                                <Typography align="center" variant="body2" color="textSecondary" component="p">
                                    2 hours - $100
                                </Typography>
                                <Container align="center" style={{ paddingTop: '20px' }}>
                                    <form onSubmit={handleSubmit}>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat='dd/MM/yyyy'
                                            minDate={new Date()}
                                            isClearable
                                            placeholderText="Select a date"
                                            calendarContainer={MyContainer}
                                            required
                                        />
                                        <Container maxWidth="xs">
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                style={{ marginTop: '25px', marginBottom: '30px' }}
                                            >
                                                Book
                                            </Button>
                                        </Container>
                                    </form>
                                </Container>
                            </CardContent>
                        </Card>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </Fragment>
    )
};

const Img1Style = {
    background: 'url(' + consult + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const mainImgStyle = {
    background: 'url(' + bg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px',
    backgroundBlendMode: 'lighten'
}

export default Dashboard

