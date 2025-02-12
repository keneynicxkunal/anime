import React from 'react'

function Categories() {
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
  {/* Header End */}
  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links">
            <a href="./Homepage">
              <i className="fa fa-home" /> Home
            </a>
            <a href="./categories">Categories</a>
            <span>Romance</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Product Section Begin */}
  <section className="product-page spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="product__page__content">
            <div className="product__page__title">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                  <div className="section-title">
                    <h4>Romance</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="product__page__filter">
                    <p>Order by:</p>
                    <select>
                      <option value="">A-Z</option>
                      <option value="">1-10</option>
                      <option value="">10-50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-1.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Sen to Chihiro no Kamikakushi</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-2.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Kizumonogatari III: Reiket su-hen</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-3.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-4.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Rurouni Kenshin: Meiji Kenkaku Romantan</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-5.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Mushishi Zoku Shou 2nd Season</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/popular/popular-6.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Monogatari Series: Second Season</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-1.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Great Teacher Onizuka</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-2.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">
                        Fate/stay night Movie: Heaven's Feel - II. Lost
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-3.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-4.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Fate/Zero 2nd Season</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-5.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Kizumonogatari II: Nekket su-hen</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/recent/recent-6.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-1.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-2.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">
                        Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-3.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Shingeki no Kyojin Season 3 Part 2</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-4.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Fullmetal Alchemist: Brotherhood</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-5.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Shiratorizawa Gakuen Koukou</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/trending/trend-6.jpg"
                  >
                    <div className="ep">18 / 18</div>
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5>
                      <a href="#">Code Geass: Hangyaku no Lelouch R2</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__pagination">
            <a href="#" className="current-page">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">
              <i className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="product__sidebar">
            <div className="product__sidebar__view">
              <div className="section-title">
                <h5>Top Views</h5>
              </div>
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  Day
                </li>
                <li data-filter=".week">Week</li>
                <li data-filter=".month">Month</li>
                <li data-filter=".years">Years</li>
              </ul>
              <div className="filter__gallery">
                <div
                  className="product__sidebar__view__item set-bg mix day years"
                  data-setbg="img/sidebar/tv-1.jpg"
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">Boruto: Naruto next generations</a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg mix month week"
                  data-setbg="img/sidebar/tv-2.jpg"
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg mix week years"
                  data-setbg="img/sidebar/tv-3.jpg"
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Sword art online alicization war of underworld
                    </a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg mix years month"
                  data-setbg="img/sidebar/tv-4.jpg"
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Fate/stay night: Heaven's Feel I. presage flower
                    </a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg mix day"
                  data-setbg="img/sidebar/tv-5.jpg"
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">Fate stay night unlimited blade works</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="product__sidebar__comment">
              <div className="section-title">
                <h5>New Comment</h5>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-1.jpg" alt="" />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                  </h5>
                  <span>
                    <i className="fa fa-eye" /> 19.141 Viewes
                  </span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-2.jpg" alt="" />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
                    <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                  </h5>
                  <span>
                    <i className="fa fa-eye" /> 19.141 Viewes
                  </span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-3.jpg" alt="" />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
                    <a href="#">Kizumonogatari III: Reiket su-hen</a>
                  </h5>
                  <span>
                    <i className="fa fa-eye" /> 19.141 Viewes
                  </span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-4.jpg" alt="" />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
                    <a href="#">Monogatari Series: Second Season</a>
                  </h5>
                  <span>
                    <i className="fa fa-eye" /> 19.141 Viewes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Product Section End */}
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

export default Categories
