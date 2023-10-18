"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const inter = Inter({ subsets: ["latin"] });

const { chains, publicClient } = configureChains(
  [baseGoerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Metafuse Token Gate Example",
  projectId: "992ba7401ca2e5a28d14133ea026b30b", // https://github.com/WalletConnect/walletconnect-monorepo/issues/2883
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
