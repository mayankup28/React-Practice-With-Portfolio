import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Pricing.css" 

function Pricing() {
    return (
        <div className="pricing">
            <div className="pricing-container">
                <div className="card">
                    <h3>Besic</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>3 Days</p>
                    <p>3 Pages</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact" className="btn">PURCHASE NOW</NavLink>
                </div>


                <div className="card">
                    <h3>Premimum</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p>2 Days</p>
                    <p>5 Pages</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact" className="btn">PURCHASE NOW</NavLink>
                </div>


                <div className="card">
                    <h3>Business</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>5 Days</p>
                    <p>8 Pages</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact" className="btn">PURCHASE NOW</NavLink>
                </div>


            </div>
        </div>
    )
}

export default Pricing