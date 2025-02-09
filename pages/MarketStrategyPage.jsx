import React, { useState } from 'react';

const MarketStrategyPage = () => {
  const [superCoins, setSuperCoins] = useState(150); 
  const [discount, setDiscount] = useState(0); 
  const [productPrice, setProductPrice] = useState(0); 
  const [message, setMessage] = useState(''); 

  // Function to handle Super Coins investment
  const investSuperCoins = () => {
    if (productPrice <= 0) {
      setMessage('Please enter a valid product price.');
      return;
    }

    if (superCoins <= 0) {
      setMessage('You do not have enough Super Coins to invest.');
      return;
    }

    // Calculate discount (1 Super Coin = 1 Rupee discount)
    const calculatedDiscount = Math.min(superCoins, productPrice);
    setDiscount(calculatedDiscount);

    // Update Super Coins balance
    setSuperCoins((prevCoins) => prevCoins - calculatedDiscount);

    // Display success message
    setMessage(
      `You have successfully used ${calculatedDiscount} Super Coins to get a discount of ₹${calculatedDiscount}
        And the code will be sent to your Gmail, redeem the code in your product. `
    );
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <a href="./">
                  <img src={require('../images/logo.png')} alt="Logo" />
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
                    <li>
                      <a href="./blog">Our Blog</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                    <li className="active">
                      <a href="./MarketStrategyPage">super coin</a>
                    </li>
                    <li>
                      <a href="./ProfilePage">ProfilePage</a>
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

      {/* Market Strategy Content */}
      <div className="market-strategy-page">
        <h1>Market Strategy: Super Coins</h1>

        <div className="strategy-section">
          <h2>How to Gain Super Coins</h2>
          <ul>
            <li>Complete daily check-ins to earn 10 Super Coins.</li>
            <li>Refer friends to earn 50 Super Coins per referral.</li>
            <li>Participate in promotions and events to earn bonus Super Coins.</li>
            <li>Make purchases on the platform to earn Super Coins as cashback.</li>
          </ul>
        </div>

        <div className="strategy-section">
          <h2>How to Invest Super Coins</h2>
          <p>
            You can use your Super Coins to get discounts on products. For every Super Coin you
            invest, you get a discount of ₹1. For example, if you have 150 Super Coins, you can get
            a discount of ₹150 on a product.
          </p>
        </div>

        <div className="interactive-section">
          <h2>Try It Out</h2>
          <div className="super-coins-balance">
            <p>
              <strong>Your Super Coins Balance:</strong> {superCoins}
            </p>
          </div>
          <div className="product-input">
            <label htmlFor="productPrice">Enter Product Price (₹):</label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(parseInt(e.target.value, 10))}
              min="0"
            />
          </div>
          <button onClick={investSuperCoins} className="invest-button">
            Invest Super Coins
          </button>
          {discount > 0 && (
            <div className="discount-result">
              <p>
                <strong>Discount Applied:</strong> ₹{discount}
              </p>
              <p>
                <strong>Final Price:</strong> ₹{productPrice - discount}
              </p>
            </div>
          )}
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default MarketStrategyPage;
