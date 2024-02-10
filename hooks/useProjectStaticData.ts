import { useContractReads } from "wagmi"
import { useContract } from "./useContract"

export function useProjectStaticData() {
    const contract = useContract()

    return useContractReads({
        contracts: [
            {
                ...contract,
                functionName: "name"
            },
            {
                ...contract,
                functionName: "startDate"
            },
            {
                ...contract,
                functionName: "endDate"
            },
            {
                ...contract,
                functionName: "releaseDelay"
            },
            {
                ...contract,
                functionName: "token"
            },
        ],
        select: (data) => ({
            name: data[0],
            startDate: data[1],
            endDate: data[2],
            releaseDelay: data[3],
            token: data[4],
        })
    })
}
