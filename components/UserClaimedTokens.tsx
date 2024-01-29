"use client"

import { formatAmount } from "@/lib/utils"

export function UserClaimedTokens() {
    const decimals = 18
    const amount = 754000000000000000000n

    return <span>{formatAmount(amount, decimals)}</span>
}
