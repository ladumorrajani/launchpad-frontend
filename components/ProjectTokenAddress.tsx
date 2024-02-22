"use client"

import { Address } from "@/components/Address"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"

export function ProjectTokenAddress() {
    const project = useProjectStaticData()

    const token = project.data?.token.result ?? ""

    return <Address>{token}</Address>
}
