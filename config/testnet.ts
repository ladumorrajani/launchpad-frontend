import { Chain } from "viem";

export const testnet = {
    id: 14608,
    name: 'TaoPad testnet',
    network: 'mainnet fork',
    nativeCurrency: { name: 'BB ETH', symbol: 'BBETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ["https://rpc.buildbear.io/witty-juggernaut-41388255"],
        },
        public: {
            http: ["https://rpc.buildbear.io/witty-juggernaut-41388255"],
        },
    },
    blockExplorers: {
        etherscan: { name: 'Buildbear scan', url: "https://explorer.buildbear.io/witty-juggernaut-41388255" },
        default: { name: 'Buildbear scan', url: "https://explorer.buildbear.io/witty-juggernaut-41388255" },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
} as const satisfies Chain
