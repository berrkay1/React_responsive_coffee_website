import React from 'react'
import '../components/Contact.css';

function Contact() {
    return (
        <div className='contact' style={{color:'beige'}} >
            
                <iframe
                 className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6018.381912348706!2d29.001449626226005!3d41.04295301718887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a02dde1ee7%3A0xc2a9388a2a080c63!2zQmXFn2lrdGHFnywgU2luYW5wYcWfYSwgQmXFn2lrdGHFny_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1651681292025!5m2!1str!2str" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                
            

            <div className="contact-form">
                    <h2>Get İn Contact</h2>
                    <div className="form">
                        <div className="input">
                        <i class="fa-solid fa-user"></i>
                        <input className='inpt' type="text" placeholder='user name'/>
                        </div>
                        <div className="input">
                        <i class="fa-solid fa-envelope"></i>
                        <input className='inpt' type="email" placeholder='gmail'/>
                        </div>
                        <div className="input">
                        <i class="fa-solid fa-phone"></i>
                        <input className='inpt' type="number" placeholder='Phone Number'/>
                        </div>
                        <button type='submit' className='contact-btn' >Submit</button>
                    </div>
                </div>
        </div>
    )
}

export default Contact