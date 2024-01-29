import { BuyCard } from "@/components/BuyCard"
import { ClaimCard } from "@/components/ClaimCard"
import { ProjectName } from "@/components/ProjectName"
import { TokenSymbol } from "@/components/TokenSymbol"
import { ProjectDescription } from "@/components/ProjectDescription"
import { ProjectDataProvider } from "@/components/ProjectDataProvider"
import { TokenContractAddress } from "@/components/TokenContractAddress"

export default function Launchpad({ params: { address } }: { params: { address: `0x${string}` } }) {
    return (
        <ProjectDataProvider address={address}>
            <div className="flex flex-col gap-8">
                <h1><ProjectName /></h1>
                <p>
                    <ProjectDescription />
                </p>
                <p className="flex gap-2">
                    <span><TokenSymbol /> contract address:</span> <TokenContractAddress />
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
        </ProjectDataProvider>
    )
}
