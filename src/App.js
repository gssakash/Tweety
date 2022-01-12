import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/posts/Posts";
import AccountButton from "./components/AccountButton";

function App(props) {
  const [web3, setWeb3] = useState();
  const [alephAccount, setAlephAccount] = useState();
  const [walletAddress, setWalletAddress] = useState();

  const connectWallet = async (e) => {
    const { alephAccount, web3 } = await props.connectWeb3(e);
    const accounts = await web3.eth.getAccounts();

    setWeb3(web3);
    setAlephAccount(alephAccount);
    setWalletAddress(accounts[0]);
  };

  //The account data stays saved even after refresh.
  useEffect(() => {
    if (window.ethereum.isConnected()) {
      connectWallet();
    }
  }, []);

  const truncateAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  };

  return (
    <div className="App">
      <div className="overlay"></div>
      <Navbar />
      <AccountButton
        connectWallet={connectWallet}
        walletAddress={walletAddress}
        truncateAddress={truncateAddress}
      />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Posts truncateAddress={truncateAddress} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
