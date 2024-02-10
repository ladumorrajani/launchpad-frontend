"use client"

import { formatUnits } from "viem"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { formatAmount } from "@/lib/utils"

export function ProjectHardcap() {
    const token = useTokenStaticData()
    const project = useProjectWatchData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const amount = project.data?.hardcap.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0

    return (
        <span title={formatUnits(amount, decimals)}>
            {formatAmount(amount, decimals)}
        </span>
    )
}
