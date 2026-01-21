import React from "react";
import Background from "../assets/background_imag.png"

const ContactUs = () => {
  return (
    <div>
    <div
      className="py-5"
      
      style={{
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <h4 className="mb-5 text-muted">Get Started</h4>
            <h1>Let's Build Something </h1>
            <h1 className="mb-5">Extraordinary</h1>

          </div>

        </div>


      </div>
      
    </div>
    <div className="container_fluid bg-light">
      <div className="container">

 
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-md-12 mb-4">
            <h1 className="fw-bold text-primary">Get In Touch</h1>
            <p className="text-dark fs-5 mt-3">
              Have a project in mind? Want to partner, collaborate, or just
              say hello? We'd love to hear from you. Drop us a message and our
              team will get back to you within 24 hours.
            </p>
          </div>

         
          <div className="col-lg-6 col-md-12 py-5">
            <div className="bg-white p-4 rounded-4 shadow-lg" style={{maxWidth:"500px"}}>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact no."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-primary w-100">
            Leave us a message
                </button>
              </form>
                   </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;