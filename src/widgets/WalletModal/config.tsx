import Metamask from "./icons/Metamask";
// import MathWallet from "./icons/MathWallet";
// import TokenPocket from "./icons/TokenPocket";
// import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
// import BinanceChain from "./icons/BinanceChain";
// import Coin98Wallet from "./icons/Coin98Wallet";
// import SafePalWallet from "./icons/SafePalWallet";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
