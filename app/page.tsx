"use client";

import dynamic from "next/dynamic";
import { WalletConnect } from "@leapwallet/connect-wallet-react";
import { Spinner } from "@phosphor-icons/react/Spinner";

const SwapsDynamic = dynamic(() => import("@/components/swaps"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-[34rem]">
      <Spinner
        weight="bold"
        className="h-5 w-5 text-muted-foreground animate-spin"
      />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <header className="max-w-4xl mx-auto flex items-center justify-between px-4 py-6">
        <h1>🐸 Leap + ⚛️ Cosmos = 🚀 WAGMI</h1>
        <div className="flex gap-4">
          <a
            href="https://https://docs.leapwallet.io/cosmos/elements/get-started-in-10-minutes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <WalletConnect />
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 flex justify-center">
        <SwapsDynamic />
      </main>
    </>
  );
}
