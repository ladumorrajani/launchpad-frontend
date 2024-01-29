"use client"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/Spinner"
import { TokenSymbol } from "@/components/TokenSymbol"
import { UserClaimableTokens } from "@/components/UserClaimableTokens"

export function ClaimForm() {
    return (
        <form className="flex flex-col gap-4" onSubmit={e => {
            e.preventDefault()
            alert("claim")
        }}>
            <SubmitButton>
                Claim
            </SubmitButton>
            <p className="muted">
                Claimable tokens: <UserClaimableTokens /> <TokenSymbol />
            </p>
        </form>
    )
}

function SubmitButton({ children }: { children: string }) {
    const loading = false
    const disabled = false

    return (
        <Button type="submit" variant="secondary" className="w-full" disabled={disabled}>
            <Spinner loading={loading} /> {children}
        </Button>
    )
}
