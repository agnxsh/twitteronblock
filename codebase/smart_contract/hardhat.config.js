require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vD-ec9n03lUMfDAm6dlgLsnTZThJrMkX",
      accounts: process.env.METAMASK_PRIVATE_KEY,
    },
  },
};
