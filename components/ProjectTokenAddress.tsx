"use client"

import { useProjectStaticData } from "@/hooks/useProjectStaticData"

export function ProjectTokenAddress() {
    const project = useProjectStaticData()

    const token = project.data?.token.result ?? ""

    return (
        <input
            type="text"
            className="bg-transparent text-white w-full border-0 flex-1 focus:outline-none focus:ring-0"
            value={token}
            readOnly
        />
    )
}
