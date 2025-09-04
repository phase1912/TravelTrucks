import { useEffect } from 'react';
import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import {
    nextPage,
    resetResults, selectCampersItems,
    selectCampersPage,
    selectCampersQuery,
    selectCampersStatus, selectHasMore, selectTotalItems,
} from '@/redux/slices/campersSlice';
import { fetchCampers } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import styles from './Catalog.module.css';
import CamperCard from '@/components/CamperCard/CamperCard';
import Button from '@/components/Button/Button';

export default function Catalog() {
    const dispatch = useAppDispatch();
    const page = useAppSelector(selectCampersPage);
    const query = useAppSelector(selectCampersQuery);
    const campers = useAppSelector(selectCampersItems);
    const status = useAppSelector(selectCampersStatus);
    const hasMore = useAppSelector(selectHasMore);
    const total = useAppSelector(selectTotalItems);

    useEffect(() => {
        dispatch(resetResults());
        dispatch(fetchCampers({ ...query, page, limit: 4 }));
    }, [dispatch]);


    function loadMore() {
        if (campers.length >= total) return;
        dispatch(nextPage());
        const next = page + 1;
        dispatch(fetchCampers({ ...query, page: next, limit: 4 }));
    }

    return (
        <section className={`container ${styles.catalogContainer}`}>
            <FilterPanel/>
            <div className={styles.cardsContainer}>
                {campers.map(item => <CamperCard key={item.id} item={item}/>)}
                {status === 'loading' ? <Loader/> : null}
                {!campers.length && status === 'succeeded' ? <p>No campers found.</p> : null}
                {hasMore && <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className={styles.loadMoreButton} text={'Load More'} onClickHandler={loadMore}
                            disabled={!hasMore || status === 'loading'}/>
                </div>}
            </div>
            <Toast/>
        </section>
    );
}
