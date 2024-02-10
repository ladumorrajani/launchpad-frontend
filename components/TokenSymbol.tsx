"use client"

import { useHasMounted } from "@/hooks/useHasMounted"
import { useTokenStaticData } from "@/hooks/useTokenStaticData"

export function TokenSymbol() {
    const token = useTokenStaticData()
    const hasMounted = useHasMounted()

    if (!hasMounted) return <span></span>

    const symbol = token.data?.symbol.result ?? ""

    return <span>${symbol}</span>
}
