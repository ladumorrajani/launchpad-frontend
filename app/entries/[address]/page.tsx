import { BuyCard } from "@/components/BuyCard"
import { ClaimCard } from "@/components/ClaimCard"
import { ProjectName } from "@/components/ProjectName"
import { ProjectDescription } from "@/components/ProjectDescription"

export default function Launchpad({ params }: { params: { address: `0x${string}` } }) {
    return (
        <div className="flex flex-col gap-8">
            <h1><ProjectName /></h1>
            <p>
                <ProjectDescription />
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <BuyCard />
                </div>
                <div className="flex-1">
                    <ClaimCard />
                </div>
            </div>
        </div>
    )
}
