"use client"

import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { useContract } from "@/hooks/useContract"
import { useUserProof } from "@/hooks/useUserProof"
import { useBigintInput } from "@/hooks/useBigintInput"
import { useWatchBalance } from "@/hooks/useWatchBalance"
import { useUserWatchData } from "@/hooks/useUserWatchData"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"
import { useProjectWatchData } from "@/hooks/useProjectWatchData"
import { useProjectStaticData } from "@/hooks/useProjectStaticData"
import { UserPurchasingAmount } from "@/components/UserPurchasingAmount"
import { computeTokenAmount } from "@/lib/utils"

const useBuy = (amount: bigint, reset: () => void) => {
    const contract = useContract()
    const { isConnected, address } = useAccount()

    const user = useUserWatchData()
    const token = useTokenStaticData()
    const proofWatch = useUserProof()
    const balanceWatch = useWatchBalance()
    const projectWatch = useProjectWatchData()
    const projectStatic = useProjectStaticData()

    const proof = proofWatch.data?.proof ?? []
    const balance = balanceWatch.data?.value ?? 0n
    const minTokenBuy = projectStatic.data?.minTokenBuy.result ?? 0n
    const maxTokenBuy = projectStatic.data?.maxTokenBuy.result ?? 0n
    const hardcap = projectWatch.data?.hardcap.result ?? 0n
    const totalPurchased = projectWatch.data?.purchased.result ?? 0n
    const wlBlockNumber = projectWatch.data?.wlBlockNumber.result ?? 0n
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
        && (wlBlockNumber === 0n || proofWatch.isSuccess)
        && amount > 0
        && tokenAmount > 0
        && balance >= amount
        && minTokenBuy <= tokenAmount
        && maxTokenBuy >= tokenAmount + userPurchased
        && hardcap >= tokenAmount + totalPurchased
        && (wlBlockNumber === 0n || proof.length > 0)

    const prepare = usePrepareContractWrite({
        enabled,
        ...contract,
        value: amount,
        account: address,
        functionName: "buyTokens",
        args: [proof],
    })

    const action = useContractWrite({ ...prepare.config, onSuccess: reset })

    const wait = useWaitForTransaction({ hash: action.data?.hash })

    return { prepare, action, wait }
}

export function BuyForm() {
    const amount = useBigintInput(0n)

    const { prepare, action, wait } = useBuy(amount.value, amount.reset)

    const loading = amount.value > 0 && (prepare.isLoading || action.isLoading || wait.isLoading)
    const disabled = amount.value === 0n || loading || !prepare.isSuccess

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
                <UserPurchasingAmount amount={amount.value} />
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
