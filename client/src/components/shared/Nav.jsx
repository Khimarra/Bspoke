import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to='/login' className='login-reg-nav'><h4>Login</h4></Link>
            <Link to='/registration' className='login-reg-nav'><h4>New User</h4></Link>
        </div>
    )
}

export default Nav
