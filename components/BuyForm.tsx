"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TokenSymbol } from "@/components/TokenSymbol"

export function BuyForm() {
    return (
        <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <div className="flex gap-2">
                <Input type="number" placeholder="$ETH amount" />
                <Button type="submit" variant="secondary">Purchase</Button>
            </div>
            <p className="muted">
                Purchasing 0 <TokenSymbol />
            </p>
        </form>
    )
}
