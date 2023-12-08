import React from "react";
import "./style.css";
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedIN from '../../assets/images/linkedIn.svg';
import youtube from '../../assets/images/youtube.svg';
import ssl_logo from '../../assets/images/ssl-logo.webp';
import ssl_banner from '../../assets/images/SSL-commerz.webp';

const Footer = () => {
  return (
    <div className="bg-footer_bg bg-no-repeat w-full pb-10 h-auto bg-contain mt-32  relative overflow-hidden">
      <div className="bg_layer overflow-hidden"></div>
      <div className="mt-28 grid grid-flow-row -z-50 lg:grid-cols-2 w-full mx-20 ">
        <div className="lg:flex lg:justify-between">
          <div className="text-white text-sm z-50 space-y-2 text-center lg:mr-0 mr-32">
            <p className="text-center">Level-4, 34, Awal Centre, Banani, Dhaka</p>
            <p>Support: web@programming-hero.com</p>
            <p>(Available : 10:00am to 07:00pm)</p>
          </div>
          <ul className="text-white text-sm z-50 space-y-2 lg:text-left text-center lg:mt-0 mt-8 lg:mr-0 mr-32">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Success Page</a>
            </li>
            <li>
              <a href="">Terms And Condition</a>
            </li>
          </ul>
        </div>
        <div className="z-50 flex flex-col items-center lg:mr-0 mr-32 lg:mt-0 mt-12">
            <h4 className="text-white text-center">Follow Us</h4>
            <div className="flex space-x-8 mt-3">
                <img src={facebook} alt="" />                
                <img src={instagram} alt="" />                
                <img src={linkedIN} alt="" />                
                <img src={youtube} alt="" />                
            </div>
        </div>
      </div>

      <div className="mt-20 lg:flex justify-between mx-20 items-center">
        <div className="z-50 flex justify-center">
            <div className="">
            <h3 className="z-50 text-white text-center">Play with</h3>
            <img src={ssl_logo} alt="" className="z-50" />
            <img src={ssl_banner} alt="" className="z-50" />
 
            </div>
       </div>
        <p className="text-white text-center">@Programming Hero 2023</p>
      </div>
    </div>
  );
};

export default Footer;
