import React from "react";
import About from "../assets/about.jpg"

const AboutUs = () => {
  return (
    <div>
     
      
        <div className="container py-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="fs-5 col-lg-8">
            We are a technology-driven team focused on building scalable,
            secure, and impactful digital solutions for businesses worldwide.
          </p>
        </div>
     

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="text-muted">
                We are a passionate group of developers, designers, and problem
                solvers who believe in the power of technology to transform
                businesses. Our solutions are designed with precision,
                performance, and user experience in mind.
              </p>
              <p className="text-muted">
                From startups to enterprises, we help organizations turn ideas
                into successful digital products.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={About}
                alt="Our Team"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <h2 className="fw-bold text-primary">150+</h2>
              <p className="text-muted">Projects Completed</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="fw-bold text-primary">80+</h2>
              <p className="text-muted">Happy Clients</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="fw-bold text-primary">6+</h2>
              <p className="text-muted">Years Experience</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="fw-bold text-primary">24/7</h2>
              <p className="text-muted">Support</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 border rounded-4 h-100">
                <h3 className="fw-bold">Our Mission</h3>
                <p className="text-muted">
                  To empower businesses through innovative, reliable, and
                  future-ready digital solutions that create measurable impact.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 border rounded-4 h-100">
                <h3 className="fw-bold">Our Vision</h3>
                <p className="text-muted">
                  To become a globally trusted technology partner delivering
                  excellence through innovation and commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <p className="text-muted">What drives everything we do</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="p-4 bg-white rounded-4 shadow h-100">
                <h5 className="fw-bold">Innovation</h5>
                <p className="text-muted">
                  We constantly explore new technologies to deliver smarter
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-4 bg-white rounded-4 shadow h-100">
                <h5 className="fw-bold">Integrity</h5>
                <p className="text-muted">
                  Transparency and honesty are at the core of our work culture.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-4 bg-white rounded-4 shadow h-100">
                <h5 className="fw-bold">Excellence</h5>
                <p className="text-muted">
                  We strive for high-quality outcomes in everything we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Let’s Build Something Great Together</h2>
          <p className="text-muted mb-4">
            Have an idea or a project in mind? We’re here to help you bring it to
            life.
          </p>
          <a href="/contact" className="btn btn-primary px-5 py-2">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;