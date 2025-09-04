import spriteUrl from '../../img/icons.svg?url';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import styles from './RatingStars.module.css';

type RatingStarsProps = {
    value?: number
    size?: number
    count?: number
}

export default function RatingStars({ value = 0, size = 16, count = 5 }: RatingStarsProps) {
    const full = Math.round(value ?? 0);

    return (
        <div className="row" aria-label={`rating ${value} of ${count}`}>
            {Array.from({ length: count }).map((_, i) => (
                <CustomSvg
                    key={i}
                    className={styles.ratingIcon}
                    fill={i + 1 <= full ? '#FFC531' : 'none'}
                    width={size}
                    height={size}
                    spriteUrl={`${spriteUrl}#icon-star`}
                />
            ))}
        </div>
    );
}