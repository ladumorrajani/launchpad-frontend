import { useContractReads } from "wagmi"
import { useContract } from "./useContract"

export function useProjectStaticData() {
    const contract = useContract()

    return useContractReads({
        contracts: [
            {
                ...contract,
                functionName: "token"
            },
        ],
        select: (data) => ({
            token: data[0],
        })
    })
}
