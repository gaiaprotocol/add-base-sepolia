import { BodyNode, el, View } from "@common-module/app";
import { Button } from "@common-module/app-components";
import { WalletConnectionManager } from "@common-module/wallet";

export default class Home extends View {
  constructor() {
    super();
    this.container = el(
      ".home-view",
      new Button({
        title: "Add Base Sepolia Testnet to Wallet",
        onClick: async () =>
          await WalletConnectionManager.addChain("base-sepolia"),
      }),
      new Button({
        title: "Disconnect",
        onClick: async () => await WalletConnectionManager.disconnect(),
      }),
    ).appendTo(BodyNode);
  }
}
