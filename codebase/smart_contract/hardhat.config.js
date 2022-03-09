require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vD-ec9n03lUMfDAm6dlgLsnTZThJrMkX",
      accounts: [
        "c9b297e83c78ca7d942e7284a2ff0deda416c56cb585586f8441f9af56f12b91",
      ],
    },
  },
};
