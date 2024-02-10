export const formatTimestamp = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000)

    const usDate = date.toLocaleDateString("en-US")

    const utcTime = date.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour: '2-digit',
        minute: '2-digit',
    })

    return `${usDate} ${utcTime}`
}
