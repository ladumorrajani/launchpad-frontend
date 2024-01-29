import "@rainbow-me/rainbowkit/styles.css"

import { configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { injectedWallet, trustWallet, rabbyWallet } from "@rainbow-me/rainbowkit/wallets"
import { mainnet } from "wagmi/chains"

// Taopad project id
const projectId = "031d4ad6ce63b830ab346fb92b96f328"

// chain list.
const supported = [mainnet]

// Supported chain id type.
type SupportedChainId = typeof supported[number]["id"]

// rpc for supported chains.
const rpcs: Record<SupportedChainId, string> = {
    1: "https://rpc.ankr.com/eth",
}

// testnet config
export const { chains, publicClient } = configureChains(supported, [
    jsonRpcProvider({
        rpc: (chain) => ({
            http: rpcs[chain.id as SupportedChainId],
        }),
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

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: () => [...connectors(), ...moreConnectors()],
    publicClient
})
