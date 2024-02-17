import Link from "next/link"

export function ProjectDescription() {
    return (
        <div>
            <p>
                TaoBank is a decentralized borrowing protocol that allows you to draw interest-free loans against $wTAO used as collateral. Loans are facilitated in $taoUSD (a low-volatility stablecoin soft-pegged to the US dollar) and need to maintain an overcollateralized ratio. TaoBank as a protocol is non-custodial, immutable, and governance-free. Learn more in our <Link href="https://docs.taobank.ai/" target="_blank">documentation</Link>.
            </p>
            <ul className="mt-4 ml-6 list-disc [&>li]:mt-2">
                <li>
                    <Link href="/projects/1/0x116Bb71512f8E9f76Df2840C7CED2B5Ee06f9C85" target="_blank">
                        TBANK Seed round (1000+ TPAD)
                    </Link>
                </li>
                <li>
                    <Link href="/projects/1/0x481dacbf63363d142d761C6DE51da05F10A2b70D" target="_blank">
                        TBANK Tpad round (50+ TPAD)
                    </Link>
                </li>
            </ul>
        </div>
    )
}
