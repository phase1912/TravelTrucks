import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '@/components/Loader';
import Gallery from '@/components/Gallery';
import ReviewList from '@/components/ReviewList';
import BookingForm from '@/components/BookingForm';
import RatingStars from '@/components/RatingStars';
import FavoritesButton from '@/components/FavoritesButton';
import { MapPin } from '@/components/icons';
import { formatPrice } from '@/utils/format';
import Toast from '@/components/Toast';
import { fetchCamperById } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function CamperDetails() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const camper = useAppSelector(s => s.campers.selected);

    useEffect(() => {
        if (id) dispatch(fetchCamperById(id));
    }, [id, dispatch]);

    if (!camper) return <div className="container" style={{ padding: '32px 0' }}><Loader/></div>;

    return (
        <section className="container" style={{ padding: '32px 0 64px', display: 'grid', gap: 24 }}>
            <Link to="/catalog" className="btn-outline">← Back to catalog</Link>
            <div className="card" style={{ padding: 16 }}>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                        <h1 style={{ margin: '0 0 6px' }}>{camper.name}</h1>
                        <div className="row" style={{ gap: 8, color: 'var(--muted)' }}>
                            <RatingStars value={camper.rating ?? 0}/>
                            <span>•</span>
                            <span className="row"><MapPin/> {camper.location}</span>
                        </div>
                    </div>
                    <div className="row" style={{ gap: 12, alignItems: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: 18 }}>{formatPrice(camper.price)} €</div>
                        <FavoritesButton id={camper.id}/>
                    </div>
                </div>
                <div className="separator"></div>
                <Gallery images={camper.gallery}/>
                <div className="separator"></div>
                <p style={{ margin: 0, color: 'var(--muted)' }}>{camper.description}</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 360px', gap: 24 }}>
                <div className="card" style={{ padding: 16 }}>
                    <h3>Vehicle details</h3>
                    <div className="grid grid-2" style={{ marginTop: 12 }}>
                        <Detail label="Form" value={camper.form}/>
                        <Detail label="Transmission" value={camper.transmission}/>
                        <Detail label="Engine" value={camper.engine}/>
                        <Detail label="Length" value={camper.length}/>
                        <Detail label="Width" value={camper.width}/>
                        <Detail label="Height" value={camper.height}/>
                        <Detail label="Tank" value={camper.tank}/>
                        <Detail label="Consumption" value={camper.consumption}/>
                        <Detail label="AC" value={camper.AC ? 'Yes' : 'No'}/>
                        <Detail label="Bathroom" value={camper.bathroom ? 'Yes' : 'No'}/>
                        <Detail label="Kitchen" value={camper.kitchen ? 'Yes' : 'No'}/>
                        <Detail label="TV" value={camper.TV ? 'Yes' : 'No'}/>
                        <Detail label="Radio" value={camper.radio ? 'Yes' : 'No'}/>
                        <Detail label="Refrigerator" value={camper.refrigerator ? 'Yes' : 'No'}/>
                        <Detail label="Microwave" value={camper.microwave ? 'Yes' : 'No'}/>
                        <Detail label="Gas" value={camper.gas ? 'Yes' : 'No'}/>
                        <Detail label="Water" value={camper.water ? 'Yes' : 'No'}/>
                    </div>

                    <div className="separator"></div>
                    <h3>Reviews</h3>
                    <ReviewList camper={camper}/>
                </div>

                <BookingForm camperName={camper.name}/>
            </div>
            <Toast/>
        </section>
    );
}

function Detail({ label, value }: { label: string, value?: string }) {
    if (!value) return null;
    return (
        <div style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: 'var(--muted)' }}>{label}</span>
            <strong>{value}</strong>
        </div>
    );
}
