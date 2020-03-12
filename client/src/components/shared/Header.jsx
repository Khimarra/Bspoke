import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import '../../styles/stylesheets/header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <Link to='/' className='bspoke-title'><h1><span>B</span>spoke</h1></Link>
                <Nav />
            </div>
        </div>
    )
}

export default Header
