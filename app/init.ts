import { Router } from "@common-module/app";
import { UniversalWalletConnector } from "@common-module/wallet";
import Home from "./Home.js";

export default async function init() {
  UniversalWalletConnector.init({
    name: "Add Base Sepolia Testnet to Wallet",
    icon: "https://add-base-sepolia.gaia.cc/images/icon-192x192.png",
    description: "Add Base Sepolia Testnet to your wallet to test your app.",
    walletConnectProjectId: "7538ca3cec20504b06a3338d0e53b028",
    chains: {
      "base-sepolia": {
        id: 84532,
        name: "Base Sepolia Testnet",
        symbol: "ETH",
        rpc: "https://sepolia.base.org",
        explorerUrl: "https://sepolia.basescan.org",
      },
    },
  });

  Router.route("", Home);
}
