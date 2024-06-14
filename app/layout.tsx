"use client";

import { useMemo } from "react";
import { Space_Grotesk } from "next/font/google";
import { getDefaultModal } from "@leapwallet/connect-wallet-react";
import { chains, assets } from "chain-registry/mainnet";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { walletModalConfig, walletConnectOptions } from "@/config";

import "./globals.css";
import "@leapwallet/react-ui/styles.css";
import "@leapwallet/connect-wallet-react/styles.css";
import "@leapwallet/elements/styles.css";

const font = Space_Grotesk({ subsets: ["latin"] });

const allWallets = [...leapWallets, ...keplrWallets];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const walletModal = useMemo(
    () =>
      getDefaultModal({
        walletConfig: walletModalConfig,
      }),
    []
  );

  return (
    <html lang="en">
      <body
        className={`leap-ui dark bg-background h-[100svh] ${font.className}`}
      >
        <div className="w-full bg-primary py-2">
          <div className="max-w-5xl mx-auto flex items-center justify-center">
            <a
              href="https://swapfast.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium outline-none"
            >
              Try Swapfast ⚡ the fastest way to swap tokens on Cosmos
            </a>
          </div>
        </div>
        <ChainProvider
          chains={chains}
          assetLists={assets}
          wallets={allWallets}
          walletModal={walletModal}
          walletConnectOptions={walletConnectOptions}
        >
          {children}
        </ChainProvider>
      </body>
    </html>
  );
}
