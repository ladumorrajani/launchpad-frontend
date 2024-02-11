"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { formatTimestamp } from "@/lib/utils"

export function ProjectReleaseDate() {
    const project = useProjectStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const end = project.data?.endDate.result ?? 0n
    const delay = project.data?.releaseDelay.result ?? 0n
    const total = end + delay

    return <span>{formatTimestamp(total)}</span>
}
