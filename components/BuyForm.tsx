"use client"

import { formatUnits } from "viem"
import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { TokenSymbol } from "@/components/TokenSymbol"
import { useContract } from "@/hooks/useContract"
import { useBigintInput } from "@/hooks/useBigintInput"
import { useWatchBalance } from "@/hooks/useWatchBalance"
import { useUserWatchData } from "@/hooks/useUserWatchData"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"

const computeTokenAmount = (amount: bigint, ethPrice: bigint, decimals: number) => {
    const tokenUnit = 10n ** BigInt(decimals)

    if (ethPrice === 0n) return 0n

    return (amount * tokenUnit) / ethPrice
}

const useBuy = (amount: bigint) => {
    const contract = useContract()
    const { isConnected, address } = useAccount()

    const user = useUserWatchData()
    const token = useTokenStaticData()
    const balanceWatch = useWatchBalance()
    const projectWatch = useProjectWatchData()
    const projectStatic = useProjectStaticData()

    const balance = balanceWatch.data?.value ?? 0n
    const minTokenBuy = projectStatic.data?.minTokenBuy.result ?? 0n
    const maxTokenBuy = projectStatic.data?.maxTokenBuy.result ?? 0n
    const hardcap = projectWatch.data?.hardcap.result ?? 0n
    const totalPurchased = projectWatch.data?.purchased.result ?? 0n
    const userPurchased = user.data?.purchased.result ?? 0n
    const ethPrice = projectWatch.data?.ethPrice.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0
    const tokenAmount = computeTokenAmount(amount, ethPrice, decimals)

    const enabled = isConnected
        && user.isSuccess
        && token.isSuccess
        && projectWatch.isSuccess
        && projectStatic.isSuccess
        && balanceWatch.isSuccess
        && tokenAmount > 0
        && balance >= amount
        && minTokenBuy <= tokenAmount
        && maxTokenBuy >= tokenAmount + userPurchased
        && hardcap >= tokenAmount + totalPurchased

    const prepare = usePrepareContractWrite({
        enabled,
        scopeKey: address,
        ...contract,
        functionName: "buyTokens",
        args: [[]],
        value: amount,
    })

    const action = useContractWrite(prepare.config)

    const wait = useWaitForTransaction({ hash: action.data?.hash })

    return { prepare, action, wait }
}

export function BuyForm() {
    const amount = useBigintInput(0n)

    const { prepare, action, wait } = useBuy(amount.value)

    const loading = amount.value > 0 && (prepare.isLoading || action.isLoading || wait.isLoading)
    const disabled = amount.value === 0n || loading || !prepare.isSuccess || !action.write

    return (
        <form className="flex flex-col gap-4" onSubmit={e => {
            e.preventDefault()
            action.write?.()
        }}>
            <div className="flex gap-2">
                <Input
                    type="text"
                    placeholder="$ETH amount"
                    value={amount.valueStr}
                    onChange={e => amount.setValueStr(e.target.value.trim())}
                    min={0}
                />
                <SubmitButton loading={loading} disabled={disabled}>
                    Purchase
                </SubmitButton>
            </div>
            <p className="muted">
                <PurchasingAmount amount={amount.value} />
            </p>
        </form>
    )
}

function SubmitButton({ loading, disabled, children }: { loading: boolean, disabled: boolean, children: string }) {
    return (
        <Button type="submit" variant="secondary" disabled={disabled}>
            <Spinner loading={loading} /> {children}
        </Button>
    )
}

function PurchasingAmount({ amount }: { amount: bigint }) {
    const user = useUserWatchData()
    const token = useTokenStaticData()
    const balanceWatch = useWatchBalance()
    const projectWatch = useProjectWatchData()
    const projectStatic = useProjectStaticData()

    const balance = balanceWatch.data?.value ?? 0n
    const minTokenBuy = projectStatic.data?.minTokenBuy.result ?? 0n
    const maxTokenBuy = projectStatic.data?.maxTokenBuy.result ?? 0n
    const hardcap = projectWatch.data?.hardcap.result ?? 0n
    const totalPurchased = projectWatch.data?.purchased.result ?? 0n
    const userPurchased = user.data?.purchased.result ?? 0n
    const ethPrice = projectWatch.data?.ethPrice.result ?? 0n
    const decimals = token.data?.decimals.result ?? 0
    const tokenAmount = computeTokenAmount(amount, ethPrice, decimals)

    const loaded = user.isSuccess
        && token.isSuccess
        && projectWatch.isSuccess
        && projectStatic.isSuccess

    if (!loaded || tokenAmount === 0n) {
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
                Purchasing {formatUnits(tokenAmount, decimals)} <TokenSymbol /> (max: {formatUnits(maxTokenBuy, decimals)})
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
