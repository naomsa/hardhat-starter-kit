import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-watcher";
import "hardhat-deploy";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  networks: {
    sepolia: {
      url: process.env.RPC_URL_SEPOLIA || "",
      accounts:
        process.env.PRIVATE_KEY_SEPOLIA !== undefined
          ? [process.env.PRIVATE_KEY_SEPOLIA]
          : [],
    },
    mainnet: {
      url: process.env.RPC_URL_MAINNET || "",
      accounts:
        process.env.PRIVATE_KEY_MAINNET !== undefined
          ? [process.env.PRIVATE_KEY_MAINNET]
          : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,

    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "typechain",
  },
  watcher: {
    ci: {
      tasks: [
        "clean",
        { command: "compile", params: { quiet: true } },
        {
          command: "test",
          params: { noCompile: true },
        },
      ],
      files: ["./contracts", "./test"],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
