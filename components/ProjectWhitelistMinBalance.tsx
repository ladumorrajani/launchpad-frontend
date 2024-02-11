"use client"

import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { formatAmount } from "@/lib/utils"

export function ProjectWhitelistMinBalance() {
    const project = useProjectWatchData()

    const minBalance = project.data?.wlMinBalance.result ?? 0n

    return <span>{formatAmount(minBalance, 18)}</span>
}
