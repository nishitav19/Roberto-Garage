import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import { Box, AppBar, Toolbar, Typography, IconButton, Button, ListItemText, ListItem, List } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuSlider from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Hidden from '@material-ui/core/Hidden'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    menuSlider: {
        width: 230,
        backgroundColor: '#212121',
        height: '100vh'
    },
    list: {
        color: 'whitesmoke',
        top: '25%'
    },
    drawerHeader: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    iconColor: {
        color: 'whitesmoke'
    }

}))

const svgVariants = {
    hidden: { rotate: -5 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    },
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}


const Navbar = () => {
    const [sidemenu, setSidemenu] = useState({
        isOpen: false
    })

    const handleClick = () => {
        setSidemenu({
            isOpen: true
        })
    }

    const handleClose = () => {
        setSidemenu({
            isOpen: false
        })
    }

    const classes = useStyles()

    const sideList = () => (
        <Box className={classes.menuSlider} component="div">
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleClose}>
                    <ChevronLeftIcon className={classes.iconColor} />
                </IconButton>
            </div>
            <List className={classes.list}>
                <ListItem button divider component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button divider component={Link} to="/services">
                    <ListItemText primary="Services" />
                </ListItem>
                <ListItem button divider component={Link} to="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button divider component={Link} to="/register">
                    <ListItemText primary="Register/Login" />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar position="fixed" style={{ background: '#212121' }}>
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton onClick={handleClick} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Hidden xsDown>
                            <motion.svg style={{
                                width: '65px',
                                overflow: 'visible',
                                stroke: '#fff',
                                strokeWidth: '5',
                                strokeLinejoin: 'round',
                                strokeLinecap: 'round'
                            }} viewBox="340 180 160 100"
                                variants={svgVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.path
                                    fill="none"
                                    d="M 468 204 A 20 20 0 1 1 432 240 L 396 276 L 384 264 L 420 228 A 20 20 0 1 1 456 192 L 432 204 L 456 228 L 468 204 "
                                    variants={pathVariants}
                                />
                            </motion.svg>
                        </Hidden>
                        <Typography variant="h6" className={classes.title}>
                            Roberto & Co.
                        </Typography>
                        <MenuSlider open={sidemenu.isOpen} onClose={handleClose}>
                            {sideList()}
                        </MenuSlider>
                        <Hidden smDown>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/services">Services</Button>
                            <Button color="inherit" component={Link} to="/contact">Contact</Button>
                            <Button color="inherit" component={Link} to="/register">Register/Login</Button>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment >
    );
}

export default Navbar