import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function Homepage() {
  return (
    <>
      {/* Page Preloder */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <a href="./">
                  <img src="img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <a href="./">Homepage</a>
                    </li>
                    <li>
                      <a href="./categories">
                        Categories <span className="arrow_carrot-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="./categories">Categories</a>
                        </li>
                        <li>
                          <a href="./animedetails">Anime Details</a>
                        </li>
                        <li>
                          <a href="./animewatching">Anime Watching</a>
                        </li>
                        <li>
                          <a href="./blogdetails">Blog Details</a>
                        </li>
                        <li>
                          <a href="./singup">Sign Up</a>
                        </li>
                        <li>
                          <a href="./login">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./blog">Our Blog</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header__right">
                <a href="#" className="search-switch">
                  <span className="icon_search" />
                </a>
                <a href="./login">
                  <span className="icon_profile" />
                </a>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>

      {/* Hero Section Begin */}
      <section className="hero">
        <div className="container">
          <OwlCarousel className="hero__slider owl-carousel">
            <div className="hero__items" style={{ backgroundImage: `url(${require('../images/hero-1.jpg')})` }}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#">
                      <span>Watch Now</span> <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more carousel items here */}
          </OwlCarousel>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <a href="./Homepage">
                  <img src="img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <a href="./">Homepage</a>
                  </li>
                  <li>
                    <a href="./categories">Categories</a>
                  </li>
                  <li>
                    <a href="./blog">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
}

export default Homepage;