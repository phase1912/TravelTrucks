export function formatPrice(n: number): string {
    const fixed = (n ?? 0).toFixed(2);
    return fixed.replace(',', '.');
}

export function joinTruthy(parts: Array<string | undefined>): string {
    return parts.filter(Boolean).join(' · ');
}

export function formatValueWithSpace(value: string): string {
    return value
        .replace(/(\d)(m)\b/gi, '$1 $2')   // 5m -> 5 m
        .replace(/(\d)(l)\b/gi, '$1 $2');  // 132l -> 132 l
}

