import { Navbar } from "@/components/Navbar";
import { WalletProvider } from "@/components/WalletProvider";
import Link from "next/link";

export default function Home() {
	return (
		<WalletProvider chainId={1}>
			<div className="flex flex-col gap-8">
				<Navbar />
				<div className="flex flex-col gap-8 px-8 max-w-[1024px] w-full mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="border p-7 bg-black shadow-lg rounded-lg">
							<h2 className="text-3xl text-white font-bold mb-3">
								TBANK Seed
							</h2>
							<p className="text-sm mb-4 border-b pb-4">
								TaoBank is a decentralized borrowing protocol
								that allows you to draw interest-free loans
								against $wTAO used as collateral. Loans are
								facilitated in $taoUSD (a low-volatility
								stablecoin soft-pegged to the US dollar) and
								need to maintain an overcollateralized ratio.
								TaoBank as a protocol is non-custodial,
								immutable, and governance-free.
							</p>
							<p className="text-base mb-4 border-b pb-4 ">
								Address:
								<span className="truncate block">
									0x95CcffaE3Eb8767D4a941Ec43280961dde89F4dE
								</span>
							</p>
							<Link
								href="/projects/1/0x116Bb71512f8E9f76Df2840C7CED2B5Ee06f9C85"
								target="_blank"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 no-underline w-full"
							>
								TBANK Seed round (1000+ TPAD)
							</Link>
						</div>
						<div className="border p-7 bg-black shadow-lg rounded-lg">
							<h2 className="text-3xl text-white font-bold mb-3">
								TPad Round
							</h2>
							<p className="text-sm mb-4 border-b pb-4">
								TaoBank is a decentralized borrowing protocol
								that allows you to draw interest-free loans
								against $wTAO used as collateral. Loans are
								facilitated in $taoUSD (a low-volatility
								stablecoin soft-pegged to the US dollar) and
								need to maintain an overcollateralized ratio.
								TaoBank as a protocol is non-custodial,
								immutable, and governance-free.
							</p>
							<p className="text-base mb-4 border-b pb-4">
								Address:
								<span className="truncate block">
									0x95CcffaE3Eb8767D4a941Ec43280961dde89F4dE
								</span>
							</p>
							<Link
								href="/projects/1/0x481dacbf63363d142d761C6DE51da05F10A2b70D"
								target="_blank"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 no-underline w-full"
							>
								TBANK Tpad round (50+ TPAD)
							</Link>
						</div>
					</div>
				</div>
			</div>
		</WalletProvider>
	);
}
