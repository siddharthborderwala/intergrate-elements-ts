"use client";

import React, { useMemo } from "react";
import { ElementsProvider, Swaps, WalletType } from "@leapwallet/elements";
import { useChain } from "@cosmos-kit/react-lite";

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

const SwapsComponent = () => {
  const { isWalletConnected, openView, wallet } = useChain("cosmoshub");

  const connectedWalletType = useConnectedWalletType(
    wallet?.name,
    isWalletConnected
  );

  return (
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
  );
};

export default SwapsComponent;
