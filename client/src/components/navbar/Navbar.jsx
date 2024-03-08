import React from 'react'
import './Navbar.css'
import logowtext from '../../assets/logowithtext.png'

const Navbar = () => {
    return (
    <nav class='container'>
        <img src={logowtext} class='logo' alt=''/>
        <ul>
            <li>Home</li>
            <li>Course</li>
            <li>Community</li>
            <li>Premium</li>
            <li><button class='btn'>Login</button></li>
        </ul>
    </nav>
    )
}

export default Navbar
