import { BodyNode, el, View } from "@common-module/app";
import { Alert, Button } from "@common-module/app-components";
import { WalletConnectionManager } from "@common-module/wallet";
import WalletSection from "./components/WalletSection.js";

export default class Home extends View {
  constructor() {
    super();
    this.container = el(
      ".home-view",
      new WalletSection(),
      new Button({
        title: "Add Base Sepolia Testnet to Wallet",
        onClick: async () => {
          await WalletConnectionManager.addChain("base-sepolia");
          new Alert({
            title: "Success",
            message: "Base Sepolia Testnet has been added to your wallet.",
          });
        },
      }),
    ).appendTo(BodyNode);
  }
}
