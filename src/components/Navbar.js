import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };
  return (
    <>
      {/* <!-- Header --> */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <ul className="left-info">
                <li>
                  <a href="#">
                    <i className="fa fa-clock-o"></i>Mon-Fri 09:00-17:00
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone"></i>090-080-0760
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="right-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <h2>Ocean Vista</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#top">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <button type="button" class="btn btn-primary">
                Log in
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
