import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ClaimForm } from "@/components/ClaimForm"
import { TokenSymbol } from "@/components/TokenSymbol"
import { UserProgressBar } from "@/components/UserProgressBar"
import { UserClaimedTokens } from "@/components/UserClaimedTokens"
import { ProjectReleaseDate } from "@/components/ProjectReleaseDate"
import { UserPurchasedTokens } from "@/components/UserPurchasedTokens"
import { ProjectVestingDuration } from "@/components/ProjectVestingDuration"

export function ClaimCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Claim tokens
                </CardTitle>
            </CardHeader>
            <CardContent>
                Unlock at <ProjectReleaseDate />
                <Separator className="my-4" />
                Vesting duration is <ProjectVestingDuration /> days
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <span className="muted">Claimed</span>
                        <span className="muted">Purchased</span>
                    </div>
                    <div className="flex justify-between">
                        <UserClaimedTokens />
                        <span><UserPurchasedTokens /> <TokenSymbol /></span>
                    </div>
                    <UserProgressBar />
                </div>
                <Separator className="my-4" />
                <ClaimForm />
            </CardContent>
        </Card>
    )
}
