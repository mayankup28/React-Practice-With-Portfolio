import "./Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'


import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>123 Prayag</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            1-234-567-890
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            samplePort@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About The Company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum ipsa odio illo incidunt tempora!</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer