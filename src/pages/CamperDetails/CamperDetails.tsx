import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '@/components/Loader';
import { formatPrice, formatValueWithSpace } from '@/utils/format';
import Toast from '@/components/Toast';
import { fetchCamperById } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './CamperDetails.module.css';
import { RatingLocation } from '@/components/RatingLocation/RatingLocation';
import Gallery from '@/components/Gallery/Gallery';
import { FeatureItem } from '@/components/FeatureItem/FeatureItem';
import { FeatureKey } from '@/constants';
import { capitalizeFirstWord } from '@/utils/helpers';
import ReviewList from '@/components/ReviewList/ReviewList';
import BookingForm from '@/components/BookingForm/BookingForm';

export default function CamperDetails() {
    const { id } = useParams();
    const [tab, setTab] = useState<'features' | 'reviews'>('features');
    const dispatch = useAppDispatch();
    const camper = useAppSelector(s => s.campers.selected);

    useEffect(() => {
        if (id) dispatch(fetchCamperById(id));
    }, [id, dispatch]);

    if (!camper) return <div className="container" style={{ padding: '32px 0' }}><Loader/></div>;

    return (
        <section className={`container ${styles.camperDetailsSection}`}>
            {/*<Link to="/catalog" className="btn-outline">← Back to catalog</Link>*/}
            <div className={styles.detailsCard} style={{ padding: 16 }}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.cardHeader}>{camper.name}</h2>
                    <RatingLocation rating={camper.rating} location={camper.location}
                                    reviewsLength={camper.reviews?.length}/>
                    <h2 className={styles.cardHeader}>€ {formatPrice(camper.price)}</h2>
                </div>

                <Gallery images={camper.gallery}/>

                <p className={styles.descriptionText}>{camper.description}</p>
            </div>

            <div className={styles.tabsContainer}>
                <div className={styles.tabsBar} role="tablist" aria-label="Camper details">
                    <button
                        role="tab"
                        aria-selected={tab === 'features'}
                        className={`${styles.tab} ${tab === 'features' ? styles.tabActive : ''}`}
                        onClick={() => setTab('features')}
                    >
                        Features
                    </button>
                    <button
                        role="tab"
                        aria-selected={tab === 'reviews'}
                        className={`${styles.tab} ${tab === 'reviews' ? styles.tabActive : ''}`}
                        onClick={() => setTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                <div className="separator"></div>

                <div className={styles.twoCol}>
                    <>
                        {tab === 'features' ? (
                            <div className={styles.featuresCardContainer}>
                                <div className={styles.featureChips}>
                                    {camper.transmission && <FeatureItem text={camper.transmission}
                                                                         iconName={camper.transmission as FeatureKey}/>}
                                    {camper.AC && <FeatureItem text={'AC'} iconName={'AC'}/>}
                                    {camper.engine &&
                                        <FeatureItem text={camper.engine} iconName={camper.engine as FeatureKey}/>}
                                    {camper.kitchen && <FeatureItem text={'Kitchen'} iconName={'kitchen'}/>}
                                    {camper.radio && <FeatureItem text={'Radio'} iconName={'radio'}/>}

                                    {camper.bathroom && <FeatureItem text={'Bathroom'} iconName={'bathroom'}/>}
                                    {camper.TV && <FeatureItem text={'TV'} iconName={'TV'}/>}
                                    {camper.form &&
                                        <FeatureItem text={camper.form} iconName={camper.form as FeatureKey}/>}
                                    {camper.refrigerator &&
                                        <FeatureItem iconName={'refrigerator'} text={'Refrigerator'}/>}
                                    {camper.microwave &&
                                        <FeatureItem svgStyle={{ stroke: '#FFFFFF' }} iconName={'microwave'}
                                                     text={'Microwave'}/>}
                                    {camper.gas && <FeatureItem iconName={'gas'} text={'Gas'}/>}
                                    {camper.water && <FeatureItem svgStyle={{ stroke: '#FFFFFF' }} iconName={'water'}
                                                                  text={'Water'}/>}
                                </div>

                                <div className={styles.detailsBox}>
                                    <h3 className={styles.detailBoxHeader}>Vehicle details</h3>
                                    <div className="separator"></div>
                                    <div className={styles.detailBoxContainer}>
                                        <Detail label="Form" value={camper.form}/>
                                        <Detail label="Length" value={camper.length}/>
                                        <Detail label="Width" value={camper.width}/>
                                        <Detail label="Height" value={camper.height}/>
                                        <Detail label="Tank" value={camper.tank}/>
                                        <Detail label="Consumption" value={camper.consumption}/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className={styles.visuallyHidden}>Reviews</h3>
                                <ReviewList camper={camper}/>
                            </>
                        )}
                    </>

                    <BookingForm className={styles.bookingFormContainer} camperName={camper.name}/>
                </div>
            </div>

            <Toast/>
        </section>
    );
}

function Detail({ label, value }: { label: string, value?: string }) {
    if (!value) return null;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', height: 24 }}>
            <span style={{ color: 'var(--main)' }}>{label}</span>
            <span>{capitalizeFirstWord(formatValueWithSpace(value))}</span>
        </div>
    );
}
