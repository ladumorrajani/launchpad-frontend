import { useContext } from "react"
import { ProjectContext } from "@/components/ProjectProvider"
import abi from "@/config/abi/LaunchpadAbi"

export function useContract() {
    const { chainId, address } = useContext(ProjectContext)

    return { chainId, address, abi }
}
