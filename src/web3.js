import Web3 from 'web3';

const { ethereum } = window;

let web3 = new Web3(ethereum);

console.log("IN WEB£");

window.addEventListener('load', async () => {
  console.log("IN LOAD!!!!");
  console.log(ethereum);
  console.log(web3);
  try {
    await ethereum.enable();
  } catch (error) {
    console.log("IN WEEOE");
    console.log(error);
  }
  const accounts = await web3.eth.getAccounts();
  console.log("accounts");
  console.log(accounts);
  web3.eth.defaultAccount = accounts[0];
});

export default web3;