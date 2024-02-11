"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { formatTimestamp } from "@/lib/utils"

export function ProjectDateEnd() {
    const project = useProjectStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const timestamp = project.data?.endDate.result ?? 0n

    return <span>{formatTimestamp(timestamp)}</span>
}
