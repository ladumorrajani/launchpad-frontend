"use client"

import { formatUnits } from "viem"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { TokenSymbol } from "@/components/TokenSymbol"
import { useBigintInput } from "@/hooks/useBigintInput"

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
                Purchasing <PurchasingAmount amount={amount.value} /> <TokenSymbol />
            </p>
        </form >
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
    const decimals = 18
    const pricePerToken = 1000000000000000n
    const tokenUnit = 10n ** BigInt(decimals)

    return formatUnits((amount * tokenUnit) / pricePerToken, decimals)
}
