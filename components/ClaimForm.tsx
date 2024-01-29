"use client"

import { Button } from "@/components/ui/button"
import { TokenSymbol } from "@/components/TokenSymbol"
import { UserClaimableTokens } from "@/components/UserClaimableTokens"

export function ClaimForm() {
    return (
        <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <Button type="submit" variant="secondary" className="w-full">
                Claim
            </Button>
            <p className="muted">
                Claimable tokens: <UserClaimableTokens /> <TokenSymbol />
            </p>
        </form>
    )
}
