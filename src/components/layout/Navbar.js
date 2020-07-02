import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import { Box, AppBar, Toolbar, Typography, Button, IconButton, ListItemText, ListItem, List } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuSlider from '@material-ui/core/Drawer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1
    },
    menuSlider: {
        width: 300,
        backgroundColor: '#212121',
        height: '100vh'
    },
    list: {
        color: 'whitesmoke'
    }

}))

const svgVariants = {
    hidden: { rotate: -180 },
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
};

const Navbar = () => {
    const [sidemenu, setSidemenu] = useState({
        isOpen: false
    })

    const toggleSlider = (slider, open) => () => {
        setSidemenu({ ...sidemenu, [slider]: open })
    }

    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSlider} component="div" onClick={toggleSlider(slider, false)}>
            <List className={classes.list}>
                <ListItem button divider>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Our Work" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#212121' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("isOpen", true)} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
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
                        <Typography variant="h6" className={classes.title}>
                            Roberto & Co.
                    </Typography>
                        <MenuSlider open={sidemenu.isOpen} onClose={toggleSlider("isOpen", false)}>
                            {sideList("isOpen")}
                        </MenuSlider>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    );
}

export default Navbar
