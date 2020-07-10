import React, { Fragment, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { Paper, Box, Container, Typography, Button, Hidden } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import red from '@material-ui/core/colors/red'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: red[400],
        }
    }
})

theme.typography.h4 = {
    fontSize: '28px',
    fontWeight: 400,
    '@media (min-width:600px)': {
        fontSize: '29px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '30px',
    }
}

const useStyles = makeStyles({
    avatar: {
        marginLeft: '44%',
        backgroundColor: '#ef5350',
        alignItems: 'center'
    }
})

const Login = () => {
    const classes = useStyles()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Navbar />
                <Paper style={{ height: '140vh', paddingTop: '120px' }}>
                    <Container maxWidth="xs">
                        <Box component="div">
                            <Paper elevation={3} style={{ backgroundColor: '#212121', padding: '30px' }}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography variant="h4" align="center" style={{ color: 'whitesmoke', paddingTop: '30px' }}>
                                    Sign In
                                </Typography>
                                <form noValidate autoComplete="off" style={formStyle} onSubmit={handleSubmit}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        defaultValue="jonaskahnwald@gmail.com"
                                        variant="outlined"
                                        name="email"
                                        onChange={handleChange}
                                        style={{ marginTop: '50px' }}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required password"
                                        label="Password"
                                        defaultValue="Email"
                                        variant="outlined"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        style={{ marginTop: '20px' }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{ marginTop: '30px' }} >
                                        Login
                                    </Button>
                                    <Grid container justify="flex-end" style={{ marginTop: '20px' }}>
                                        <Grid item>
                                            <Link href="/register" variant="body2">
                                                Don't have an account? Sign up
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Box>
                    </Container>
                </Paper>
                <Hidden xsDwon>
                    <Footer />
                </Hidden>
            </Fragment>
        </ThemeProvider >
    )
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
}

export default Login
