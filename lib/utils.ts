import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { formatUnits } from "viem"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatAmount(amount: bigint, decimals: number) {
    return parseFloat(formatUnits(amount, decimals)).toLocaleString()
}
