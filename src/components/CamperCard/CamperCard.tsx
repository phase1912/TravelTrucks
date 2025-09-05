import { useNavigate } from 'react-router-dom';
import { formatPrice, joinTruthy } from '@/utils/format';
import { Camper } from '@/models/camper';
import styles from './CamperCard.module.css';
import FavoritesButton from '@/components/FavoritesButton/FavoritesButton';
import { FeatureKey } from '@/constants';
import Button from '@/components/Button/Button';
import { RatingLocation } from '@/components/RatingLocation/RatingLocation';
import { FeatureItem } from '@/components/FeatureItem/FeatureItem';

export default function CamperCard({ item }: { item: Camper }) {
    const navigate = useNavigate();

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
                {item.gallery?.[0] ? <img src={item.gallery[0].original} alt={item.name}
                                          className={styles.cardImage}/> : null}
            </div>
            <div className={styles.cardDetailsContainer}>
                <div className={styles.cardHeaderContainer}>
                    <div className={styles.cardHeaderPriceContainer}>
                        <h2 className={styles.cardHeader}>{item.name}</h2>
                        <div className={styles.cardPriceContainer}>
                            <div>€ {formatPrice(item.price)}</div>
                            <FavoritesButton id={item.id}/>
                        </div>
                    </div>
                    <RatingLocation rating={item.rating} location={item.location} reviewsLength={item.reviews?.length}/>
                </div>

                <p className={styles.description}>
                    {item.description ?? ''}
                </p>

                <div className={styles.cardFeaturesWrapper}>
                    {joinTruthy([item.transmission === 'manual' ? undefined : item.transmission, item.engine, item.form]).split(' · ').filter(Boolean).map((t, i) => (
                        <FeatureItem key={i} text={t} iconName={t as FeatureKey}/>
                    ))}

                    {item.kitchen ? <FeatureItem text={'Kitchen'} iconName={'kitchen'}/> : null}
                    {item.bathroom ? <FeatureItem text={'Bathroom'} iconName={'bathroom'}/> : null}
                    {item.AC ? <FeatureItem text={'AC'} iconName={'AC'}/> : null}

                </div>

                <Button text={'Show more'} onClickHandler={() => navigate(`/catalog/${item.id}`)}/>
            </div>
        </div>
    );
}
