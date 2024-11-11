import { DomNode, el } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import {
  WalletConnectionManager,
  WalletConnectionPopup,
} from "@common-module/wallet";

export default class WalletSection extends DomNode {
  constructor() {
    super("section.wallet");
    this.render();
    WalletConnectionManager.on("connectionChanged", () => this.render());
  }

  private render() {
    this.clear().append(
      ...(WalletConnectionManager.isConnected
        ? [
          el(
            "p",
            "Your wallet address is ",
            el("a", WalletConnectionManager.connectedAddress, {
              href:
                `https://sepolia.basescan.org/address/${WalletConnectionManager.connectedAddress}`,
              target: "_blank",
            }),
          ),
          new Button({
            type: ButtonType.Contained,
            title: "Disconnect Wallet",
            onClick: () => WalletConnectionManager.disconnect(),
          }),
        ]
        : [
          el("p", "You haven't connected a wallet."),
          new Button({
            type: ButtonType.Contained,
            title: "Connect Wallet",
            onClick: () => new WalletConnectionPopup(),
          }),
        ]),
    );
  }
}
