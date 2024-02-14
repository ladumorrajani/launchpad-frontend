"use client"

import Link from "next/link"

export function ProjectDescription() {
    return (
        <span>TaoBank is a decentralized borrowing protocol that allows you to draw interest-free loans against $wTAO used as collateral. Loans are facilitated in $taoUSD (a low-volatility stablecoin soft-pegged to the US dollar) and need to maintain an overcollateralized ratio. TaoBank as a protocol is non-custodial, immutable, and governance-free. Learn more in our <Link href="https://docs.taobank.ai/" target="_blank">documentation</Link>.</span>
    )
}
