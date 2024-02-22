"use client"

import Markdown from "react-markdown"
import { useState, useEffect } from "react"
import { useContract } from "@/hooks/useContract"

export function ProjectDescription() {
    const { chainId, address } = useContract()

    const [markdown, setMarkdown] = useState<string>()

    const url = `https://raw.githubusercontent.com/taopad/launchpad-metadata/master/${chainId}/${address}/description.md`

    useEffect(() => {
        const fetchDescription = async () => {
            const response = await fetch(url)

            if (response.status === 200) {
                setMarkdown(await response.text())
            }
        }

        fetchDescription()
    }, [url])

    if (markdown === undefined) {
        return null
    }

    return <Markdown>{markdown}</Markdown>
}
