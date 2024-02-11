import { useAccount } from "wagmi"
import { useQuery } from "@tanstack/react-query"
import { useProjectWatchData } from "./useProjectWatchData"

type UserProof = {
    proof: `0x${string}`[]
}

export const useUserProof = () => {
    const { isConnected, address } = useAccount()

    const project = useProjectWatchData()

    const blockNumber = project.data?.wlBlockNumber.result ?? 0n
    const minBalance = project.data?.wlMinBalance.result ?? 0n

    const enabled = isConnected
        && address !== undefined
        && project.isSuccess
        && blockNumber > 0

    return useQuery({
        enabled,
        queryKey: ["user-proof", blockNumber.toString(), minBalance.toString(), address],
        queryFn: async (): Promise<UserProof> => {
            const url = `/api/whitelists/${blockNumber}/${minBalance}/proofs/${address}`

            const response = await fetch(url)

            return await response.json()
        },
    })
}
