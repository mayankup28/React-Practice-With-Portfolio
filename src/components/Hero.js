import "./Hero.css"
import { NavLink } from 'react-router-dom'
import React from 'react'
import Intro from '../assets/intro-bg.jpg'

function Hero() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro" src={Intro} alt="img" />
            </div>
            <div className="content">
                <p>IM A WEBDEVLOPER</p>
                <h1>React Devloper</h1>
                <div>
                    <NavLink to="/project" className='btn'>Projects</NavLink>
                    <NavLink to="/contact" className='btn btn-light' >Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero