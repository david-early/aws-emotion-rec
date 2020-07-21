import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
    return (
        <div>
            <h1>Unauthorized</h1>
            <h2>Sign in to continue</h2>
            <p><Link to='/'>Sign in here</Link></p>
        </div>
    )
}

export default Unauthorized