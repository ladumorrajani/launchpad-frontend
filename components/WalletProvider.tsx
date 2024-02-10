"use client"

import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chains, getWagmiConfig } from "@/config/wallet"
import { notFound } from "next/navigation"

export function WalletProvider({ chainId, children }: { chainId: number, children: React.ReactNode }) {
    const wagmiConfig = getWagmiConfig(chainId)

    if (wagmiConfig === undefined) {
        return notFound()
    }

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}
