import Link from "next/link"

export function ProjectDescription() {
    return (
        <div>
            <span>TaoBank is a decentralized borrowing protocol that allows you to draw interest-free loans against $wTAO used as collateral. Loans are facilitated in $taoUSD (a low-volatility stablecoin soft-pegged to the US dollar) and need to maintain an overcollateralized ratio. TaoBank as a protocol is non-custodial, immutable, and governance-free. Learn more in our <Link href="https://docs.taobank.ai/" target="_blank">documentation</Link>.</span>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li><Link href="/projects/1/0x0" target="_blank">Seed round (1000+ TPAD)</Link></li>
                <li><Link href="/projects/1/0x0" target="_blank">TPAD round (50+ TPAD)</Link></li>
                <li><Link href="/projects/1/0x0" target="_blank">Open round</Link></li>
            </ul>
        </div>
    )
}
