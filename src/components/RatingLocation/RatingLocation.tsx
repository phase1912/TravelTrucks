import RatingStars from '@/components/RatingStars/RatingStars';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import spriteUrl from '../../img/icons.svg?url';
import styles from './RatingLocation.module.css';

export function RatingLocation({ rating, reviewsLength, location }: {
    location: string,
    rating?: number,
    reviewsLength?: number
}) {
    return (
        <div className={styles.ratingLocationContainer}>
            <div className={styles.ratingContainer}>
                <span>{`${rating} (${reviewsLength} Reviews)`}</span>
                <RatingStars value={rating} count={1}/>
            </div>
            <span className={styles.locationContainer}><CustomSvg width={16} height={16}
                                                                  spriteUrl={`${spriteUrl}#icon-map`}/>{location}</span>
        </div>
    );
}