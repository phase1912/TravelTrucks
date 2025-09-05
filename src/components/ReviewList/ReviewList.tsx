import { Camper } from '@/models/camper';
import RatingStars from '@/components/RatingStars/RatingStars';
import styles from './ReviewList.module.css';

export default function ReviewList({ camper }: { camper: Camper }) {
    const reviews = camper.reviews ?? [];
    if (!reviews.length) return <p style={{ color: 'var(--main)' }}>No reviews yet.</p>;
    return (
        <div className={styles.reviewContainer}>
            {reviews.map((r, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div className={styles.avatar}
                             aria-hidden>{r.reviewer_name?.charAt(0).toUpperCase()}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <strong className={styles.avatarText}>{r.reviewer_name}</strong>
                            <RatingStars value={r.reviewer_rating}/>
                        </div>
                    </div>
                    <p className={styles.text}>{r.comment}</p>
                </div>
            ))}
        </div>
    );
}
