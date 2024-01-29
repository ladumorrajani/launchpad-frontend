import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BuyForm } from "@/components/BuyForm"
import { ProjectEnd } from "@/components/ProjectEnd"
import { TokenSymbol } from "@/components/TokenSymbol"
import { ProjectStart } from "@/components/ProjectStart"
import { TokenEthPrice } from "@/components/TokenEthPrice"
import { ProjectHardcap } from "@/components/ProjectHardcap"
import { ProjectProgressBar } from "@/components/ProjectProgressBar"
import { ProjectPurchasedAmount } from "@/components/ProjectPurchasedAmount"

export function BuyCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Buy tokens
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <span>From <ProjectStart /></span>
                    <span>To <ProjectEnd /></span>
                </div>
                <Separator className="my-4" />
                <div>
                    1 <TokenSymbol /> = <TokenEthPrice /> $ETH
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <span className="muted">Total purchased</span>
                        <span className="muted">Hardcap</span>
                    </div>
                    <div className="flex justify-between">
                        <ProjectPurchasedAmount />
                        <span><ProjectHardcap /> <TokenSymbol /></span>
                    </div>
                    <ProjectProgressBar />
                </div>
                <Separator className="my-4" />
                <BuyForm />
            </CardContent>
        </Card>
    )
}
