import React from 'react'

function BlogDetails() {
  return (
    <>
  {/* Page Preloder */}
  {/* <div id="preloder">
    <div className="loader" />
  </div> */}
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
  {/* Blog Details Section Begin */}
  <section className="blog-details spad">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="blog__details__title">
            <h6>
              Action, Magic <span>- March 08, 2020</span>
            </h6>
            <h2>Anime for Beginners: 20 Pieces of Essential Viewing</h2>
            <div className="blog__details__social">
              <a href="#" className="facebook">
                <i className="fa fa-facebook-square" /> Facebook
              </a>
              <a href="#" className="pinterest">
                <i className="fa fa-pinterest" /> Pinterest
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin-square" /> Linkedin
              </a>
              <a href="#" className="twitter">
                <i className="fa fa-twitter-square" /> Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="blog__details__pic">
            <img src="img/blog/details/blog-details-pic.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="blog__details__content">
            <div className="blog__details__text">
              <p>
                As a result the last couple of eps haven’t been super exciting
                for me, because they’ve been more like settling into a familiar
                and comfortable routine.&nbsp; We’re seeing character growth
                here but it’s subtle (apart from Shouyou, arguably).&nbsp; I
                mean, Tobio being an asshole is nothing new – it’s kind of the
                foundation of his entire character arc.&nbsp; Confronting
                whether his being an asshole is a problem for the Crows this
                directly is a bit of an evolution, and probably an overdue one
                at that, but the overall dynamic with Kageyama is basically
                unchanged.
              </p>
            </div>
            <div className="blog__details__item__text">
              <h4>Tobio-Nishinoya showdown:</h4>
              <img src="img/blog/details/bd-item-1.jpg" alt="" />
              <p>
                In Japan the idea of a first-year speaking to a senior the way
                Kageyama did to Asahi is a lot more shocking than it would be in
                the West, but Tobio calling out teammates in genuinely rude
                fashion in the middle of a match is what got him isolated in the
                first place.&nbsp; It’s better for the Crows to sort this out in
                practice matches than the real deal, but this is really on Tobio
                – he has to figure out how to co-exist with others in a team
                environment.
              </p>
            </div>
            <div className="blog__details__item__text">
              <h4>Nanatsu no Taizai: Kamigami No Gekirin</h4>
              <img src="img/blog/details/bd-item-2.jpg" alt="" />
              <p>
                In Japan the idea of a first-year speaking to a senior the way
                Kageyama did to Asahi is a lot more shocking than it would be in
                the West, but Tobio calling out teammates in genuinely rude
                fashion in the middle of a match is what got him isolated in the
                first place.&nbsp; It’s better for the Crows to sort this out in
                practice matches than the real deal, but this is really on Tobio
                – he has to figure out how to co-exist with others in a team
                environment.
              </p>
            </div>
            <div className="blog__details__item__text">
              <h4>ID:Ianvaded:</h4>
              <img src="img/blog/details/bd-item-3.jpg" alt="" />
              <p>
                In Japan the idea of a first-year speaking to a senior the way
                Kageyama did to Asahi is a lot more shocking than it would be in
                the West, but Tobio calling out teammates in genuinely rude
                fashion in the middle of a match is what got him isolated in the
                first place.&nbsp; It’s better for the Crows to sort this out in
                practice matches than the real deal, but this is really on Tobio
                – he has to figure out how to co-exist with others in a team
                environment.
              </p>
            </div>
            <div className="blog__details__tags">
              <a href="#">Healthfood</a>
              <a href="#">Sport</a>
              <a href="#">Game</a>
            </div>
            <div className="blog__details__btns">
              <div className="row">
                <div className="col-lg-6">
                  <div className="blog__details__btns__item">
                    <h5>
                      <a href="#">
                        <span className="arrow_left" /> Building a Better LiA...
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog__details__btns__item next__btn">
                    <h5>
                      <a href="#">
                        Mugen no Juunin: Immortal – 21{" "}
                        <span className="arrow_right" />
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__details__comment">
              <h4>3 Comments</h4>
              <div className="blog__details__comment__item">
                <div className="blog__details__comment__item__pic">
                  <img src="img/blog/details/comment-1.png" alt="" />
                </div>
                <div className="blog__details__comment__item__text">
                  <span>Sep 08, 2020</span>
                  <h5>John Smith</h5>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi
                  </p>
                  <a href="#">Like</a>
                  <a href="#">Reply</a>
                </div>
              </div>
              <div className="blog__details__comment__item blog__details__comment__item--reply">
                <div className="blog__details__comment__item__pic">
                  <img src="img/blog/details/comment-2.png" alt="" />
                </div>
                <div className="blog__details__comment__item__text">
                  <span>Sep 08, 2020</span>
                  <h5>Elizabeth Perry</h5>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi
                  </p>
                  <a href="#">Like</a>
                  <a href="#">Reply</a>
                </div>
              </div>
              <div className="blog__details__comment__item">
                <div className="blog__details__comment__item__pic">
                  <img src="img/blog/details/comment-3.png" alt="" />
                </div>
                <div className="blog__details__comment__item__text">
                  <span>Sep 08, 2020</span>
                  <h5>Adrian Coleman</h5>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi
                  </p>
                  <a href="#">Like</a>
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
            <div className="blog__details__form">
              <h4>Leave A Commnet</h4>
              <form action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
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

export default BlogDetails