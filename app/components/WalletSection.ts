import { DomNode, el } from "@common-module/app";
import { Button } from "@common-module/app-components";
import { WalletConnectionManager } from "@common-module/wallet";

export default class WalletSection extends DomNode {
  constructor() {
    super("section.wallet");
    this.render();
    WalletConnectionManager.on("connectionChanged", () => this.render());
  }

  private render() {
    this.empty().append(
      ...(WalletConnectionManager.connected
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
            title: "Disconnect Wallet",
            onClick: () => WalletConnectionManager.disconnect(),
          }),
        ]
        : [
          el("p", "You haven't connected a wallet."),
          new Button({
            title: "Connect Wallet",
            onClick: () => WalletConnectionManager.connect(),
          }),
        ]),
    );
  }
}
