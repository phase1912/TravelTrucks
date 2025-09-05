import { Filters } from '@/models/filter';
import { CampersQuery } from '@/models/campersQuery';

export function toQuery(f: Filters): CampersQuery {
    const q: CampersQuery = {};
    if (f.location.trim()) q.location = f.location.trim();
    if (f.form) q.form = f.form;
    if (f.transmission) q.transmission = f.transmission;
    for (const [k, v] of Object.entries(f.features)) {
        if (v) (q as any)[k] = true;
    }
    return q;
}

export const makeQueryKey = (q?: CampersQuery) => {
    if (!q) return '';
    const { page, limit, ...rest } = q;
    const ordered = Object.keys(rest).sort()
        .reduce((acc, k) => {
            (acc as any)[k] = (rest as any)[k];
            return acc;
        }, {} as Record<string, unknown>);
    return JSON.stringify(ordered);
};

export function capitalizeFirstWord(text: string): string {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
}
