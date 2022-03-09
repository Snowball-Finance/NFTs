require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      accounts: [{ privateKey: process.env.PRIVATE_KEY, balance: "100000000000000000000000" }],
      chainId: 43114,
      forking: {
        // url: "https://node.snowapi.net/ext/bc/C/rpc",
        url: "https://api.avax.network/ext/bc/C/rpc"
      },
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      chainId: 43114,
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    },
    AVALANCHE: {
      chainId: 43114,
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    // Your API key for Snowtrace
    apiKey: process.env.SNOWTRACE_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 120000
  },
  paths: { 
    sources: "./contracts", 
    cache: "./cache", 
    artifacts:"./artifacts"
  }
};