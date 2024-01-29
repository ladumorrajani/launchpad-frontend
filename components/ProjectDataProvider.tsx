"use client"

import { createContext } from "react"

type ProjectDataState = {
    address: `0x${string}` | undefined
}

export const ProjectDataContext = createContext<ProjectDataState>({
    address: undefined,
})

export function ProjectDataProvider({ address, children }: { address: `0x${string}`, children: React.ReactNode }) {
    return (
        <ProjectDataContext.Provider value={{ address }}>
            {children}
        </ProjectDataContext.Provider>
    )
}
