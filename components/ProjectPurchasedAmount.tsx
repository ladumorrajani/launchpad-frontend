"use client"

import { formatAmount } from "@/lib/utils"

export function ProjectPurchasedAmount() {
    const decimals = 18
    const amount = 5000000000000000000000000n

    return <span>{formatAmount(amount, decimals)}</span>
}
