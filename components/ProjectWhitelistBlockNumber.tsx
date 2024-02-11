"use client"

import Link from "next/link"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"

export function ProjectWhitelistBlockNumber() {
    const project = useProjectWatchData()

    const blockNumber = project.data?.wlBlockNumber.result ?? 0n

    return (
        <Link href={`https://etherscan.io/block/${blockNumber.toString()}`} target="_blank">
            {blockNumber.toString()}
        </Link>
    )
}
