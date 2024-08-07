import React from "react";
import '../assets/css/main.css';

const Account = ({ title, amount, description, showTransactionsButton = true, customClass, showProfileArrow = false }) => {
  return (
    <section className={`account ${customClass}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      {showTransactionsButton && (
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      )}
      {showProfileArrow && (
        <div className="arrow-button">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      )}
    </section>
  );
};

export default Account;