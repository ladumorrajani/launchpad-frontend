import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/Navbar"
import { WalletProvider } from "@/components/WalletProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Taopad launchpad",
    description: "Taopad launchpad",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark mb-32`}>
                <WalletProvider>
                    <div className="flex flex-col gap-8">
                        <Navbar />
                        <div className="px-8 max-w-[1024px] mx-auto">
                            {children}
                        </div>
                    </div>
                </WalletProvider>
            </body>
        </html>
    )
}
