import { useAccount, useBalance } from "wagmi"
import { useContract } from "./useContract"

export function useWatchBalance() {
    const { chainId } = useContract()
    const { address } = useAccount()

    return useBalance({ chainId, address, watch: true })
}
