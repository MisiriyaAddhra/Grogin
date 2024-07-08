// import React from 'react';
// import "./Footer.css"

// function Footer() {
//   return (
//     <section className="footer-container">
//         <div className="newsletter">
//           <div className="newsletter-left">
//             <h3 className="letter-h3">Join our newsletter for £10 offs</h3>
//             <p className="letter-p">Register now to get latest updates on promotions &
//               coupons.Don’t worry, we not spam!</p>
//           </div>
//           <div className="newsletter-right">
//             <div className="subscribe">
//               <input type="email" placeholder="Enter your email" className="email-input" />
//               <button>SEND</button>
//             </div>
//             <div className="agreement">
//             By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
//             </div>
//           </div>

//         </div>
//       </section>
//   )
// }

// export default Footer


// import React, { useState } from 'react';
// import "./Footer.css"

// const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//     console.log(`Email: ${email}`);
//   };

//   return (
//     <section className="footer-container">
//       <div className="newsletter">
//         <div className="newsletter-left">
//           <h3 className="letter-h3">Join our newsletter for £10 offs</h3>
//           <p className="letter-p">Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
//         </div>
//         <div className="newsletter-right">
//           <form onSubmit={handleSubmit} className="subscribe-form">
//             <div className="form-group">
//               <input
//                 type="email"
//                 id="email"
//                 placeholder='Enter your email address...'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button type="submit">SEND</button>
//             </div>
//           </form>
//           <div className="agreement">
//             By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Footer;

import React, { useState } from 'react';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import playstore from "../assets/play.png";
import apple from "../assets/play (2).png";
import klarna from "../assets/klarna.png";
import circle from "../assets/circle.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import skril from "../assets/skril.png";
import "./Footer.css"


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(`Email: ${email}`);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };


  return (
    <section className="footer-container">
      <div className="newsletter">
        <div className="newsletter-left">
          <h3 className="letter-h3">Join our newsletter for £10 offs</h3>
          <p className="letter-p">Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!</p>
        </div>
        <div className="newsletter-right">
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-subscribe">
              <input className='subscribe'
                type="email"
                id="email"
                placeholder='Enter your email address...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">SEND</button>
            </div>
          </form>
          {isSubmitted && (
            <div className="popup-message">
              <span className="tick-mark">✔</span>
              Subscribed successfully!
            </div>
          )}
          <div className="agreement">
            By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
          </div>
        </div>
      </div>
      <div className='footer-middle'>
        <div className='footer-middle-left'>
          <div className='column'>
            <div className='help-desk'>
              <h4>Do You Need Help ?</h4>
              <p className='help'>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
            </div>
            <div className='call'>
              <span className='phn'>
                <LiaPhoneVolumeSolid className='phn-icon' />
              </span>
              <div className='details'>
                <small className='time'>Monday-Friday: 08am-9pm</small>
                <small className='phn-number'>+1 800 123 4567</small>
              </div>
            </div>
            <div className='mail'>
              <span className='envelop'>
                <FaRegEnvelope className='mail-icon' />
              </span>
              <div className='details'>
                <small className='order'>Need help with your order? </small>
                <small className='mail-id'>info@example.com</small>
              </div>
            </div>
          </div>
        </div>
        <div className='link-boxes'>
          <div className='box'>
            <h4>Make Money with Us</h4>
            <ul className='links'>
              <li><a className='link' href='#'>Sell on Grogin</a></li>
              <li><a className='link' href='#'>Sell on Grogin Business</a></li>
              <li><a className='link' href='#'>Sell Your Apps on Grogin</a></li>
              <li><a className='link' href='#'>Advertise Your Products</a></li>
              <li><a className='link' href=''>Become an Affilate</a></li>
              <li><a className='link' href=''>Advertise Your Products</a></li>
              <li><a className='link' href=''>Sell-Publish with Us</a></li>
              <li><a className='link' href=''>Become an Blowwe Vendor</a></li>
            </ul>
          </div>

          <div className='box'>
            <h4> Let Us Help You</h4>
            <ul className='links'>
              <li><a className='link' href='#'>Accessibility Statement</a></li>
              <li><a className='link' href='#'>Your Orders</a></li>
              <li><a className='link' href='#'>Returns & Replacements</a></li>
              <li><a className='link' href='#'>Shipping Rates & Policies</a></li>
              <li><a className='link' href=''>Refund and Returns Policy</a></li>
              <li><a className='link' href=''>Privacy Policy</a></li>
              <li><a className='link' href=''>Terms and Conditions</a></li>
              <li><a className='link' href=''>Cookie Settings</a></li>
              <li><a className='link' href=''>Help Center</a></li>
            </ul>
          </div>

          <div className='box'>
            <h4>Get to Know Us</h4>
            <ul className='links'>
              <li><a className='link' href='#' >Careers for Grogin</a></li>
              <li><a className='link' href='#'>About Grogin</a></li>
              <li><a className='link' href='#'>Inverstor Relations</a></li>
              <li><a className='link' href='#'>Grogin Devices</a></li>
              <li><a className='link' href=''>Customer reviews</a></li>
              <li><a className='link' href=''>Social Responsibility</a></li>
              <li><a className='link' href=''>Store Locations</a></li>
            </ul>
          </div>
        </div>

        <div className='column-2'>
          <h4>Download our app</h4>
          <div className='app-boxes'>
            <div className='playstore'>
              <button><img src={playstore} /></button>
              <p className='play'>Download App Get-10% Discount</p>
            </div>

            <div className='apple'>
              <button><img src={apple} /></button>
              <p className='play'>Download App Get-10% Discount</p>
            </div>
          </div>

          <div className='social'>
            <h4>Follow us on social media:</h4>
            <ul className='medias'>
              <li className='media'><button className='insta'><FaInstagram className='instagram' /></button></li>
              <li className='media'><button className='face'> <FaFacebookF className='facebook' /></button></li>
              <li className='media'><button className='twit'><FaTwitter className='twitter' /></button></li>
              <li className='media'><button className='linked'><FaLinkedinIn className='linkedin' /></button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='copyright'>
          <p className='copy'>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
          <ul className='payments'>
            <li><a href='' className='pay'><img src={visa} /></a></li>
            <li><a href='' className='pay'><img src={paypal} /></a></li>
            <li><a href='' className='pay'><img src={skril} /></a></li>
            <li><a href='' className='pay'><img src={circle} /></a></li>
            <li><a href='' className='pay'><img src={klarna} /></a></li>
          </ul>
        </div>
        <div className='policy'>
          <ul className='policy-list'>
            <li><a href='' className='policy-link'>Privacy Policy</a></li>
            <li><a href='' className='policy-link'>Terms & Conditions</a></li>
            <li><a href='' className='policy-link'>Order Tracking</a></li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;



