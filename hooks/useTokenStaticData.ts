import { useContractReads } from "wagmi"
import { useContract } from "./useContract"
import { useProjectStaticData } from "./useProjectStaticData"

const abi = [
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
] as const

export function useTokenStaticData() {
    const { chainId } = useContract()
    const project = useProjectStaticData()

    const token = project.data?.token.result ?? "0x"

    const contract = { chainId, abi, address: token }

    return useContractReads({
        enabled: token !== "0x",
        contracts: [
            {
                ...contract,
                functionName: "symbol",
            },
            {
                ...contract,
                functionName: "decimals",
            },
        ],
        select: (data) => ({
            symbol: data[0],
            decimals: data[1],
        })
    })
}
