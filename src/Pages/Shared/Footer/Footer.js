import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>


            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Categories</span>
                    <a className="link link-hover">Iphone</a>
                    <a className="link link-hover">Samsung</a>
                    <a className="link link-hover">Xioami</a>
                    <a className="link link-hover">Realme</a>
                </div>
                <div>
                    <span className="footer-title">Bikroy Bazar</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4  bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by Bikroy Bazar</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;