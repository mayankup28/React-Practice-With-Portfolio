import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [click, setclick] = useState(false)
    const handelClick = () => {
        setclick(!click)
    }
    const [color, setcolor] = useState(false)
    const changecolor = () => {
        if (window.scrollY >= 100) {
            setcolor(true)
        }else{
            setcolor(false)
        }
    }

    window.addEventListener('scroll',changecolor)
    return (
        <div className={color?"header header-bg":"header"}>
            <NavLink to='/'><h1>Portfolio</h1></NavLink>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/project'>Project</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <div className="ham" onClick={handelClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
    )
}

export default Navbar