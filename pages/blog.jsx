import React from 'react'

function Blog() {
  return (
    <>
  {/* Header Section Begin */}
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="header__logo">
            <a href="./">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="header__nav">
            <nav className="header__menu mobile-menu">
              <ul>
                <li>
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
                <li className="active">
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
  {/* Header End */}
  {/* Normal Breadcrumb Begin */}
  <section
    div className="normal-breadcrumb set-bg" 
    style={{ backgroundImage: `url(${require('../images/normal-breadcrumb.jpg')})` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="normal__breadcrumb__text">
            <h2>Our Blog</h2>
            <p>Welcome to the official Anime&nbsp;blog.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Normal Breadcrumb End */}
  {/* Blog Section Begin */}
  <section className="blog spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div
                div className="blog__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-1.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-4.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Bok no Hero Academia Season 4 – 18</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-5.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Fate/Stay Night: Untimated Blade World</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                div className="blog__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-7.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">
                      Housekishou Richard shi no Nazo Kantei Season 08 - 20
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-10.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Fate/Stay Night: Untimated Blade World</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-11.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Building a Better LiA Drilling Down</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-2.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Fate/Stay Night: Untimated Blade World</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-3.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Building a Better LiA Drilling Down</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                div className="blog__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-6.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-8.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Bok no Hero Academia Season 4 – 18</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                div className="blog__item small__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-9.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Fate/Stay Night: Untimated Blade World</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                div className="blog__item set-bg" 
                style={{ backgroundImage: `url(${require('../images/blog/blog-12.jpg')})` }}
              >
                <div className="blog__item__text">
                  <p>
                    <span className="icon_calendar" /> 01 March 2020
                  </p>
                  <h4>
                    <a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
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
            <a href="./">
              <img src="img/logo.png" alt="" />
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
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Search model Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">
        <i className="icon_close" />
      </div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search model end */}
  {/* Js Plugins */}
</>

  )
}

export default Blog
