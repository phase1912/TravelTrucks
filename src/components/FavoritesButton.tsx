import { Heart } from './icons';
import { toggleFavorite } from '@/redux/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function FavoritesButton({ id, size = 24 }: { id: string, size?: number }) {
    const favs = useAppSelector(s => s.favorites.ids);
    const dispatch = useAppDispatch();
    const isFav = favs.includes(id);
    return (
        <button
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            onClick={() => dispatch(toggleFavorite(id))}
            className="btn-outline"
            style={{ borderRadius: 12, padding: '8px 12px' }}
        >
            <Heart filled={isFav} size={size}/> {isFav ? 'Saved' : 'Save'}
        </button>
    );
}
