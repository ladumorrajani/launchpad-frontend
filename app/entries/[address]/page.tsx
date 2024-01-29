export default function Launchpad({ params }: { params: { address: `0x${string}` } }) {
    return (
        <div>{params.address}</div>
    )
}
