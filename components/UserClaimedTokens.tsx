"use client"

import { formatUnits } from "viem"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useUserWatchData } from "@/hooks/useUserWatchData"
import { formatAmount } from "@/lib/utils"

export function UserClaimedTokens() {
    const user = useUserWatchData()
    const token = useTokenStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const amount = user.data?.claimed.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0

    return (
        <span title={formatUnits(amount, decimals)}>
            {formatAmount(amount, decimals)}
        </span>
    )
}
