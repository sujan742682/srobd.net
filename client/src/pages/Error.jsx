import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError();
    console.log(error);
    if(error.status===404){
        return (
            <div>
                <h1>404 Not Found Error.</h1>
                <Link to="/">Go Home</Link>
            </div>
        )
    }
    return (
        <div>
            <h1>Something went wrong.</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default Error