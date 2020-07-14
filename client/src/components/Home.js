import React, { Fragment } from 'react'
import Navbar from './layout/Navbar'
import About from './About'
import Footer from './layout/Footer'
import { Box } from '@material-ui/core'
import two from './images/two.jpg'
import bg2 from './images/bg2.jpg'

const Home = () => {

    return (
        <Fragment>
            <Navbar />
            <Box component="div" style={mainImgStyle}>
            </Box>
            <Box component="div" style={bgImgStyle}>
                <About />
            </Box>
            <Footer />
        </Fragment>
    )
}

const mainImgStyle = {
    background: 'url(' + two + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px'
}

const bgImgStyle = {
    background: 'url(' + bg2 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px'
}

export default Home

