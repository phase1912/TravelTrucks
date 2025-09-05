import {
    resetResults,
} from '@/redux/slices/campersSlice';
import { replaceFilters } from '@/redux/slices/filtersSlice';
import { fetchCampers } from '@/redux/camperOps';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './FilterPanel.module.css';
import spriteUrl from '../../img/icons.svg?url';
import Button from '@/components/Button/Button';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import { icons, formsMapping, FeatureKey, FormKey } from '@/constants';
import { useEffect, useState } from 'react';
import { Filters } from '@/models/filter';
import { toQuery } from '@/utils/helpers';

export default function FilterPanel() {
    const appliedFilters = useAppSelector(s => s.filters);
    const dispatch = useAppDispatch();
    const [draft, setDraft] = useState(appliedFilters);
    type FeatureToggleKey = keyof Filters['features'];

    useEffect(() => {
        setDraft(appliedFilters);
    }, [appliedFilters]);

    function apply() {
        const query = toQuery(draft);
        dispatch(resetResults());
        dispatch(replaceFilters(draft));
        dispatch(fetchCampers({ ...query, page: 1, limit: 4 }));
    }


    const onToggleFeature = (k: FeatureToggleKey) => {
        setDraft(prev => {
            const nextVal = !prev.features[k];
            const next: Filters = {
                ...prev,
                features: { ...prev.features, [k]: nextVal },
            };
            
            if (k === 'automatic') {
                next.transmission = nextVal ? 'automatic' : '';
            }
            return next;
        });
    };

    return (
        <aside style={{ maxWidth: 360 }}>
            <div>
                <label className={styles.locationLabel}>Location</label>
                <div className={styles.locationWrapper}>
                    <CustomSvg className={styles.locationIcon} width={20} height={20}
                               spriteUrl={`${spriteUrl}#icon-map`}/>
                    <input className={styles.locationInput} placeholder="City" value={draft.location}
                           onChange={e => setDraft(prev => ({ ...prev, location: e.target.value }))}/>
                </div>
            </div>

            <p className={styles.filtersSeparationText}>Filters</p>

            <div className={styles.equipmentContainer}>
                <h1>Vehicle equipment</h1>
                <div className="separator"></div>
                <div className={styles.equipmentFilerContainer}>
                    {Object.keys(draft.features).map(k => {
                        const iconId = icons[k as FeatureKey] ?? 'icon-wind';
                        return (<button key={k}
                                        className={`${styles.equipmentFilterItem} ${(draft.features as any)[k] ? styles.active : ''}`}
                                        onClick={() => onToggleFeature(k as FeatureToggleKey)}>
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
                                        className={`${styles.equipmentFilterItem} ${draft.form == k ? styles.active : ''}`}
                                        onClick={() => setDraft(prev => ({ ...prev, form: k }))}>
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
