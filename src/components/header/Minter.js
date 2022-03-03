import { useState } from "react";
import {connectWallet} from "../../utils/interacts";
import { StoreWalletAddress } from "../../_actions";
import { useDispatch} from "react-redux";
import axios from "axios";
//const API_URL = "http://localhost:8080";
const API_URL = "https://hirecrypto.com";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  // const [status, setStatus] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState(""); 
  // const [url, setURL] = useState("");
 
  // useEffect(async () => { //TODO: implement
    
  // }, []);

  const dispatch = useDispatch();

  const connectWalletPressed = async () => { //TODO: implement
      const walletResponse = await connectWallet();
      //setStatus(walletResponse.status);
      setWallet(walletResponse.address);
      console.log("Minter-",walletResponse.address);

		  dispatch(StoreWalletAddress(walletResponse.address));
      axios.post(API_URL + "/api/walletaddress", {walletaddress: walletResponse.address} )
      .then(res => { 
        console.log(res.data);
      })
      .catch(err =>{ 
        console.log(err.response.data); 
      });
      
  };
  // const onMintPressed = async () => { //TODO: implement
    
  // };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed} className="flex shrink-0  h-9  px-4 py-1  font-semibold sm:border sm:border-transparent sm:hover:border-gray-200 text-white active:text-red-600 hover:text-green-600 bg-none sm:bg-[#385d94] hover:bg-transparent rounded-md">
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
{/* 
      <br></br>
      <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
      <p>
        Simply add your asset's link, name, and description, then press "Mint."
      </p>
      <form>
        <h2>🖼 Link to asset: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2>🤔 Name: </h2>
        <input
          type="text"
          placeholder="e.g. My first NFT!"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p> */}
    </div>
  );
};

export default Minter;