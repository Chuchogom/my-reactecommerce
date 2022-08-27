import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    
    <footer className="footer section">
        <div className="footer__container container">
            <div className="footer__content">
                <a href className="footer__logo">
                <i class="ri-aliens-fill"></i> Alien Shop
                </a>
                <p className="footer__description">
                    The best clothes of <br />
                    the most recognized brands in <br />
                    the world.
                </p>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">
                    Company
                </h3>
                <ul className="footer__links">
                    <li>
                        <Link to='/' className="footer__link">About</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">Clothes</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">History</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">Shop</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">
                    Information
                </h3>
                <ul className="footer__links">
                    <li>
                        <Link to='/' className="footer__link">Request a quote</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">Find a dealer</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">Contact us</Link>
                    </li>
                    <li>
                        <Link to='/' className="footer__link">Services</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">
                    Follow us
                </h3>
                <ul className="footer__social">
                    <Link to='https://www.facebook.com/' target="_blank" className="footer__social-link">
                        <i className="ri-facebook-fill" />
                    </Link>
                    <Link to='https://www.instagram.com/' target="_blank" className="footer__social-link">
                        <i className="ri-instagram-fill" />
                    </Link>
                    <Link to='https://twitter.com/' target="_blank" className="footer__social-link">
                        <i className="ri-twitter-fill" />
                    </Link>
                </ul>
            </div>
        </div>
        <span className="footer__copy">
            © JAGR. All rigths reserved
        </span>
    </footer>
    

  )
}

export default Footer