import { toggleFavorite } from '@/redux/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import spriteUrl from '../../img/icons.svg?url';
import styles from './FavoritesButton.module.css';

export default function FavoritesButton({ id }: { id: string }) {
    const favs = useAppSelector(s => s.favorites.ids);
    const dispatch = useAppDispatch();
    const isFav = favs.includes(id);

    return (
        <button
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            onClick={() => dispatch(toggleFavorite(id))}
            className={`${styles.favoritesButton} ${isFav ? styles.active : ''}`}
        >
            <CustomSvg className={styles.favoritesIcon} width={26} height={24} spriteUrl={`${spriteUrl}#icon-heart`}/>
        </button>
    );
}
