"use client"

import { formatAmount } from "@/lib/utils"

export function UserPurchasedTokens() {
    const decimals = 18
    const amount = 1542000000000000000000n

    return <span>{formatAmount(amount, decimals)}</span>
}
