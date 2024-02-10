import { useContractReads } from "wagmi"
import { useContract } from "./useContract"

export function useProjectWatchData() {
    const contract = useContract()

    return useContractReads({
        watch: true,
        contracts: [
            {
                ...contract,
                functionName: "tokenHardCap"
            },
            {
                ...contract,
                functionName: "totalPurchasedAmount"
            },
            {
                ...contract,
                functionName: "ethPricePerToken"
            },
            {
                ...contract,
                functionName: "vestingDuration"
            },
        ],
        select: (data) => ({
            hardcap: data[0],
            purchased: data[1],
            ethPrice: data[2],
            vestingDuration: data[3],
        })
    })
}
