
import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">

        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" width="100" />
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
          <ul className="navbar-nav align-items-center gap-3 fw-semibold">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Web Development</a></li>
                <li><a className="dropdown-item" href="#">App Development</a></li>
                <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link no-link" href="/blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link no-link" href="/contact">Contact Us</a></li>
            <li className="nav-item"><a className="nav-link no-link" href="/career">Career</a></li>
            <li className="nav-item"><a className="nav-link no-link" href="/about">About Us</a></li>

            <li className="nav-item">
              <button className="btn btn-primary rounded-pill px-3">
                Get in touch
              </button>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="mobileMenu"
        >
          <div className="offcanvas-header">
            <img src={Logo} alt="Logo" width="90" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav fw-semibold gap-3">

               <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Web Development</a></li>
                <li><a className="dropdown-item" href="#">App Development</a></li>
                <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
              </ul>
            </li>
              <li className="nav-item">
                <a className="nav-link no-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link no-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link no-link" href="/career">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link no-link" href="/about">About Us</a>
              </li>

              <li className="mt-3">
                <button className="btn btn-primary w-100 rounded-pill">
                  Get in touch
                </button>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
