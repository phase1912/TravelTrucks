import FavoritesButton from './FavoritesButton';
import RatingStars from './RatingStars';
import { Link } from 'react-router-dom';
import { MapPin } from './icons';
import { formatPrice, joinTruthy } from '@/utils/format';
import { Camper } from '@/models/camper';

export default function CamperCard({ item }: { item: Camper }) {
    return (
        <div className="card" style={{ padding: 16, display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16 }}>
            <div style={{ height: 120, width: 180, background: '#e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                {item.gallery?.[0] ? <img src={item.gallery[0]} alt={item.name}
                                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> : null}
            </div>
            <div style={{ display: 'grid', gap: 8 }}>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                        <h3 style={{ margin: '0 0 4px' }}>{item.name}</h3>
                        <div className="row" style={{ gap: 8, color: 'var(--muted)' }}>
                            <RatingStars value={item.rating ?? 0}/>
                            <span>•</span>
                            <span className="row"><MapPin/> {item.location}</span>
                        </div>
                    </div>
                    <div className="row" style={{ gap: 12, alignItems: 'center' }}>
                        <div style={{ fontWeight: 700 }}>{formatPrice(item.price)} €</div>
                        <FavoritesButton id={item.id}/>
                    </div>
                </div>
                <p style={{ margin: '4px 0 8px', color: 'var(--muted)' }}>
                    {item.description ?? ''}
                </p>
                <div className="row" style={{ flexWrap: 'wrap', gap: 8 }}>
                    {joinTruthy([item.transmission, item.engine, item.form]).split(' · ').filter(Boolean).map((t, i) => (
                        <span key={i} className="badge">{t}</span>
                    ))}
                    {item.AC ? <span className="badge">AC</span> : null}
                    {item.kitchen ? <span className="badge">Kitchen</span> : null}
                    {item.bathroom ? <span className="badge">Bathroom</span> : null}
                </div>
                <div className="row" style={{ justifyContent: 'end', gap: 12 }}>
                    <Link to={`/catalog/${item.id}`} target="_blank" rel="noopener noreferrer" className="btn-outline">Show
                        more</Link>
                </div>
            </div>
        </div>
    );
}
