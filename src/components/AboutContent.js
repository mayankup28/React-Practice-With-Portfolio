import './AboutContent.css'
import top from '../assets/react1.jpg';
import bottom from '../assets/react2.webp';


import React from 'react'
import { NavLink } from 'react-router-dom'

function AboutContent() {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Im I?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cumque culpa a debitis odit.</p>
                <NavLink to="/contact">
                    <button className='btn'>CONTACT</button>
                </NavLink>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="imgst top">
                        <img src={top} alt="img" className='img' />
                    </div>
                    <div className="imgst bottom">
                        <img src={bottom} alt="img" className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent