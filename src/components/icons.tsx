export function Star({ filled = false, size = 16 }: { filled?: boolean, size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
            <path fill={filled ? '#f59e0b' : 'none'} stroke="#f59e0b"
                  d="M12 3l3.09 6.26L22 10.27l-5 4.85L18.18 22 12 18.77 5.82 22 7 15.12l-5-4.85 6.91-1.01z"/>
        </svg>
    );
}

export function Heart({ filled = false, size = 16 }: { filled?: boolean, size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
            <path
                d="M12 21s-7-4.35-9.33-8.22C1.12 10.2 2.88 7 6.13 7c1.59 0 3.04.93 3.87 2.33C10.83 7.93 12.28 7 13.87 7c3.25 0 5.01 3.2 3.46 5.78C19 16.65 12 21 12 21z"
                fill={filled ? '#ef4444' : 'none'} stroke="#ef4444" strokeWidth="1.5"/>
        </svg>
    );
}

export function MapPin({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
            <path fill="none" stroke="#111" d="M12 22s7-6.16 7-12a7 7 0 10-14 0c0 5.84 7 12 7 12z"/>
            <circle cx="12" cy="10" r="3" fill="#111"/>
        </svg>
    );
}
