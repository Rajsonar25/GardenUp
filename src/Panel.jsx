import React from 'react';

const Panel = () => {
  return (
    <div className="panel2">
      <a className="panelelement" href="https://support.nurserylive.com/support/home" style={{ color: 'black' }}>
        <i className="fa-solid fa-user-group"></i> Help Center
      </a>

      <a className="panelelement" href="https://nurserylive.com/pages/order-tracking" style={{ color: 'black' }}>
        <i className="fa-solid fa-truck-fast"></i> Order Tracking
      </a>

      <a className="panelelement" href="/" style={{ color: 'black' }}>
        <i className="fa-solid fa-trophy"></i> Rewards
      </a>

      <a className="panelelement" href="https://nurserylive.com/pages/offers" style={{ color: 'black' }}>
        <i className="fa-solid fa-percent"></i> Offers
      </a>
    </div>
  );
};

export default Panel;
