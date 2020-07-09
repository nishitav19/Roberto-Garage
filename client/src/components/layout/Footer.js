import React, { Fragment } from 'react'
import { Box, Typography, Link } from '@material-ui/core'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

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

const Footer = () => {

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Box position="static" style={{ background: '#212121', height: '55px', bottom: 0 }}>
                    <Typography variant="body1" color="textSecondary" align="center" style={{ paddingTop: '18px', color: 'whitesmoke' }}>
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            Roberto & Co.
                    </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Fragment>
        </ThemeProvider>
    )
}

export default Footer