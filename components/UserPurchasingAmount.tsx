"use client"

import { formatUnits } from "viem"
import { TokenSymbol } from "@/components/TokenSymbol"
import { useUserProof } from "@/hooks/useUserProof"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useWatchBalance } from "@/hooks/useWatchBalance"
import { useUserWatchData } from "@/hooks/useUserWatchData"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { computeTokenAmount } from "@/lib/utils"

export function UserPurchasingAmount({ amount }: { amount: bigint }) {
    const user = useUserWatchData()
    const token = useTokenStaticData()
    const proofWatch = useUserProof()
    const balanceWatch = useWatchBalance()
    const projectWatch = useProjectWatchData()
    const projectStatic = useProjectStaticData()
    const hasMounted = useHasMounted()

    const proof = proofWatch.data?.proof ?? []
    const balance = balanceWatch.data?.value ?? 0n
    const minTokenBuy = projectStatic.data?.minTokenBuy.result ?? 0n
    const maxTokenBuy = projectStatic.data?.maxTokenBuy.result ?? 0n
    const hardcap = projectWatch.data?.hardcap.result ?? 0n
    const totalPurchased = projectWatch.data?.purchased.result ?? 0n
    const wlBlockNumber = projectWatch.data?.wlBlockNumber.result ?? 0n
    const isStarted = projectWatch.data?.isStarted.result ?? false
    const isEnded = projectWatch.data?.isEnded.result ?? true
    const userPurchased = user.data?.purchased.result ?? 0n
    const ethPrice = projectWatch.data?.ethPrice.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0
    const tokenAmount = computeTokenAmount(amount, ethPrice, decimals)

    const loaded = user.isSuccess
        && token.isSuccess
        && projectWatch.isSuccess
        && projectStatic.isSuccess
        && (wlBlockNumber === 0n || proofWatch.isSuccess)

    if (!hasMounted || !loaded) {
        return <span>-</span>
    }

    if (wlBlockNumber > 0 && proof.length === 0) {
        return (
            <span className="text-red-900">
                Not whitelisted
            </span>
        )
    }

    if (!isStarted) {
        return (
            <span className="text-red-900">
                Sale not started
            </span>
        )
    }

    if (isEnded) {
        return (
            <span className="text-red-900">
                Sale ended
            </span>
        )
    }

    if (tokenAmount === 0n) {
        return (
            <span>
                Purchasing 0 <TokenSymbol />
            </span>
        )
    }

    if (balance < amount) {
        return (
            <span className="text-red-900">
                Insufficient $ETH balance
            </span>
        )
    }

    if (minTokenBuy > tokenAmount) {
        return (
            <span className="text-red-900">
                Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol /> (min: {formatUnits(minTokenBuy, decimals)})
            </span>
        )
    }

    if (maxTokenBuy < tokenAmount + userPurchased) {
        return (
            <span className="text-red-900">
                Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol /> (above max purchase: {formatUnits(maxTokenBuy, decimals)})
            </span>
        )
    }

    if (hardcap < tokenAmount + totalPurchased) {
        return (
            <span className="text-red-900">
                Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol /> (above hardcap)
            </span>
        )
    }

    return (
        <span>
            Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol />
        </span>
    )
}
