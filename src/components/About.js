import React, { Fragment } from 'react'
import Navbar from './layout/Navbar'
import { Typography, Grid, Container, Paper } from '@material-ui/core'

const About = () => {
    return (
        <Fragment>
            <Navbar />
            <Container maxWidth="sm">
                <Grid item xs={12}>
                    <Grid container justify="center" style={{ margin: '60px 0 60px 0' }} >
                        <Paper elevation={3}>
                            <Typography variant="h4" align="center" style={{ marginTop: '60px' }}>
                                About
                            </Typography>
                            <Typography variant="body1" align="justify" style={{ margin: '50px' }}>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                Feel free to drag and drop me anywhere you like on your page.
                                I’m a great place for you to tell a story and let your users know a little more about you.
                                This is a great space to write long text about your company and your services.
                                You can use this space to go into a little more detail about your company.
                                Talk about your team and what services you provide.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default About
