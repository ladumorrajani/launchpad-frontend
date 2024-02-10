"use client"

import { useState, useEffect } from "react"

import { Progress } from "@/components/ui/progress"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"

export function ProjectProgressBar() {
    const project = useProjectWatchData()
    const [progress, setProgress] = useState(0)

    const hardcap = project.data?.hardcap.result ?? 0n
    const purchased = project.data?.purchased.result ?? 0n

    useEffect(() => {
        const percent = hardcap > 0 ? Number((purchased * 100n) / hardcap) : 0
        const timer = setTimeout(() => setProgress(percent), 500)
        return () => clearTimeout(timer)
    }, [hardcap, purchased])

    return <Progress value={progress} />
}
