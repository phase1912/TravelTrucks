import {
    resetResults, selectCampersQuery,
} from '@/redux/slices/campersSlice';
import { setForm, setLocation, toggleFeature } from '@/redux/slices/filtersSlice';
import { fetchCampers } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './FilterPanel.module.css';
import spriteUrl from '../../img/icons.svg?url';
import Button from '@/components/Button/Button';

export default function FilterPanel() {
    const filters = useAppSelector(s => s.filters);
    const dispatch = useAppDispatch();
    const query = useAppSelector(selectCampersQuery);
    const icons = {
        'AC': 'icon-wind',
        'automatic': 'icon-diagram',
        'kitchen': 'icon-cup-hot',
        'TV': 'icon-tv',
        'bathroom': 'icon-ph_shower',
        'camperVan': 'icon-bi_grid-1x2',
        'alcove': 'icon-bi_grid-3x3-gap',
        'fullyIntegrated': 'icon-bi_grid-2x2'
    };
    const formsMapping = {
        'camperVan': 'van',
        'alcove': 'alcove',
        'fullyIntegrated': 'fully integrated',
    };

    type FeatureKey = keyof typeof icons;
    type FormKey = keyof typeof formsMapping;

    function apply() {
        dispatch(resetResults());
        dispatch(fetchCampers({ ...query, page: 1, limit: 4 }));
    }


    return (
        <aside>
            <div>
                <label className={styles.locationLabel}>Location</label>
                <div className={styles.locationWrapper}>
                    <svg className={styles.locationIcon} aria-label={'Location'} width={20} height={20}>
                        <use href={`${spriteUrl}#icon-map`}></use>
                    </svg>
                    <input className={styles.locationInput} placeholder="City" value={filters.location}
                           onChange={e => dispatch(setLocation(e.target.value))}/>
                </div>
            </div>

            <p className={styles.filtersSeparationText}>Filters</p>

            <div className={styles.equipmentContainer}>
                <h1>Vehicle equipment</h1>
                <div className="separator"></div>
                <div className={styles.equipmentFilerContainer}>
                    {Object.keys(filters.features).map(k => {
                        const iconId = icons[k as FeatureKey] ?? 'icon-wind';
                        return (<button key={k}
                                        className={`${styles.equipmentFilterItem} ${(filters.features as any)[k] ? styles.active : ''}`}
                                        onClick={() => dispatch(toggleFeature(k as any))}>
                            <svg aria-label={'Features'} width={32} height={32}>
                                <use href={`${spriteUrl}#${iconId}`}></use>
                            </svg>
                            <span style={{ textTransform: 'capitalize' }}>{k}</span>
                        </button>);
                    })}
                </div>
            </div>


            <div className={styles.equipmentContainer}>
                <h1>Vehicle equipment</h1>
                <div className="separator"></div>
                <div className={styles.equipmentFilerContainer}>
                    {['camperVan', 'fullyIntegrated', 'alcove'].map(k => {
                        const iconId = icons[k as FeatureKey] ?? 'icon-wind';
                        const form = formsMapping[k as FormKey] ?? 'alcove';
                        return (<button key={k}
                                        className={`${styles.equipmentFilterItem} ${filters.form == k ? styles.active : ''}`}
                                        onClick={() => dispatch(setForm(k))}>
                            <svg aria-label={'Features'} width={32} height={32}>
                                <use href={`${spriteUrl}#${iconId}`}></use>
                            </svg>
                            <span style={{ textTransform: 'capitalize' }}>{form}</span>
                        </button>);
                    })}
                </div>
            </div>

            <Button text={'Apply filters'} onClickHandler={apply} style={{ marginTop: '40px' }}/>
        </aside>
    );
}
