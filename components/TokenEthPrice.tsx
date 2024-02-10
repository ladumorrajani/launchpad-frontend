"use client"

import { formatEther } from "viem"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"

export function TokenEthPrice() {
    const hasMounted = useHasMounted()
    const project = useProjectWatchData()

    if (!hasMounted) return <span></span>

    const price = project.data?.ethPrice.result ?? 0n

    return formatEther(price)
}
