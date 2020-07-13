import React from 'react'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const Component = props.component
    const isAuthenticated = sessionStorage.getItem("token")
    console.log(isAuthenticated);
    return isAuthenticated ? (<Component />) : (<Redirect to={{ pathname: '/login' }} />)

}

export default ProtectedRoute