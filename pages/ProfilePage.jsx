import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Kunal Kumar',
    email: 'kunal.doe@example.com',
    superCoins: 150,
    orders: [
      { id: 1, date: '2023-10-01', total: 1200, status: 'Delivered' },
      { id: 2, date: '2023-09-25', total: 800, status: 'Cancelled' },
      { id: 3, date: '2023-09-20', total: 1500, status: 'Delivered' },
    ],
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [tempName, setTempName] = useState(user.name); // Temporary state for name during editing
  const [tempEmail, setTempEmail] = useState(user.email); // Temporary state for email during editing

  // Simulate fetching user data from an API
  useEffect(() => {
    setTimeout(() => {
      setUser((prevUser) => ({
        ...prevUser,
        superCoins: 150, // Update super coins after fetching
      }));
    }, 1000);
  }, []);

  // Function to add super coins
  const addSuperCoins = () => {
    setUser((prevUser) => ({
      ...prevUser,
      superCoins: prevUser.superCoins + 0,
    }));
  };

  // Function to handle profile update
  const handleProfileUpdate = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: tempName,
      email: tempEmail,
    }));
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div>
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
                      <a href="./ProfilePage">ProfilePage</a>
                    </li>
                    <li>
                      <a href="./MarketStrategyPage">super Coins</a>
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

      <div className="profile-page">
        <div className="user-info">
          <h1>Profile</h1>
          {isEditing ? (
            <div>
              <p>
                <strong>Name:</strong>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                />
              </p>
              <p>
                <strong>Email:</strong>
                <input
                  type="email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                />
              </p>
              <button onClick={handleProfileUpdate} className="save-btn">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Super Coins:</strong> {user.superCoins}
              </p>
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                Edit Profile
              </button>
            </div>
          )}
          <button onClick={addSuperCoins} className="add-coins-btn">
            Add 50 Super Coins
          </button>
        </div>

        <div className="order-history">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>₹{order.total}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
