import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PostFormModal from "./components/posts/PostFormModal";
import Posts from "./components/posts/Posts";
import AccountButton from "./components/AccountButton";

function App(props) {
  const [web3, setWeb3] = useState();
  const [alephAccount, setAlephAccount] = useState();
  const [walletAddress, setWalletAddress] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const connectWallet = async (e) => {
    const { alephAccount, web3 } = await props.connectWeb3(e);
    const accounts = await web3.eth.getAccounts();

    setWeb3(web3);
    setAlephAccount(alephAccount);
    setWalletAddress(accounts[0]);
  };

  //The UseEffect ensures that the account data stays saved even after refresh.
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

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + "y";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + "m";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + "m";
    }
    return Math.floor(seconds) + "s";
  }

  return (
    <div className="App">
      <div className="overlay"></div>
      <Navbar setModalOpen={setModalOpen} />
      <AccountButton
        connectWallet={connectWallet}
        walletAddress={walletAddress}
        truncateAddress={truncateAddress}
      />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Posts
              truncateAddress={truncateAddress}
              timeSince={timeSince}
              setModalOpen={setModalOpen}
              walletAddress={walletAddress}
            />
          </div>
        </div>
      </div>

      <br />
      <PostFormModal
        alephAccount={alephAccount}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default App;
