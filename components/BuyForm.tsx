"use client"

import { formatUnits } from "viem"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { TokenSymbol } from "@/components/TokenSymbol"
import { useBigintInput } from "@/hooks/useBigintInput"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { useUserWatchData } from "@/hooks/useUserWatchData"

const computeTokenAmount = (amount: bigint, ethPrice: bigint, decimals: number) => {
    const tokenUnit = 10n ** BigInt(decimals)

    if (ethPrice === 0n) return 0n

    return (amount * tokenUnit) / ethPrice
}

export function BuyForm() {
    const amount = useBigintInput(0n)

    return (
        <form className="flex flex-col gap-4" onSubmit={e => {
            e.preventDefault()
            alert("purchase")
        }}>
            <div className="flex gap-2">
                <Input
                    type="number"
                    placeholder="$ETH amount"
                    value={amount.valueStr}
                    onChange={e => amount.setValueStr(e.target.value.trim())}
                    min={0}
                />
                <SubmitButton>
                    Purchase
                </SubmitButton>
            </div>
            <p className="muted">
                <PurchasingAmount amount={amount.value} />
            </p>
        </form>
    )
}

function SubmitButton({ children }: { children: string }) {
    const loading = false
    const disabled = false

    return (
        <Button type="submit" variant="secondary" disabled={disabled}>
            <Spinner loading={loading} /> {children}
        </Button>
    )
}

function PurchasingAmount({ amount }: { amount: bigint }) {
    const user = useUserWatchData()
    const token = useTokenStaticData()
    const projectWatch = useProjectWatchData()
    const projectStatic = useProjectStaticData()

    const minTokenBuy = projectStatic.data?.minTokenBuy.result ?? 0n
    const maxTokenBuy = projectStatic.data?.maxTokenBuy.result ?? 0n
    const hardcap = projectWatch.data?.hardcap.result ?? 0n
    const totalPurchased = projectWatch.data?.purchased.result ?? 0n
    const userPurchased = user.data?.purchased.result ?? 0n
    const ethPrice = projectWatch.data?.ethPrice.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0
    const tokenAmount = computeTokenAmount(amount, ethPrice, decimals)

    const loaded = user.isSuccess &&
        token.isSuccess &&
        projectWatch.isSuccess &&
        projectStatic.isSuccess

    if (!loaded || tokenAmount === 0n) {
        return (
            <span>
                Purchasing 0 <TokenSymbol />
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

    if (maxTokenBuy < userPurchased + tokenAmount) {
        return (
            <span className="text-red-900">
                Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol /> (max: {formatUnits(maxTokenBuy, decimals)})
            </span>
        )
    }

    if (hardcap < totalPurchased + tokenAmount) {
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
