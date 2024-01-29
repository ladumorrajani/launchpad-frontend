"use client"

import { useAccount, useNetwork } from "wagmi"
import { useAccountModal, useChainModal, useConnectModal } from "@rainbow-me/rainbowkit"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useHasMounted } from "@/hooks/useHasMounted"

export function WalletButton() {
    const { chain } = useNetwork()
    const { isConnected, address } = useAccount()
    const { openChainModal } = useChainModal()
    const { openConnectModal } = useConnectModal()
    const { openAccountModal } = useAccountModal()
    const hasMounted = useHasMounted()

    if (!hasMounted) return (
        <Button className="w-48" disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Connect wallet
        </Button>
    )

    if (!isConnected) return (
        <Button className="w-48" onClick={openConnectModal}>
            Connect wallet
        </Button>
    )

    if (chain?.unsupported) return (
        <Button className="w-48" variant="destructive" onClick={openChainModal}>
            Wrong chain
        </Button>
    )

    return (
        <Button className="w-48" onClick={openAccountModal}>
            {formatAddress(address)}
        </Button>
    )
}

function formatAddress(address: `0x${string}` | undefined) {
    return address ? `${address.substring(0, 4)}...${address.substring(address.length - 4)}` : ""
}
