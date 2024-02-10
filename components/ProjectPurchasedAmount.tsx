"use client"

import { formatUnits } from "viem"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { formatAmount } from "@/lib/utils"

export function ProjectPurchasedAmount() {
    const token = useTokenStaticData()
    const project = useProjectWatchData()
    const hasMounted = useHasMounted()

    const amount = project.data?.purchased.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0

    if (!hasMounted) return <span></span>
    if (decimals === 0) return <span></span>

    return (
        <span title={formatUnits(amount, decimals)}>
            {formatAmount(amount, decimals)}
        </span>
    )
}
