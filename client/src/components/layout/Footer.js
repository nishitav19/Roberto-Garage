import React, { Fragment } from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    iconStyle: {
        color: 'whitesmoke',
        flexGrow: 1
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <Fragment>
            <AppBar position="static" style={{ background: '#212121', bottom: 0 }}>
                <Toolbar>
                    <IconButton className={classes.iconStyle}>
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                        <PinterestIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Footer
