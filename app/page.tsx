import { Navbar } from "@/components/Navbar";
import { WalletProvider } from "@/components/WalletProvider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ProjectProvider } from "@/components/ProjectProvider";
import { ProjectName } from "@/components/ProjectName";
import { ProjectTokenAddress } from "@/components/ProjectTokenAddress";
import { ProjectCoverImage } from "@/components/ProjectCoverImage";

export default function Home() {
	return (
		<WalletProvider chainId={1}>
			<div className="flex flex-col gap-8">
				<Navbar />
				<div className="flex flex-col gap-8 px-8 max-w-[1024px] w-full mx-auto">
					<ProjectProvider
						chainId={1}
						address="0x481dacbf63363d142d761C6DE51da05F10A2b70D"
					>
						<ProjectCoverImage />
					</ProjectProvider>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<ProjectProvider
							chainId={1}
							address="0x481dacbf63363d142d761C6DE51da05F10A2b70D"
						>
							<Card className="border p-7 bg-black shadow-lg rounded-lg">
								<h2 className="text-3xl text-white font-bold mb-3">
									<ProjectName />
								</h2>

								<p className="text-base mb-4 border-b pb-4 ">
									Address:
									<ProjectTokenAddress />
								</p>
								<Button
									variant="secondary"
									className="w-full no-underline"
									asChild
								>
									<Link
										href="/projects/1/0x116Bb71512f8E9f76Df2840C7CED2B5Ee06f9C85"
										target="_blank"
									>
										TBANK Seed round (1000+ TPAD)
									</Link>
								</Button>
							</Card>
						</ProjectProvider>
						<ProjectProvider
							chainId={1}
							address="0x116Bb71512f8E9f76Df2840C7CED2B5Ee06f9C85"
						>
							<Card className="border p-7 bg-black shadow-lg rounded-lg">
								<h2 className="text-3xl text-white font-bold mb-3">
									<ProjectName />
								</h2>

								<p className="text-base mb-4 border-b pb-4">
									Address:
									<ProjectTokenAddress />
								</p>
								<Button
									variant="secondary"
									className="w-full no-underline"
									asChild
								>
									<Link
										href="/projects/1/0x481dacbf63363d142d761C6DE51da05F10A2b70D"
										target="_blank"
									>
										TBANK Tpad round (50+ TPAD)
									</Link>
								</Button>
							</Card>
						</ProjectProvider>
					</div>
				</div>
			</div>
		</WalletProvider>
	);
}
