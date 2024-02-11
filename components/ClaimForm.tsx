"use client"

import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { TokenSymbol } from "@/components/TokenSymbol"
import { UserClaimableTokens } from "@/components/UserClaimableTokens"
import { useContract } from "@/hooks/useContract"
import { useUserWatchData } from "@/hooks/useUserWatchData"

function useClaim() {
    const contract = useContract()
    const { isConnected, address } = useAccount()

    const user = useUserWatchData()

    const claimable = user.data?.claimable.result ?? 0n

    const enabled = isConnected
        && user.isSuccess
        && claimable > 0

    const prepare = usePrepareContractWrite({
        enabled,
        scopeKey: address,
        ...contract,
        functionName: "claimTokens",
    })

    const action = useContractWrite(prepare.config)

    const wait = useWaitForTransaction({ hash: action.data?.hash })

    return { prepare, action, wait }
}

export function ClaimForm() {
    const { prepare, action, wait } = useClaim()

    const loading = prepare.isLoading || action.isLoading || wait.isLoading
    const disabled = loading || !prepare.isSuccess || !action.write

    return (
        <form className="flex flex-col gap-4" onSubmit={e => {
            e.preventDefault()
            alert("claim")
        }}>
            <SubmitButton loading={loading} disabled={disabled}>
                Claim
            </SubmitButton>
            <p className="muted">
                Claimable tokens: <UserClaimableTokens /> <TokenSymbol />
            </p>
        </form>
    )
}

function SubmitButton({ loading, disabled, children }: { loading: boolean, disabled: boolean, children: string }) {
    return (
        <Button type="submit" variant="secondary" className="w-full" disabled={disabled}>
            <Spinner loading={loading} /> {children}
        </Button>
    )
}
