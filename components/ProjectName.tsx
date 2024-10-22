"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"

export function ProjectName() {
    const project = useProjectStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const name = project.data?.name.result ?? ""

    return <span>{name}</span>
}
