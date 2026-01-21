import React from "react";
import Logo from "../assets/logo.png";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-white pt-5 border-top">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-4">
            <img src={Logo} alt="Logo" width="120" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Important Links</h5>
            <ul className="list-unstyled">
   <Link to="/" className="no-link">          <li className="mb-2 fw-semibold">Home</li></Link> 
       <Link to="/about" className="no-link"><li className="mb-2 fw-semibold">About Us</li></Link>       
       <Link to="/contact" className="no-link">      <li className="mb-2 fw-semibold">Contact Us</li> </Link> 
        <Link to="/career" className="no-link">        <li className="mb-2 fw-semibold">Career</li></Link> 
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3 text-primary">For Sales</h5>

            <p className="mb-2 fw-semibold ">
              <MdOutlineMail size={25} /> &nbsp; 

              <span className="text-primary">

               info.prismatechso@gmail.com
              </span>
            </p>
            <p className="mb-3 fw-semibold ">
              <FaPhoneAlt size={20} />  &nbsp; 

              <span className="text-primary">

                +91-8765432456
              </span>
            </p>

            <div className="d-flex gap-3 mb-4">
              <span className=" border border-primary d-flex  align-items-center justify-content-center rounded-circle px-2 py-2">
             <a href="https://www.facebook.com/" className="no-link"> <FaFacebookF size={20} /></a>
             
              </span>
              <span className="border border-primary d-flex no-link align-items-center rounded-circle px-2 py-2">
              <a href="https://www.linkedin.com/" className="no-link"> <FaLinkedinIn size={20} /></a> 
              </span>
              <span className="border border-primary  d-flex no-link  align-items-center justify-content-center rounded-circle px-2 py-2">
               <a href="https://www.instagram.com/" className="no-link"><RiInstagramFill size={20} /></a> 
              </span>
              <span className="border border-primary d-flex  no-link align-items-center  rounded-circle px-2 py-2">
               <a href="https://x.com/" className="no-link"><BsTwitterX size={20} /> </a> 
              </span>
            </div>

            <h5 className="fw-bold mb-2 text-primary">Branch Office</h5>
            <p className="small fw-semibold">
              Crystal IT PARK , Khandwa Rd,
              Indra Puri Colony, near Bhawar Kuwan Square, Indore, Madhya
              Pradesh 452001
            </p>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Direction</h5>

            <iframe
              title="map"
              src="https://www.google.com/maps?q=indore&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <h5 className="fw-bold mt-3 text-primary">Head Office</h5>
            <p className="small fw-semibold">
              IT Park, 28, Indore - Dhar Rd, Sinhasa, Indore, Madhya Pradesh 45200
            </p>
          </div>
        </div>

        <div className="text-center border-top pt-3 mt-4">
          <small>Copyright © 2026 Prismatechso.com</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
