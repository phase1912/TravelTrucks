import { useNavigate } from 'react-router-dom';
import { formatPrice, joinTruthy } from '@/utils/format';
import { Camper } from '@/models/camper';
import styles from './CamperCard.module.css';
import FavoritesButton from '@/components/FavoritesButton/FavoritesButton';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import spriteUrl from '../../img/icons.svg?url';
import { icons, FeatureKey } from '@/constants';
import Button from '@/components/Button/Button';
import { RatingLocation } from '@/components/RatingLocation/RatingLocation';

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
                        <span key={i} className={styles.cardFeature}><CustomSvg width={20} height={20}
                                                                                spriteUrl={`${spriteUrl}#${icons[t as FeatureKey] ?? 'icon-fuel-pump'}`}/>{t}</span>
                    ))}
                    {item.kitchen ? <span className={styles.cardFeature}><CustomSvg width={20} height={20}
                                                                                    spriteUrl={`${spriteUrl}#${icons['kitchen']}`}/>Kitchen</span> : null}
                    {item.bathroom ? <span className={styles.cardFeature}><CustomSvg width={20} height={20}
                                                                                     spriteUrl={`${spriteUrl}#${icons['bathroom']}`}/>Bathroom</span> : null}
                    {item.AC ? <span className={styles.cardFeature}><CustomSvg width={20} height={20}
                                                                               spriteUrl={`${spriteUrl}#${icons['AC']}`}/>AC</span> : null}
                </div>

                <Button text={'Show more'} onClickHandler={() => navigate(`/catalog/${item.id}`)}/>
            </div>
        </div>
    );
}
