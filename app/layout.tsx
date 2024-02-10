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
                {children}
            </body>
        </html>
    )
}
