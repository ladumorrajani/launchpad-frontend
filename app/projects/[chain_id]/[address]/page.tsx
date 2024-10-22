import { notFound } from "next/navigation"

import { Navbar } from "@/components/Navbar"
import { BuyCard } from "@/components/BuyCard"
import { ClaimCard } from "@/components/ClaimCard"
import { ProjectName } from "@/components/ProjectName"
import { TokenSymbol } from "@/components/TokenSymbol"
import { WalletProvider } from "@/components/WalletProvider"
import { ProjectProvider } from "@/components/ProjectProvider"
import { ProjectCoverImage } from "@/components/ProjectCoverImage"
import { ReactQueryProvider } from "@/components/ReactQueryProvider"
import { ProjectDescription } from "@/components/ProjectDescription"
import { ProjectTokenAddress } from "@/components/ProjectTokenAddress"
import { ProjectWhitelistAlert } from "@/components/ProjectWhitelistAlert"

export default function Launchpad({ params: { chain_id, address } }: { params: { chain_id: string, address: `0x${string}` } }) {
    const chainId = parseInt(chain_id)

    if (isNaN(chainId)) {
        return notFound()
    }

    return (
        <ReactQueryProvider>
            <WalletProvider chainId={chainId}>
                <ProjectProvider chainId={chainId} address={address}>
                    <div className="flex flex-col gap-8">
                        <Navbar />
                        <div className="flex flex-col gap-8 px-8 max-w-[1024px] w-full mx-auto">
                            <ProjectCoverImage />
                            <h1><ProjectName /></h1>
                            <ProjectDescription />
                            <p className="flex gap-2">
                                <span><TokenSymbol /> contract address:</span> <ProjectTokenAddress />
                            </p>
                            <ProjectWhitelistAlert />
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1">
                                    <BuyCard />
                                </div>
                                <div className="flex-1">
                                    <ClaimCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </ProjectProvider>
            </WalletProvider>
        </ReactQueryProvider>
    )
}
