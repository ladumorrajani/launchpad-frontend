"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useContract } from "@/hooks/useContract"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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
        <AspectRatio ratio={16 / 4}>
            <Image src={url} alt="project cover" fill priority={true} />
        </AspectRatio>
    )
}
