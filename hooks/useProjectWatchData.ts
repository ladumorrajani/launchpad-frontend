import { useContractReads } from "wagmi"
import { useContract } from "./useContract"

export function useProjectWatchData() {
    const contract = useContract()

    return useContractReads({
        watch: true,
        contracts: [
            {
                ...contract,
                functionName: "tokenHardCap",
            },
            {
                ...contract,
                functionName: "totalPurchasedAmount",
            },
            {
                ...contract,
                functionName: "ethPricePerToken",
            },
            {
                ...contract,
                functionName: "vestingDuration",
            },
            {
                ...contract,
                functionName: "wlBlockNumber",
            },
            {
                ...contract,
                functionName: "wlMinBalance",
            },
        ],
        select: (data) => ({
            hardcap: data[0],
            purchased: data[1],
            ethPrice: data[2],
            vestingDuration: data[3],
            wlBlockNumber: data[4],
            wlMinBalance: data[5],
        })
    })
}
