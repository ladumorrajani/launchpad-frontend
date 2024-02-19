import "@rainbow-me/rainbowkit/styles.css"

import { configureChains, createConfig } from "wagmi"
import { mainnet } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { injectedWallet, trustWallet, rabbyWallet } from "@rainbow-me/rainbowkit/wallets"
import { testnet } from "@/config/testnet"

// Taopad project id
const projectId = "031d4ad6ce63b830ab346fb92b96f328"

// chain list.
export const chains = [mainnet, testnet]

// rpc for supported chains.
const rpcs: Record<number, string> = {
    [mainnet.id]: "https://eth-mainnet.g.alchemy.com/v2/oW_Y3js1QPWpFXnCIQm-z56vysAdoppY",
    [testnet.id]: testnet.rpcUrls.public.http[0]
}

const selectChain = (chainId: number) => {
    return chains.filter(chain => chain.id === chainId).shift()
}

export const getWagmiConfig = (chainId: number) => {
    const chain = selectChain(chainId)

    if (chain === undefined) return undefined

    const { chains, publicClient } = configureChains([chain], [
        jsonRpcProvider({
            rpc: ({ id }) => ({ http: rpcs[id] })
        }),
        publicProvider(),
    ])

    const { connectors } = getDefaultWallets({
        appName: "TaoPad launchpad",
        projectId,
        chains,
    })

    const moreConnectors = connectorsForWallets([
        {
            groupName: 'More wallets',
            wallets: [
                injectedWallet({ chains }),
                rabbyWallet({ chains }),
                trustWallet({ projectId, chains }),
            ],
        },
    ])

    return createConfig({
        autoConnect: true,
        connectors: () => [...connectors(), ...moreConnectors()],
        publicClient
    })
}
