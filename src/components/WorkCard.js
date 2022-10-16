import "./Work.css"

import React from 'react'
import { NavLink } from "react-router-dom"

function WorkCard(props) {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="img" />
            <h2 className="project-title">{props.titel}</h2>
            <div className="detailes">
                <p>{props.text}</p>
            </div>
            <div className="pro-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
    )
}

export default WorkCard