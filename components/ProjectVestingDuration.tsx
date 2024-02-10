"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"

export function ProjectVestingDuration() {
    const project = useProjectStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const seconds = Number(project.data?.vestingDuration.result ?? 0n)
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24

    return <span>{days}</span>
}
