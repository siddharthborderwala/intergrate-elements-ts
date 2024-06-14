import { Space_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";
import "@leapwallet/react-ui/styles.css";
import "@leapwallet/connect-wallet-react/styles.css";
import "@leapwallet/elements/styles.css";

const font = Space_Grotesk({ subsets: ["latin"] });

const WalletProviderDynamic = dynamic(
  () => import("@/components/wallet-provider"),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <WalletProviderDynamic>{children}</WalletProviderDynamic>
      </body>
    </html>
  );
}
