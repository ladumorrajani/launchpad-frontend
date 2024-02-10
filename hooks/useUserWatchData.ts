import { useAccount, useContractReads } from "wagmi"
import { useContract } from "./useContract"

export function useUserWatchData() {
    const contract = useContract()
    const { isConnected, address } = useAccount()

    return useContractReads({
        enabled: isConnected,
        scopeKey: address,
        watch: true,
        contracts: [
            {
                ...contract,
                functionName: "claimedAmount",
                args: [address ?? "0x"],
            },
            {
                ...contract,
                functionName: "claimableAmount",
                args: [address ?? "0x"],
            },
            {
                ...contract,
                functionName: "purchasedAmount",
                args: [address ?? "0x"],
            },
        ],
        select: (data) => ({
            claimed: data[0],
            claimable: data[1],
            purchased: data[2],
        })
    })
}
