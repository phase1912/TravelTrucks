import { Camper } from '@/models/camper';
import RatingStars from '@/components/RatingStars/RatingStars';

export default function ReviewList({ camper }: { camper: Camper }) {
    const reviews = camper.reviews ?? [];
    if (!reviews.length) return <p style={{ color: 'var(--muted)' }}>No reviews yet.</p>;
    return (
        <div className="grid" style={{ gap: 16 }}>
            {reviews.map((r, idx) => (
                <div key={idx} className="card" style={{ padding: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#e5e7eb' }}
                             aria-hidden></div>
                        <div style={{ display: 'grid' }}>
                            <strong>{r.reviewer_name}</strong>
                            <RatingStars value={r.rating}/>
                        </div>
                    </div>
                    <p style={{ margin: 0 }}>{r.comment}</p>
                </div>
            ))}
        </div>
    );
}
