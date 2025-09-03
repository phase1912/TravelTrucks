import { Star } from './icons';

export default function RatingStars({ value = 0, size = 16 }: { value?: number, size?: number }) {
    const full = Math.round(value ?? 0);
    return (
        <div className="row" aria-label={`rating ${value} of 5`}>
            {[1, 2, 3, 4, 5].map(i => <Star key={i} filled={i <= full} size={size}/>)}
        </div>
    );
}
