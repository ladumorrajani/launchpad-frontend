export function Address({ children }: { children: string }) {
    return (
        <input
            type="text"
            className="bg-transparent text-white w-full border-0 flex-1 focus:outline-none focus:ring-0"
            value={children}
            readOnly
        />
    )
}
