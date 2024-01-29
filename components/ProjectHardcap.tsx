"use client"

import { formatAmount } from "@/lib/utils"

export function ProjectHardcap() {
    const decimals = 18
    const amount = 10000000000000000000000000n

    return <span>{formatAmount(amount, decimals)}</span>
}
