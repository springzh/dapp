// scripts/index.js

module.exports = async function main (callback) {
    // Set up a Truffle contract, representing our deployed Box instance
    const Box = artifacts.require('Box');
    const box = await Box.deployed();

    try {
      // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
  
        // Call the retrieve() function of the deployed Box contract
        const value = await box.retrieve();
        console.log('Box value is', value.toString());

        // Send a transaction to store() a new value in the Box
        await box.store(23);

        // Call the retrieve() function of the deployed Box contract
        const value2 = await box.retrieve();
        console.log('Box value is', value2.toString());

      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  };
