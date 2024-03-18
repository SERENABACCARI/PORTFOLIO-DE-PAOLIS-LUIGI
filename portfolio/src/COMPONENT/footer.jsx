import React from 'react';
import img from "../immagini/Logo.PNG"


export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                <h3>Link utili</h3>

                <div><a href="/About">Chi sono</a></div>
                <div><a href="/contact">Contatti</a></div>

            </div>
            <div>
                <p>&copy; 2024 De Paolis Luigi</p>
                <img className="LOGO" alt="LOGO" src={img} />
            </div>
        </footer>
    );
}