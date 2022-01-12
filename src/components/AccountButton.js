import React from "react";

function AccountButton(props) {
  return (
    <nav className="navbar fixed-bottom">
      <div className="container">
        <div className="col-2">
          {props.walletAddress ? (
            <div className="account-btn">
              {props.truncateAddress(props.walletAddress)}
            </div>
          ) : (
            <a
              id="submit-btn"
              className="btn btn-primary"
              aria-current="page"
              href="/"
              onClick={props.connectWallet}
            >
              Connect Wallet
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AccountButton;
