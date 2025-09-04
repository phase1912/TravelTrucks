import {
    resetResults, selectCampersQuery,
} from '@/redux/slices/campersSlice';
import { setForm, setLocation, toggleFeature } from '@/redux/slices/filtersSlice';
import { fetchCampers } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './FilterPanel.module.css';
import spriteUrl from '../../img/icons.svg?url';
import Button from '@/components/Button/Button';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import { icons, formsMapping, FeatureKey, FormKey } from '@/constants';

export default function FilterPanel() {
    const filters = useAppSelector(s => s.filters);
    const dispatch = useAppDispatch();
    const query = useAppSelector(selectCampersQuery);
    
    function apply() {
        dispatch(resetResults());
        dispatch(fetchCampers({ ...query, page: 1, limit: 4 }));
    }


    return (
        <aside style={{ maxWidth: 360 }}>
            <div>
                <label className={styles.locationLabel}>Location</label>
                <div className={styles.locationWrapper}>
                    <CustomSvg className={styles.locationIcon} width={20} height={20}
                               spriteUrl={`${spriteUrl}#icon-map`}/>
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
                            <CustomSvg label={'Features'} width={32} height={32} spriteUrl={`${spriteUrl}#${iconId}`}/>
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
                            <CustomSvg label={'Features'} width={32} height={32} spriteUrl={`${spriteUrl}#${iconId}`}/>
                            <span style={{ textTransform: 'capitalize' }}>{form}</span>
                        </button>);
                    })}
                </div>
            </div>

            <Button text={'Apply filters'} onClickHandler={apply} style={{ marginTop: '40px' }}/>
        </aside>
    );
}
