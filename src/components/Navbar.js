import React from "react";

const Navbar = () => {
  return (
    <header className="header header-1">
      <div className="main-wrapper">
        <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              {/* <img src="assets/img/logo/logo.jpg" className="logo-display" alt="thumb" />
              <img src="assets/img/logo/logo.jpg" className="logo-scrolled" alt="thumb" /> */}
            </a>
            <button className="navbar-toggler toggler-spring">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center">
              <ul className="navbar-nav navbar-mobile mr-0">
                <li className="nav-item">
                  <a className="nav-link" href="#Marketplace">
                    Marketplace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#for_suppliers">
                    For suppliers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#for_buyers">
                    For buyers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact_us">
                    Contact us
                  </a>
                </li>
                <li className="nav-item get-down">
                  <a className="nav-link for-mobile" href="">
                    Log in
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    style={{ color: "#fff" }}
                    className="btn-1 btn-sec btn-sm btn-circle for-mobile"
                    href=""
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>

            <div className="collapse navbar-collapse justify-content-md-center">
              <ul className="navbar-nav mr-0">
                <li className="nav-item ">
                  <a className="nav-link for-mobile" href="">
                    Log in
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    style={{ color: "#fff" }}
                    className="btn-1 btn-sec btn-sm btn-circle for-mobile"
                    href=""
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bsnav-mobile">
          <div className="bsnav-mobile-overlay"></div>
          <div className="navbar" style={{ padding: "15px 0px 0px 15px" }}>
            {/* <img src="assets/img/logo/logo.jpg" className="logo-scrolled" alt="thumb" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
