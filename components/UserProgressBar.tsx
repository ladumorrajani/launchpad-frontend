"use client"

import { useState, useEffect } from "react"

import { Progress } from "@/components/ui/progress"

export function UserProgressBar() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(4), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} />
}
