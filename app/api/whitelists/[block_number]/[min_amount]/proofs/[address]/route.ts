import prisma from "@/db"
import { isAddress } from "viem"

type Params = {
    block_number: string
    min_amount: string
    address: string
}

export const dynamic = "force-dynamic"

export async function GET(request: Request, { params: { block_number, min_amount, address } }: { params: Params }) {
    const blockNumber = BigInt(block_number)
    const minAmount = BigInt(min_amount)

    if (!isAddress(address)) {
        return Response.error()
    }

    const result = await prisma.whitelists_proofs.findFirst({
        select: {
            proof: true,
        },
        where: {
            block_number: { equals: blockNumber },
            min_amount: { equals: minAmount.toString() },
            address: { equals: address },
        },
    })

    return Response.json({
        proof: (result?.proof ?? []) as `0x${string}`[],
    })
}
