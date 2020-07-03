import React, { Fragment } from 'react'
import Navbar from './layout/Navbar'
import { Box } from '@material-ui/core'
import two from './images/two.jpg'

const Home = () => {

    return (
        <Fragment>
            <Navbar />
            <Box component="div" style={mainImgStyle}>
            </Box>
        </Fragment>
    )
}

const mainImgStyle = {
    background: 'url(' + two + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px'
}

export default Home

