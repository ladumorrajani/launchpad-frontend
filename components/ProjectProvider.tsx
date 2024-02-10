"use client"

import { createContext } from "react"

type ProjectState = {
    chainId: number
    address: `0x${string}`
}

export const ProjectContext = createContext<ProjectState>({
    chainId: 0,
    address: "0x",
})

export function ProjectProvider({ chainId, address, children }: { chainId: number, address: `0x${string}`, children: React.ReactNode }) {
    return (
        <ProjectContext.Provider value={{ chainId, address }}>
            {children}
        </ProjectContext.Provider>
    )
}
