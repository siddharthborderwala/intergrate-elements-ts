"use client";

import React, { useMemo } from "react";
import { getDefaultModal } from "@leapwallet/connect-wallet-react";
import { chains, assets } from "chain-registry/mainnet";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { walletModalConfig, walletConnectOptions } from "@/config";

const allWallets = [...leapWallets, ...keplrWallets];

const WalletProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const walletModal = useMemo(
    () =>
      getDefaultModal({
        walletConfig: walletModalConfig,
      }),
    []
  );

  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={allWallets}
      walletModal={walletModal}
      walletConnectOptions={walletConnectOptions}
    >
      {children}
    </ChainProvider>
  );
};

export default WalletProvider;
