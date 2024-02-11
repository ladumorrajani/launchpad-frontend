"use client"

import { ListBulletIcon } from "@radix-ui/react-icons"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ProjectWhitelistMinBalance } from "@/components/ProjectWhitelistMinBalance"
import { ProjectWhitelistBlockNumber } from "@/components/ProjectWhitelistBlockNumber"

export function ProjectWhitelistAlert() {
    const project = useProjectWatchData()
    const hasMounted = useHasMounted()

    const blockNumber = project.data?.wlBlockNumber.result ?? 0n

    if (hasMounted && blockNumber > 0) {
        return (
            <Alert className="bg-black">
                <ListBulletIcon className="h-4 w-4" />
                <AlertTitle>This sale has a whitelist</AlertTitle>
                <AlertDescription>
                    Only people holding &gt;<ProjectWhitelistMinBalance /> $TPAD tokens at block number <ProjectWhitelistBlockNumber /> can purchase tokens.
                </AlertDescription>
            </Alert>
        )
    }

    return null
}
