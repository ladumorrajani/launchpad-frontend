"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useContract } from "@/hooks/useContract"

export function ProjectCoverImage() {
    const { chainId, address } = useContract()

    const [exists, setExists] = useState<boolean>(false)

    const url = `https://raw.githubusercontent.com/taopad/launchpad-metadata/master/${chainId}/${address}/cover.png`

    useEffect(() => {
        const fetchImageExists = async () => {
            const response = await fetch(url, { method: "HEAD" })

            if (response.status === 200) {
                setExists(true)
            }
        }

        fetchImageExists()
    }, [url])

    if (!exists) {
        return null
    }

    return (
        <Image src={url} alt="taobank cover" width="1962" height="482" style={{
            width: '100%',
            height: 'auto',
        }} />
    )
}
