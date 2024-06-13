import { appOrigin } from "@/constants";

export const walletConnectOptions = {
  signClient: {
    projectId: "169f9b9f95517ff0219954dd87aa8709",
    relayUrl: "wss://relay.walletconnect.org",
  },
  metadata: {
    name: "Create Elements App",
    description: "Fastest Swaps on the Interchain",
    url: appOrigin,
  },
};

export const walletModalConfig = {
  "leap-extension": {
    prettyName: "Leap",
    order: 0,
  },
  "keplr-extension": {
    prettyName: "Keplr",
    order: 1,
  },
  "leap-metamask-cosmos-snap": {
    prettyName: "MetaMask",
    order: 2,
  },
  "leap-cosmos-mobile": {
    prettyName: "Leap Mobile",
    order: 3,
  },
  "keplr-mobile": {
    prettyName: "Keplr Mobile",
    order: 4,
  },
};
