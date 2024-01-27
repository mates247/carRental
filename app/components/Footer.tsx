import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-box">
                <div className="footer-small-box x">
                    <h2>AutoMatěj.cz</h2>
                </div>
                <div className="footer-small-box">
                    <p>Matěj Bittner</p>
                    <p>IČO: <span>9852456</span></p>
                    <p>DIČ: <span>CZ9852456</span></p>
               </div>
               <div className="footer-small-box">
                    <p>Mobil: <span>9852456</span></p>
                    <p>Telefon: <span>9852456</span></p>
                    <p>Email: <span>auto@matej.cz</span></p>
               </div>
                <div className="footer-small-box x">
                    <p>© 2024 MatějDevelopment</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;