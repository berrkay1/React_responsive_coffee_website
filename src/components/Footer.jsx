import React from 'react'
import '../components/Footer.css';

function Footer() {
    return (
        <div className='footer' style={{ color: 'beige' }}>
            <div className="footer-icons">
                <div class="fa-brands fa-facebook"></div>
                <div class="fa-brands fa-telegram"></div>
                <div class="fa-brands fa-instagram"></div>
                <div class="fa-brands fa-twitter"></div>
                <div class="fa-brands fa-linkedin-in"></div>
            </div>

            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>

        </div>
    )
}

export default Footer