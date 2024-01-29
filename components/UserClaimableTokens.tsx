"use client"

import { formatAmount } from "@/lib/utils"

export function UserClaimableTokens() {
    const decimals = 18
    const amount = 58000000000000000000n

    return <span>{formatAmount(amount, decimals)}</span>
}
