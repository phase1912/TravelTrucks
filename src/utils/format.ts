export function formatPrice(n: number): string {
    const fixed = (n ?? 0).toFixed(2);
    return fixed.replace(',', '.');
}

export function joinTruthy(parts: Array<string | undefined>): string {
    return parts.filter(Boolean).join(' · ');
}
