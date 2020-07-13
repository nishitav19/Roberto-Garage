import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { Paper, Box, Container, Typography, Button, Hidden } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import red from '@material-ui/core/colors/red'
import Link from '@material-ui/core/Link'
import { withRouter } from 'react-router-dom'
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

const Login = (props) => {
    const classes = useStyles()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuery = {
            email,
            password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newQuery)

            const res = await axios.post('/api/auth', body, config)
            console.log(res.data);

        } catch (error) {
            const errors = error.response.data.errors
            if (errors) {
                // errors.forEach(error => alert(error.msg))
                let l = errors.length
                if (l > 0) {
                    alert(errors[0].msg)
                }
            }
        }
    }
    const initState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false
    }

    const { token, isAuthenticated } = initState

    if (token && isAuthenticated === true) {
        if (email && password) {
            props.history.push('/new')
        }
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
                                        variant="outlined"
                                        name="email"
                                        onChange={handleChange}
                                        style={{ marginTop: '50px' }}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required password"
                                        label="Password"
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
                                        style={{ marginTop: '30px' }}
                                    >
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

export default withRouter(Login)
