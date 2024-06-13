"use client";

import { useChain } from "@cosmos-kit/react-lite";
import { WalletConnect } from "@leapwallet/connect-wallet-react";
import { ElementsProvider, Swaps } from "@leapwallet/elements";

import { WalletType } from "@leapwallet/elements";
import { useMemo } from "react";

const useConnectedWalletType = (
  walletName: string | undefined,
  isWalletConnected: boolean
) => {
  const connectedWallet: WalletType | undefined = useMemo(() => {
    if (!isWalletConnected) {
      return undefined;
    }
    switch (walletName) {
      case "leap-extension":
        return WalletType.LEAP;
      case "keplr-extension":
        return WalletType.KEPLR;
      case "leap-cosmos-mobile":
        return WalletType.WC_LEAP_MOBILE;
      case "keplr-cosmos-mobile":
        return WalletType.WC_KEPLR_MOBILE;
      case "leap-metamask-cosmos-snap":
        return WalletType.METAMASK_SNAP_LEAP;
      default:
        return undefined;
    }
  }, [isWalletConnected, walletName]);

  return connectedWallet;
};

export default function Home() {
  const { isWalletConnected, openView, wallet } = useChain("cosmoshub");

  const connectedWalletType = useConnectedWalletType(
    wallet?.name,
    isWalletConnected
  );

  return (
    <>
      <header className="max-w-4xl mx-auto flex items-center justify-between px-4 py-6">
        <h1>🐸 Leap + ⚛️ Cosmos = 🚀 WAGMI</h1>
        <WalletConnect />
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 flex justify-center">
        <ElementsProvider
          primaryChainId="cosmoshub-4"
          connectWallet={openView}
          connectedWalletType={connectedWalletType}
        >
          <Swaps
            className="border rounded-3xl"
            allowedSourceChains={{
              chainTypes: ["evm"],
            }}
          />
        </ElementsProvider>
      </main>
    </>
  );
}
