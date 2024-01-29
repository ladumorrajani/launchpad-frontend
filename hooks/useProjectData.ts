import { useContext } from "react"
import { ProjectDataContext } from "@/components/ProjectDataProvider"

export function useProjectData() {
    return useContext(ProjectDataContext)
}
