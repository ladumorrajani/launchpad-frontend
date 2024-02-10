"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { formatTimestamp } from "@/utils/formatTimestamp"

export function ProjectDateStart() {
    const project = useProjectStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const timestamp = project.data?.startDate.result ?? 0n

    return <span>{formatTimestamp(timestamp)}</span>
}
