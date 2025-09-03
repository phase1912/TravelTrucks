export function formatPrice(n: number): string {
    // Ensure "8000,00" format (decimal comma, 2 digits)
    const fixed = (n ?? 0).toFixed(2);
    return fixed.replace('.', ',');
}

export function joinTruthy(parts: Array<string | undefined>): string {
    return parts.filter(Boolean).join(' · ');
}
